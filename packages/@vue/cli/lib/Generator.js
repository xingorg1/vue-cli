const ejs = require('ejs')
const debug = require('debug')
const GeneratorAPI = require('./GeneratorAPI')
const PackageManager = require('./util/ProjectPackageManager')
const sortObject = require('./util/sortObject')
const writeFileTree = require('./util/writeFileTree')
const inferRootOptions = require('./util/inferRootOptions')
const normalizeFilePaths = require('./util/normalizeFilePaths')
const { runTransformation } = require('vue-codemod')
const Module = require('module')
const path = require('path')

const {
  semver,

  isPlugin,
  toShortPluginId,
  matchesPluginId,

  loadModule,

  sortPlugins
} = require('@vue/cli-shared-utils')
const ConfigTransform = require('./ConfigTransform')

const logger = require('@vue/cli-shared-utils/lib/logger')
const logTypes = {
  log: logger.log,
  info: logger.info,
  done: logger.done,
  warn: logger.warn,
  error: logger.error
}

const defaultConfigTransforms = {
  babel: new ConfigTransform({
    file: {
      js: ['babel.config.js']
    }
  }),
  postcss: new ConfigTransform({
    file: {
      js: ['postcss.config.js'],
      json: ['.postcssrc.json', '.postcssrc'],
      yaml: ['.postcssrc.yaml', '.postcssrc.yml']
    }
  }),
  eslintConfig: new ConfigTransform({
    file: {
      js: ['.eslintrc.js'],
      json: ['.eslintrc', '.eslintrc.json'],
      yaml: ['.eslintrc.yaml', '.eslintrc.yml']
    }
  }),
  jest: new ConfigTransform({
    file: {
      js: ['jest.config.js']
    }
  }),
  browserslist: new ConfigTransform({
    file: {
      lines: ['.browserslistrc']
    }
  }),
  'lint-staged': new ConfigTransform({
    file: {
      js: ['lint-staged.config.js'],
      json: ['.lintstagedrc', '.lintstagedrc.json'],
      yaml: ['.lintstagedrc.yaml', '.lintstagedrc.yml']
    }
  })
}

const reservedConfigTransforms = {
  vue: new ConfigTransform({
    file: {
      js: ['vue.config.js']
    }
  })
}

const ensureEOL = str => {
  if (str.charAt(str.length - 1) !== '\n') {
    return str + '\n'
  }
  return str
}

/**
 * Collect created/modified files into set
 * @param {Record<string,string|Buffer>} files
 * @param {Set<string>} set
 */
const watchFiles = (files, set) => {
  return new Proxy(files, {
    set (target, key, value, receiver) {
      set.add(key)
      return Reflect.set(target, key, value, receiver)
    },
    deleteProperty (target, key) {
      set.delete(key)
      return Reflect.deleteProperty(target, key)
    }
  })
}

module.exports = class Generator {
  constructor (context, {
    pkg = {},
    plugins = [],
    afterInvokeCbs = [],
    afterAnyInvokeCbs = [],
    files = {},
    invoking = false
  } = {}) {
    this.context = context
    // this.testfunction(path.resolve(context, 'package.json'))
    this.plugins = sortPlugins(plugins)
    this.originalPkg = pkg
    this.pkg = Object.assign({}, pkg)
    this.pm = new PackageManager({ context })
    this.imports = {}
    this.rootOptions = {}
    this.afterInvokeCbs = afterInvokeCbs
    this.afterAnyInvokeCbs = afterAnyInvokeCbs
    this.configTransforms = {}
    this.defaultConfigTransforms = defaultConfigTransforms
    this.reservedConfigTransforms = reservedConfigTransforms
    this.invoking = invoking // 援引；祈求；唤起
    // for conflict resolution
    this.depSources = {}
    // virtual file tree
    this.files = Object.keys(files).length
      // when execute `vue add/invoke`, only created/modified files are written to disk
      ? watchFiles(files, this.filesModifyRecord = new Set())
      // all files need to be written to disk
      : files
    this.fileMiddlewares = []
    this.postProcessFilesCbs = []
    // exit messages
    this.exitLogs = []

    // load all the other plugins
    this.allPlugins = this.resolveAllPlugins()

    const cliService = plugins.find(p => p.id === '@vue/cli-service') // cli-service的plugin

    const rootOptions = cliService
      ? cliService.options
      : inferRootOptions(pkg)
    this.rootOptions = rootOptions // 得到 cli-service的options
  }
  testfunction (filename) {
    console.log(path.dirname(filename));
    // /Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test/package.json
    const mod = new Module(filename, null)
    mod.filename = filename
    mod.paths = Module._nodeModulePaths(path.dirname(filename))
  
    mod._compile(`module.exports = require;`, filename)
    console.log(mod.exports);
    return mod.exports
  }

  async initPlugins () {
    const { rootOptions, invoking } = this
    const pluginIds = this.plugins.map(p => p.id)

    // avoid modifying the passed afterInvokes, because we want to ignore them from other plugins
    const passedAfterInvokeCbs = this.afterInvokeCbs
    this.afterInvokeCbs = []
    // apply hooks from all plugins to collect 'afterAnyHooks'
    for (const plugin of this.allPlugins) {
      const { id, apply } = plugin
      const api = new GeneratorAPI(id, this, {}, rootOptions)

      if (apply.hooks) {
        await apply.hooks(api, {}, rootOptions, pluginIds)
      }
    }

    // We are doing save/load to make the hook order deterministic
    // save "any" hooks
    const afterAnyInvokeCbsFromPlugins = this.afterAnyInvokeCbs

    // reset hooks
    this.afterInvokeCbs = passedAfterInvokeCbs
    this.afterAnyInvokeCbs = []
    this.postProcessFilesCbs = []

    // apply generators from plugins
    for (const plugin of this.plugins) {
      const { id, apply, options } = plugin
      // console.log('plugin', plugin);
      const api = new GeneratorAPI(id, this, options, rootOptions) // api是当前plugin对象生成的generator对象的包装
      console.log('开始api');
      await apply(api, options, rootOptions, invoking) // applay相当于require，就是把plugin的入口文件加载一遍。
      console.log('apply完了');
      if (apply.hooks) {
        // while we execute the entire `hooks` function,
        // only the `afterInvoke` hook is respected
        // because `afterAnyHooks` is already determined by the `allPlugins` loop above
        await apply.hooks(api, options, rootOptions, pluginIds)
      }
    }
    // restore "any" hooks
    
    this.afterAnyInvokeCbs = afterAnyInvokeCbsFromPlugins
  }

  async generate ({
    extractConfigFiles = false,
    checkExisting = false
  } = {}) {
    // extractConfigFiles为false
    await this.initPlugins()
    
    // 在应用插件之前保存文件系统，以便比较
    const initialFiles = Object.assign({}, this.files)
    // 从包中提取配置。Json转换为专用文件。函数调完没啥效果，因为内部逻辑if条件都不成立
    this.extractConfigFiles(extractConfigFiles, checkExisting)
    // 等待文件解析
    await this.resolveFiles()
    // set package.json
    this.sortPkg()
    this.files['package.json'] = JSON.stringify(this.pkg, null, 2) + '\n'
    // console.log(this.files); // 得到各个文件的"路径/名称"为键名、content为值的Map对象
    // 将文件树写入磁盘
    await writeFileTree(this.context, this.files, initialFiles, this.filesModifyRecord)
    // console.log(gjf);
  }

  extractConfigFiles (extractAll, checkExisting) {
    // false, false
    // 整合所有依赖的配置文件
    const configTransforms = Object.assign({},
      defaultConfigTransforms,
      this.configTransforms,
      reservedConfigTransforms
    )
    /* 
    configTransforms = {
      babel: ConfigTransform { fileDescriptor: { js: [Array] } },
      postcss: ConfigTransform {
        fileDescriptor: { js: [Array], json: [Array], yaml: [Array] }
      },
      eslintConfig: ConfigTransform {
        fileDescriptor: { js: [Array], json: [Array], yaml: [Array] }
      },
      jest: ConfigTransform { fileDescriptor: { js: [Array] } },
      browserslist: ConfigTransform { fileDescriptor: { lines: [Array] } },
      'lint-staged': ConfigTransform {
        fileDescriptor: { js: [Array], json: [Array], yaml: [Array] }
      },
      vue: ConfigTransform { fileDescriptor: { js: [Array] } }
    }
     */
    
    const extract = key => {
      if (
        configTransforms[key] &&
        this.pkg[key] &&
        // do not extract if the field exists in original package.json
        !this.originalPkg[key]
      ) {
        const value = this.pkg[key]
        const configTransform = configTransforms[key]
        const res = configTransform.transform(
          value,
          checkExisting,
          this.files,
          this.context
        )
        const { content, filename } = res
        this.files[filename] = ensureEOL(content)
        delete this.pkg[key]
      }
    }
    if (extractAll) {
      for (const key in this.pkg) {
        extract(key)
      }
    } else {
      if (!process.env.VUE_CLI_TEST) {
        // by default, always extract vue.config.js
        extract('vue')
      }
      // always extract babel.config.js as this is the only way to apply
      // project-wide configuration even to dependencies.
      // TODO: this can be removed when Babel supports root: true in package.json
      extract('babel')
    }
  }

  sortPkg () {
    // ensure package.json keys has readable order
    this.pkg.dependencies = sortObject(this.pkg.dependencies)
    this.pkg.devDependencies = sortObject(this.pkg.devDependencies)
    this.pkg.scripts = sortObject(this.pkg.scripts, [
      'serve',
      'build',
      'test:unit',
      'test:e2e',
      'lint',
      'deploy'
    ])
    this.pkg = sortObject(this.pkg, [
      'name',
      'version',
      'private',
      'description',
      'author',
      'scripts',
      'main',
      'module',
      'browser',
      'jsDelivr',
      'unpkg',
      'files',
      'dependencies',
      'devDependencies',
      'peerDependencies',
      'vue',
      'babel',
      'eslintConfig',
      'prettier',
      'postcss',
      'browserslist',
      'jest'
    ])

    debug('vue:cli-pkg')(this.pkg)
  }

  resolveAllPlugins () {
    // 整理dev和生产依赖，并做sort排序
    const allPlugins = []
    Object.keys(this.pkg.dependencies || {})
      .concat(Object.keys(this.pkg.devDependencies || {}))
      .forEach(id => {
        if (!isPlugin(id)) return
        const pluginGenerator = loadModule(`${id}/generator`, this.context)
        if (!pluginGenerator) return
        allPlugins.push({ id, apply: pluginGenerator })
      })
    return sortPlugins(allPlugins)
  }

  async resolveFiles () {
    const files = this.files // {}
    for (const middleware of this.fileMiddlewares) { // middleware: [AsyncFunction (anonymous)]
      await middleware(files, ejs.render)
    }
    // normalize file paths on windows
    // all paths are converted to use / instead of \

    normalizeFilePaths(files) // 文件路径转换
    console.log('注入前', files['src/main.js']);
    // handle imports and root option injections
    Object.keys(files).forEach(file => {
      let imports = this.imports[file]
      imports = imports instanceof Set ? Array.from(imports) : imports
      if (imports && imports.length > 0) {
        files[file] = runTransformation(
          { path: file, source: files[file] },
          require('./util/codemods/injectImports'),
          { imports }
        )
      }

      let injections = this.rootOptions[file]
      injections = injections instanceof Set ? Array.from(injections) : injections
      if (injections && injections.length > 0) {
        files[file] = runTransformation(
          { path: file, source: files[file] },
          require('./util/codemods/injectOptions'),
          { injections }
        )
      }
    })
    console.log('注入后', files['src/main.js']);
    console.log('注入后', files['public/favicon.ico']);

    for (const postProcess of this.postProcessFilesCbs) {
      await postProcess(files)
    }
    debug('vue:cli-files')(this.files)
  }

  hasPlugin (id, versionRange) {
    const pluginExists = [
      ...this.plugins.map(p => p.id),
      ...this.allPlugins.map(p => p.id)
    ].some(pid => matchesPluginId(id, pid))

    if (!pluginExists) {
      return false
    }

    if (!versionRange) {
      return pluginExists
    }

    return semver.satisfies(
      this.pm.getInstalledVersion(id),
      versionRange
    )
  }

  printExitLogs () {
    if (this.exitLogs.length) {
      this.exitLogs.forEach(({ id, msg, type }) => {
        const shortId = toShortPluginId(id)
        const logFn = logTypes[type]
        if (!logFn) {
          logger.error(`Invalid api.exitLog type '${type}'.`, shortId)
        } else {
          logFn(msg, msg && shortId)
        }
      })
      logger.log()
    }
  }
}
