transformScript、render（三个，if/else）

203 plugins
```js
plugins = [
        {
          id: '@vue/cli-service',
          apply: [Function (anonymous)],
          options: {
            projectName: 'gjf-test',
            vueVersion: '3',
            useConfigFiles: false,
            cssPreprocessor: undefined,
            plugins: [Object]
          }
        },
        {
          id: '@vue/cli-plugin-babel',
          apply: [Function (anonymous)],
          options: {}
        },
        {
          id: '@vue/cli-plugin-eslint',
          apply: [Function (anonymous)] {
            hooks: [Function (anonymous)],
            applyTS: [Function (anonymous)]
          },
          options: { config: 'base', lintOn: [Array] }
        }
      ]
```
232 generator
```js
// Generator的实例化对象
 const Generator = {
  context: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test',
  plugins: [
    {
      id: '@vue/cli-service',
      apply: [Function (anonymous)],
      options: [Object]
    },
    {
      id: '@vue/cli-plugin-babel',
      apply: [Function (anonymous)],
      options: {}
    },
    {
      id: '@vue/cli-plugin-eslint',
      apply: [Function],
      options: [Object]
    }
  ],
  originalPkg: {
    name: 'gjf-test',
    version: '0.1.0',
    private: true,
    devDependencies: {
      '@vue/cli-plugin-babel': '~5.0.0-beta.2',
      '@vue/cli-plugin-eslint': '~5.0.0-beta.2',
      '@vue/cli-service': '~5.0.0-beta.2'
    }
  },
  pkg: {
    name: 'gjf-test',
    version: '0.1.0',
    private: true,
    devDependencies: {
      '@vue/cli-plugin-babel': '~5.0.0-beta.2',
      '@vue/cli-plugin-eslint': '~5.0.0-beta.2',
      '@vue/cli-service': '~5.0.0-beta.2'
    }
  },
  pm: PackageManager {
    context: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test',
    _registries: {},
    bin: 'yarn'
  },
  imports: {},
  rootOptions: { // plugins中@vue/cli-server的options内容
    projectName: 'gjf-test',
    vueVersion: '3',
    useConfigFiles: false,
    cssPreprocessor: undefined,
    plugins: { '@vue/cli-plugin-babel': {}, '@vue/cli-plugin-eslint': [Object] }
  },
  afterInvokeCbs: [],
  afterAnyInvokeCbs: [],
  configTransforms: {},
  defaultConfigTransforms: { // ？把Generator上边的配置项包装了一层类，目前不知道干啥用的。
    babel: ConfigTransform { fileDescriptor: [Object] },
    postcss: ConfigTransform { fileDescriptor: [Object] },
    eslintConfig: ConfigTransform { fileDescriptor: [Object] },
    jest: ConfigTransform { fileDescriptor: [Object] },
    browserslist: ConfigTransform { fileDescriptor: [Object] },
    'lint-staged': ConfigTransform { fileDescriptor: [Object] }
  },
  reservedConfigTransforms: { vue: ConfigTransform { fileDescriptor: [Object] } },
  invoking: false,
  depSources: {},
  files: {},
  fileMiddlewares: [],
  postProcessFilesCbs: [],
  exitLogs: [],
  allPlugins: [
    { id: '@vue/cli-plugin-babel', apply: [Function (anonymous)] },
    { id: '@vue/cli-plugin-eslint', apply: [Function] }
  ]
}
```

Generator-initPlugins-api:180
```js
// 将generator实例华对象进行包装，得到的API，格式如下
/* 
this.id
this.generator
this.options
this.rootOptions
this.pluginsData
this._entryFile = undefined
 */
const GeneratorAPI = {
  id: '@vue/cli-service',
  generator: Generator {
    context: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test',
    plugins: [ [Object], [Object], [Object] ],
    originalPkg: {
      name: 'gjf-test',
      version: '0.1.0',
      private: true,
      devDependencies: [Object]
    },
    pkg: {
      name: 'gjf-test',
      version: '0.1.0',
      private: true,
      devDependencies: [Object]
    },
    pm: PackageManager {
      context: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test',
      _registries: {},
      bin: 'yarn'
    },
    imports: {},
    rootOptions: {
      projectName: 'gjf-test',
      vueVersion: '3',
      useConfigFiles: false,
      cssPreprocessor: undefined,
      plugins: [Object]
    },
    afterInvokeCbs: [],
    afterAnyInvokeCbs: [],
    configTransforms: {},
    defaultConfigTransforms: {
      babel: [ConfigTransform],
      postcss: [ConfigTransform],
      eslintConfig: [ConfigTransform],
      jest: [ConfigTransform],
      browserslist: [ConfigTransform],
      'lint-staged': [ConfigTransform]
    },
    reservedConfigTransforms: { vue: [ConfigTransform] },
    invoking: false,
    depSources: {},
    files: {},
    fileMiddlewares: [],
    postProcessFilesCbs: [],
    exitLogs: [],
    allPlugins: []
  },
  options: {
    projectName: 'gjf-test',
    vueVersion: '3',
    useConfigFiles: false,
    cssPreprocessor: undefined,
    plugins: { '@vue/cli-plugin-babel': {}, '@vue/cli-plugin-eslint': [Object] }
  },
  rootOptions: {
    projectName: 'gjf-test',
    vueVersion: '3',
    useConfigFiles: false,
    cssPreprocessor: undefined,
    plugins: { '@vue/cli-plugin-babel': {}, '@vue/cli-plugin-eslint': [Object] }
  },
  pluginsData: [
    {
      name: 'babel',
      link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel'
    },
    {
      name: 'eslint',
      link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint'
    }
  ],
  _entryFile: undefined
}
const GeneratorAPI = {
  id: '@vue/cli-plugin-babel',
  generator: Generator {
    context: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test',
    plugins: [ [Object], [Object], [Object] ],
    originalPkg: {
      name: 'gjf-test',
      version: '0.1.0',
      private: true,
      devDependencies: [Object]
    },
    pkg: {
      name: 'gjf-test',
      version: '0.1.0',
      private: true,
      devDependencies: [Object],
      dependencies: [Object],
      scripts: [Object],
      browserslist: [Array]
    },
    pm: PackageManager {
      context: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test',
      _registries: {},
      bin: 'yarn'
    },
    imports: {},
    rootOptions: {
      projectName: 'gjf-test',
      vueVersion: '3',
      useConfigFiles: false,
      cssPreprocessor: undefined,
      plugins: [Object]
    },
    afterInvokeCbs: [],
    afterAnyInvokeCbs: [],
    configTransforms: {},
    defaultConfigTransforms: {
      babel: [ConfigTransform],
      postcss: [ConfigTransform],
      eslintConfig: [ConfigTransform],
      jest: [ConfigTransform],
      browserslist: [ConfigTransform],
      'lint-staged': [ConfigTransform]
    },
    reservedConfigTransforms: { vue: [ConfigTransform] },
    invoking: false,
    depSources: {
      vue: '@vue/cli-service',
      '@vue/compiler-sfc': '@vue/cli-service'
    },
    files: {},
    fileMiddlewares: [ [AsyncFunction (anonymous)] ],
    postProcessFilesCbs: [],
    exitLogs: [],
    allPlugins: []
  },
  options: {},
  rootOptions: {
    projectName: 'gjf-test',
    vueVersion: '3',
    useConfigFiles: false,
    cssPreprocessor: undefined,
    plugins: { '@vue/cli-plugin-babel': {}, '@vue/cli-plugin-eslint': [Object] }
  },
  pluginsData: [
    {
      name: 'babel',
      link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel'
    },
    {
      name: 'eslint',
      link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint'
    }
  ],
  _entryFile: undefined
}
const GeneratorAPI = {
  id: '@vue/cli-plugin-eslint',
  generator: Generator {
    context: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test',
    plugins: [ [Object], [Object], [Object] ],
    originalPkg: {
      name: 'gjf-test',
      version: '0.1.0',
      private: true,
      devDependencies: [Object]
    },
    pkg: {
      name: 'gjf-test',
      version: '0.1.0',
      private: true,
      devDependencies: [Object],
      dependencies: [Object],
      scripts: [Object],
      browserslist: [Array]
    },
    pm: PackageManager {
      context: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/gjf-test',
      _registries: {},
      bin: 'yarn'
    },
    imports: {},
    rootOptions: {
      projectName: 'gjf-test',
      vueVersion: '3',
      useConfigFiles: false,
      cssPreprocessor: undefined,
      plugins: [Object]
    },
    afterInvokeCbs: [],
    afterAnyInvokeCbs: [],
    configTransforms: {},
    defaultConfigTransforms: {
      babel: [ConfigTransform],
      postcss: [ConfigTransform],
      eslintConfig: [ConfigTransform],
      jest: [ConfigTransform],
      browserslist: [ConfigTransform],
      'lint-staged': [ConfigTransform]
    },
    reservedConfigTransforms: { vue: [ConfigTransform] },
    invoking: false,
    depSources: {
      vue: '@vue/cli-service',
      '@vue/compiler-sfc': '@vue/cli-service'
    },
    files: {},
    fileMiddlewares: [ [AsyncFunction (anonymous)] ],
    postProcessFilesCbs: [],
    exitLogs: [],
    allPlugins: []
  },
  options: { config: 'base', lintOn: [ 'save' ] },
  rootOptions: {
    projectName: 'gjf-test',
    vueVersion: '3',
    useConfigFiles: false,
    cssPreprocessor: undefined,
    plugins: { '@vue/cli-plugin-babel': {}, '@vue/cli-plugin-eslint': [Object] }
  },
  pluginsData: [
    {
      name: 'babel',
      link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel'
    },
    {
      name: 'eslint',
      link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint'
    }
  ],
  _entryFile: undefined
}
```

@vue/cli-shared-utils/lib/module.js - createRequire - mod
```js
[Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/bin',
    exports: {},
    filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/bin/vue.js',
    loaded: true,
    children: [
      [Module], [Module],
      [Module], [Module],
      [Module], [Module],
      [Module], [Module],
      [Module]
    ],
    paths: [
      '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/bin/node_modules',
      '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules',
      '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/node_modules',
      '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/node_modules',
      '/Users/guojufeng/Documents/GithubCode/vue-cli/node_modules',
      '/Users/guojufeng/Documents/GithubCode/node_modules',
      '/Users/guojufeng/Documents/node_modules',
      '/Users/guojufeng/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/bin/vue.js': Module {
      id: '.',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/bin',
      exports: {},
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/bin/vue.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/env.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/env.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/env.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lru-cache/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lru-cache/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lru-cache',
      exports: [class LRUCache],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lru-cache/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/yallist/yallist.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/yallist/yallist.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/yallist',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/yallist/yallist.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/yallist/iterator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/yallist/iterator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/yallist',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/yallist/iterator.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/re.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/re.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/re.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/constants.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/constants.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/constants.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/debug.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/debug.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/debug.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/semver.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/semver.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes',
      exports: [class SemVer],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/semver.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/parse-options.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/parse-options.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal',
      exports: [Function: parseOptions],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/parse-options.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/identifiers.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/identifiers.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/internal/identifiers.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/parse.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/parse.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: parse],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/parse.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/valid.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/valid.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: valid],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/valid.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/clean.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/clean.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: clean],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/clean.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/inc.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/inc.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: inc],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/inc.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/diff.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/diff.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: diff],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/diff.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/eq.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/eq.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: eq],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/eq.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: compare],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/major.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/major.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: major],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/major.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/minor.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/minor.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: minor],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/minor.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/patch.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/patch.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: patch],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/patch.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/prerelease.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/prerelease.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: prerelease],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/prerelease.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/rcompare.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/rcompare.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: rcompare],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/rcompare.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare-loose.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare-loose.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: compareLoose],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare-loose.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare-build.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare-build.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: compareBuild],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/compare-build.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/sort.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/sort.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: sort],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/sort.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/rsort.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/rsort.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: rsort],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/rsort.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/gt.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/gt.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: gt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/gt.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/lt.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/lt.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: lt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/lt.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/neq.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/neq.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: neq],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/neq.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/gte.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/gte.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: gte],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/gte.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/lte.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/lte.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: lte],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/lte.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/cmp.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/cmp.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: cmp],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/cmp.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/coerce.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/coerce.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: coerce],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/coerce.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/comparator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/comparator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes',
      exports: [class Comparator],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/comparator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/range.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/range.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes',
      exports: [class Range],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/classes/range.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/satisfies.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/satisfies.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions',
      exports: [Function: satisfies],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/functions/satisfies.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/to-comparators.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/to-comparators.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: toComparators],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/to-comparators.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/max-satisfying.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/max-satisfying.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: maxSatisfying],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/max-satisfying.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/min-satisfying.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/min-satisfying.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: minSatisfying],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/min-satisfying.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/min-version.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/min-version.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: minVersion],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/min-version.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/valid.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/valid.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: validRange],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/valid.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/outside.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/outside.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: outside],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/outside.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/gtr.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/gtr.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: gtr],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/gtr.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/ltr.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/ltr.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: ltr],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/ltr.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/intersects.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/intersects.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: intersects],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/intersects.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/simplify.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/simplify.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/simplify.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/subset.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/subset.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges',
      exports: [Function: subset],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/semver/ranges/subset.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/exit.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/exit.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/exit.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/ipc.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/ipc.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/ipc.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/node-ipc.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/node-ipc.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc',
      exports: [IPCModule],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/node-ipc.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/services/IPC.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/services/IPC.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/services',
      exports: [class IPC],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/services/IPC.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/entities/Defaults.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/entities/Defaults.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/entities',
      exports: [class Defaults],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/entities/Defaults.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/dao/client.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/dao/client.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/dao',
      exports: [class Client extends EventPubSub],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/dao/client.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/entities/EventParser.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/entities/EventParser.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/entities',
      exports: [class Parser],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/entities/EventParser.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-message/Message.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-message/Message.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-message',
      exports: [Function: Message],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-message/Message.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-queue/queue.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-queue/queue.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-queue',
      exports: [Function: Queue],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-queue/queue.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/event-pubsub/event-pubsub.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/event-pubsub/event-pubsub.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/event-pubsub',
      exports: [Function: EventPubSub],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/event-pubsub/event-pubsub.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/event-pubsub/es5.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/event-pubsub/es5.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/event-pubsub',
      exports: [Function: EventPubSub],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/event-pubsub/es5.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/dao/socketServer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/dao/socketServer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/dao',
      exports: [class Server extends EventPubSub],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-ipc/dao/socketServer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/logger.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/logger.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/logger.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/chalk/source/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/chalk/source/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/chalk/source',
      exports: [Chalk],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/chalk/source/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/ansi-styles/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/ansi-styles/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/ansi-styles',
      exports: [Getter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/ansi-styles/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/supports-color/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/supports-color/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/supports-color',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/supports-color/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/has-flag/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/has-flag/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/has-flag',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/has-flag/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/chalk/source/util.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/chalk/source/util.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/chalk/source',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/node_modules/chalk/source/util.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/strip-ansi/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/strip-ansi/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/strip-ansi',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/strip-ansi/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-regex/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-regex/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-regex',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-regex/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/spinner.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/spinner.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/spinner.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/chalk/source/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/chalk/source/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/chalk/source',
      exports: [Chalk],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/chalk/source/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/ansi-styles/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/ansi-styles/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/ansi-styles',
      exports: [Getter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/ansi-styles/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/supports-color/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/supports-color/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/supports-color',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/supports-color/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/has-flag/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/has-flag/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/has-flag',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/has-flag/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/chalk/source/util.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/chalk/source/util.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/chalk/source',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ora/node_modules/chalk/source/util.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-cursor/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-cursor/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-cursor',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-cursor/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/restore-cursor/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/restore-cursor/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/restore-cursor',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/restore-cursor/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/onetime/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/onetime/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/onetime',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/onetime/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/mimic-fn/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/mimic-fn/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/mimic-fn',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/mimic-fn/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/signal-exit/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/signal-exit/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/signal-exit',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/signal-exit/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/signal-exit/signals.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/signal-exit/signals.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/signal-exit',
      exports: [Array],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/signal-exit/signals.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-spinners/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-spinners/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-spinners',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-spinners/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-spinners/spinners.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-spinners/spinners.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-spinners',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-spinners/spinners.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/chalk/source/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/chalk/source/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/chalk/source',
      exports: [Chalk],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/chalk/source/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/ansi-styles/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/ansi-styles/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/ansi-styles',
      exports: [Getter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/ansi-styles/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/supports-color/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/supports-color/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/supports-color',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/supports-color/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/has-flag/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/has-flag/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/has-flag',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/has-flag/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/chalk/source/util.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/chalk/source/util.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/chalk/source',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/log-symbols/node_modules/chalk/source/util.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-unicode-supported/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-unicode-supported/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-unicode-supported',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-unicode-supported/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wcwidth/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wcwidth/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wcwidth',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wcwidth/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/defaults/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/defaults/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/defaults',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/defaults/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/defaults/node_modules/clone/clone.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/defaults/node_modules/clone/clone.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/defaults/node_modules/clone',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/defaults/node_modules/clone/clone.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wcwidth/combining.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wcwidth/combining.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wcwidth',
      exports: [Array],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wcwidth/combining.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-interactive/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-interactive/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-interactive',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-interactive/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/bl.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/bl.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/bl.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/readable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/readable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/readable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_readable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_readable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_readable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/stream.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/stream.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/stream.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/buffer_list.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/buffer_list.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams',
      exports: [Function: BufferList],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/buffer_list.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/destroy.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/destroy.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/destroy.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/state.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/state.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/state.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/errors.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/errors.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/errors.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inherits/inherits.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inherits/inherits.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inherits',
      exports: [Function: inherits],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inherits/inherits.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_writable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_writable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_writable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/util-deprecate/node.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/util-deprecate/node.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/util-deprecate',
      exports: [Function: deprecate],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/util-deprecate/node.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_duplex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_duplex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib',
      exports: [Function: Duplex],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_duplex.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_transform.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_transform.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib',
      exports: [Function: Transform],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_transform.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_passthrough.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_passthrough.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib',
      exports: [Function: PassThrough],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/_stream_passthrough.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/end-of-stream.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/end-of-stream.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams',
      exports: [Function: eos],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/end-of-stream.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/pipeline.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/pipeline.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams',
      exports: [Function: pipeline],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/node_modules/readable-stream/lib/internal/streams/pipeline.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/BufferList.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/BufferList.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/bl/BufferList.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/module.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/module.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/module.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/object.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/object.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/object.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/openBrowser.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/openBrowser.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/openBrowser.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/open/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/open/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/open',
      exports: [AsyncFunction],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/open/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-wsl/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-wsl/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-wsl',
      exports: false,
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-wsl/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-docker/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-docker/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-docker',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-docker/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/define-lazy-prop/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/define-lazy-prop/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/define-lazy-prop',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/define-lazy-prop/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/parse.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/parse.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib',
      exports: [Function: parse],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/parse.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/nice-try/src/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/nice-try/src/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/nice-try/src',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/nice-try/src/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/resolveCommand.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/resolveCommand.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util',
      exports: [Function: resolveCommand],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/resolveCommand.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/which/which.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/which/which.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/which',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/which/which.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isexe/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isexe/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isexe',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isexe/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isexe/mode.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isexe/mode.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isexe',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isexe/mode.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/path-key/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/path-key/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/path-key',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/path-key/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/escape.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/escape.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/escape.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/readShebang.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/readShebang.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util',
      exports: [Function: readShebang],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/util/readShebang.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shebang-command/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shebang-command/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shebang-command',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shebang-command/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shebang-regex/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shebang-regex/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shebang-regex',
      exports: /^#!.*/,
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shebang-regex/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/node_modules/semver/semver.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/node_modules/semver/semver.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/node_modules/semver',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/node_modules/semver/semver.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/enoent.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/enoent.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cross-spawn/lib/enoent.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/strip-eof/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/strip-eof/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/strip-eof',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/strip-eof/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/npm-run-path/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/npm-run-path/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/npm-run-path',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/npm-run-path/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-stream/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-stream/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-stream',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-stream/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/node_modules/get-stream/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/node_modules/get-stream/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/node_modules/get-stream',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/node_modules/get-stream/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/pump/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/pump/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/pump',
      exports: [Function: pump],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/pump/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/once/once.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/once/once.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/once',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/once/once.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wrappy/wrappy.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wrappy/wrappy.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wrappy',
      exports: [Function: wrappy],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/wrappy/wrappy.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/end-of-stream/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/end-of-stream/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/end-of-stream',
      exports: [Function: eos],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/end-of-stream/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/node_modules/get-stream/buffer-stream.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/node_modules/get-stream/buffer-stream.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/node_modules/get-stream',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/node_modules/get-stream/buffer-stream.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/p-finally/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/p-finally/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/p-finally',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/p-finally/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/lib/errname.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/lib/errname.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/lib',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/lib/errname.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/lib/stdio.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/lib/stdio.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/execa/lib/stdio.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pkg.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pkg.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pkg.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/read-pkg/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/read-pkg/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/read-pkg',
      exports: [AsyncFunction],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/read-pkg/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/parse-json/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/parse-json/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/parse-json',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/parse-json/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/error-ex/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/error-ex/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/error-ex',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/error-ex/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-arrayish/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-arrayish/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-arrayish',
      exports: [Function: isArrayish],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-arrayish/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/json-parse-even-better-errors/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/json-parse-even-better-errors/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/json-parse-even-better-errors',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/json-parse-even-better-errors/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lines-and-columns/dist/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lines-and-columns/dist/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lines-and-columns/dist',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lines-and-columns/dist/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/code-frame/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/code-frame/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/code-frame/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/code-frame/lib/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/highlight/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/highlight/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/highlight/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/highlight/lib/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-tokens/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-tokens/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-tokens',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/js-tokens/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/identifier.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/identifier.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/identifier.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/keyword.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/keyword.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/helper-validator-identifier/lib/keyword.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chalk/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chalk/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chalk',
      exports: [Chalk],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chalk/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/escape-string-regexp/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/escape-string-regexp/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/escape-string-regexp',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/escape-string-regexp/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-styles/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-styles/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-styles',
      exports: [Getter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-styles/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/conversions.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/conversions.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/conversions.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-name/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-name/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-name',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-name/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/route.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/route.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/color-convert/route.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/supports-color/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/supports-color/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/supports-color',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/supports-color/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/has-flag/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/has-flag/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/has-flag',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/has-flag/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chalk/templates.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chalk/templates.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chalk',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chalk/templates.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pluginResolution.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pluginResolution.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pluginResolution.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pluginOrder.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pluginOrder.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/pluginOrder.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/launch.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/launch.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/launch.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor',
      exports: [Function: launchEditor],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/guess.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/guess.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor',
      exports: [Function: guessEditor],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/guess.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shell-quote/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shell-quote/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shell-quote',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/shell-quote/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/osx.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/osx.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/osx.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/linux.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/linux.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/linux.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/windows.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/windows.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info',
      exports: [Array],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/editor-info/windows.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/get-args.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/get-args.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor',
      exports: [Function: getArgumentsForPosition],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/launch-editor/get-args.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/request.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/request.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/request.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/validate.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/validate.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-shared-utils/lib/validate.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/package.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/package.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/package.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/leven/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/leven/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/leven',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/leven/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/slash/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/slash/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/slash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/slash/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/minimist/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/minimist/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/minimist',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/minimist/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/commander/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/commander/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/commander',
      exports: [Command],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/commander/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadCommand.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadCommand.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: loadCommand],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadCommand.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/getGlobalInstallCommand.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/getGlobalInstallCommand.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: getGlobalInstallCommand],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/getGlobalInstallCommand.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/enhanceErrorMessages.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/enhanceErrorMessages.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/enhanceErrorMessages.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/create.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/create.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/create.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/fs/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/fs/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/fs',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/fs/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/universalify/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/universalify/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/universalify',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/universalify/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/graceful-fs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/graceful-fs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/graceful-fs.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/polyfills.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/polyfills.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs',
      exports: [Function: patch],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/polyfills.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/legacy-streams.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/legacy-streams.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs',
      exports: [Function: legacy],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/legacy-streams.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/clone.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/clone.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs',
      exports: [Function: clone],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/graceful-fs/clone.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy-sync/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy-sync/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy-sync',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy-sync/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy-sync/copy-sync.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy-sync/copy-sync.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy-sync',
      exports: [Function: copySync],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy-sync/copy-sync.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/mkdirs/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/mkdirs/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/mkdirs',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/mkdirs/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/mkdirs/make-dir.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/mkdirs/make-dir.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/mkdirs',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/mkdirs/make-dir.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/at-least-node/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/at-least-node/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/at-least-node',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/at-least-node/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/util/utimes.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/util/utimes.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/util/utimes.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/util/stat.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/util/stat.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/util/stat.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy/copy.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy/copy.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy',
      exports: [Function: copy],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/copy/copy.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/path-exists/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/path-exists/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/path-exists',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/path-exists/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/empty/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/empty/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/empty',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/empty/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/remove/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/remove/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/remove',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/remove/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/remove/rimraf.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/remove/rimraf.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/remove',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/remove/rimraf.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/file.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/file.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/file.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/link.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/link.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/link.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink-paths.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink-paths.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink-paths.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink-type.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink-type.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/ensure/symlink-type.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/jsonfile.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/jsonfile.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/jsonfile.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jsonfile/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jsonfile/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jsonfile',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jsonfile/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jsonfile/utils.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jsonfile/utils.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jsonfile',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jsonfile/utils.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/output-json.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/output-json.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json',
      exports: [AsyncFunction: outputJson],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/output-json.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/output/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/output/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/output',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/output/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/output-json-sync.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/output-json-sync.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json',
      exports: [Function: outputJsonSync],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/json/output-json-sync.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move-sync/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move-sync/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move-sync',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move-sync/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move-sync/move-sync.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move-sync/move-sync.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move-sync',
      exports: [Function: moveSync],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move-sync/move-sync.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move/move.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move/move.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move',
      exports: [Function: move],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/fs-extra/lib/move/move.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/inquirer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/inquirer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/inquirer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/separator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/separator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/separator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/chalk/source/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/chalk/source/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/chalk/source',
      exports: [Chalk],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/chalk/source/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/ansi-styles/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/ansi-styles/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/ansi-styles',
      exports: [Getter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/ansi-styles/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/supports-color/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/supports-color/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/supports-color',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/supports-color/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/has-flag/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/has-flag/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/has-flag',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/has-flag/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/chalk/source/util.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/chalk/source/util.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/chalk/source',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/chalk/source/util.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/figures/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/figures/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/figures',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/figures/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/bottom-bar.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/bottom-bar.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui',
      exports: [class BottomBar extends UI],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/bottom-bar.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/through/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/through/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/through',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/through/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/baseUI.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/baseUI.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui',
      exports: [class UI],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/baseUI.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/extend.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/extend.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/extend.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/assignIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/assignIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/assignIn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copyObject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copyObject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: copyObject],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copyObject.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_assignValue.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_assignValue.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: assignValue],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_assignValue.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssignValue.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssignValue.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseAssignValue],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssignValue.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_defineProperty.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_defineProperty.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: defineProperty],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_defineProperty.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getNative.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getNative.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: getNative],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getNative.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsNative.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsNative.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsNative],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsNative.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isFunction.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isFunction.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isFunction],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isFunction.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGetTag.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGetTag.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseGetTag],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGetTag.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Symbol.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Symbol.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: Symbol],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Symbol.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_root.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_root.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Object [global]],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_root.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_freeGlobal.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_freeGlobal.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Object [global]],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_freeGlobal.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getRawTag.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getRawTag.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: getRawTag],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getRawTag.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_objectToString.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_objectToString.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: objectToString],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_objectToString.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isObject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isObject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isObject],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isObject.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isMasked.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isMasked.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isMasked],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isMasked.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_coreJsData.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_coreJsData.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: undefined,
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_coreJsData.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_toSource.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_toSource.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: toSource],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_toSource.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getValue.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getValue.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: getValue],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getValue.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/eq.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/eq.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: eq],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/eq.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createAssigner.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createAssigner.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: createAssigner],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createAssigner.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseRest.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseRest.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseRest],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseRest.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/identity.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/identity.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: identity],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/identity.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_overRest.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_overRest.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: overRest],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_overRest.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_apply.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_apply.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: apply],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_apply.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setToString.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setToString.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setToString.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSetToString.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSetToString.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSetToString.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/constant.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/constant.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: constant],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/constant.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_shortOut.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_shortOut.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: shortOut],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_shortOut.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isIterateeCall.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isIterateeCall.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isIterateeCall],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isIterateeCall.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArrayLike.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArrayLike.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isArrayLike],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArrayLike.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isLength.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isLength.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isLength],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isLength.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isIndex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isIndex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isIndex],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isIndex.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/keysIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/keysIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: keysIn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/keysIn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayLikeKeys.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayLikeKeys.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: arrayLikeKeys],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayLikeKeys.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseTimes.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseTimes.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseTimes],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseTimes.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArguments.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArguments.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsArguments],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArguments.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsArguments.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsArguments.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsArguments],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsArguments.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isObjectLike.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isObjectLike.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isObjectLike],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isObjectLike.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isArray],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isArray.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isBuffer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isBuffer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isBuffer],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isBuffer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/stubFalse.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/stubFalse.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: stubFalse],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/stubFalse.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isTypedArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isTypedArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isTypedArray.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsTypedArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsTypedArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsTypedArray],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsTypedArray.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUnary.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUnary.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseUnary],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUnary.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nodeUtil.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nodeUtil.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nodeUtil.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseKeysIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseKeysIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseKeysIn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseKeysIn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isPrototype.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isPrototype.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isPrototype],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isPrototype.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeKeysIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeKeysIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: nativeKeysIn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeKeysIn.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/omit.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/omit.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/omit.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: arrayMap],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayMap.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseClone.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseClone.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseClone],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseClone.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Stack.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Stack.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: Stack],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Stack.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_ListCache.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_ListCache.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: ListCache],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_ListCache.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheClear.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheClear.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: listCacheClear],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheClear.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheDelete.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheDelete.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: listCacheDelete],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheDelete.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_assocIndexOf.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_assocIndexOf.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: assocIndexOf],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_assocIndexOf.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheGet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheGet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: listCacheGet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheGet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheHas.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheHas.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: listCacheHas],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheHas.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheSet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheSet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: listCacheSet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_listCacheSet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackClear.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackClear.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: stackClear],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackClear.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackDelete.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackDelete.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: stackDelete],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackDelete.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackGet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackGet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: stackGet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackGet.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackHas.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackHas.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: stackHas],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackHas.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackSet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackSet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: stackSet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stackSet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Map.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Map.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: Map],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Map.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_MapCache.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_MapCache.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: MapCache],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_MapCache.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheClear.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheClear.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: mapCacheClear],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheClear.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Hash.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Hash.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: Hash],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Hash.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashClear.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashClear.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: hashClear],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashClear.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeCreate.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeCreate.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: create],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeCreate.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashDelete.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashDelete.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: hashDelete],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashDelete.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashGet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashGet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: hashGet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashGet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashHas.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashHas.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: hashHas],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashHas.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashSet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashSet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: hashSet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hashSet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheDelete.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheDelete.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: mapCacheDelete],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheDelete.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getMapData.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getMapData.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: getMapData],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getMapData.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isKeyable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isKeyable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isKeyable],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isKeyable.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheGet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheGet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: mapCacheGet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheGet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheHas.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheHas.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: mapCacheHas],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheHas.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheSet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheSet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: mapCacheSet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapCacheSet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayEach.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayEach.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: arrayEach],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayEach.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssign.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssign.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseAssign],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssign.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/keys.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/keys.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: keys],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/keys.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseKeys.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseKeys.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseKeys],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseKeys.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeKeys.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeKeys.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_nativeKeys.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_overArg.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_overArg.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: overArg],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_overArg.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssignIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssignIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseAssignIn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseAssignIn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneBuffer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneBuffer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: cloneBuffer],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneBuffer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copyArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copyArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: copyArray],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copyArray.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copySymbols.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copySymbols.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: copySymbols],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copySymbols.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getSymbols.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getSymbols.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getSymbols.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayFilter.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayFilter.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: arrayFilter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayFilter.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/stubArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/stubArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: stubArray],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/stubArray.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copySymbolsIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copySymbolsIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: copySymbolsIn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_copySymbolsIn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getSymbolsIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getSymbolsIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getSymbolsIn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayPush.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayPush.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: arrayPush],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayPush.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getPrototype.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getPrototype.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getPrototype.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getAllKeys.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getAllKeys.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: getAllKeys],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getAllKeys.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGetAllKeys.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGetAllKeys.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseGetAllKeys],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGetAllKeys.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getAllKeysIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getAllKeysIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: getAllKeysIn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getAllKeysIn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getTag.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getTag.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseGetTag],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getTag.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_DataView.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_DataView.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: DataView],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_DataView.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Promise.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Promise.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: Promise],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Promise.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Set.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Set.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: Set],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Set.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_WeakMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_WeakMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: WeakMap],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_WeakMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: initCloneArray],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneArray.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneByTag.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneByTag.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: initCloneByTag],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneByTag.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneArrayBuffer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneArrayBuffer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: cloneArrayBuffer],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneArrayBuffer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Uint8Array.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Uint8Array.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: Uint8Array],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_Uint8Array.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneDataView.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneDataView.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: cloneDataView],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneDataView.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneRegExp.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneRegExp.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: cloneRegExp],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneRegExp.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneSymbol.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneSymbol.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: cloneSymbol],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneSymbol.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneTypedArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneTypedArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: cloneTypedArray],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cloneTypedArray.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneObject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneObject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: initCloneObject],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_initCloneObject.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseCreate.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseCreate.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseCreate.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsMap],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isSet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isSet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isSet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsSet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsSet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsSet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsSet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUnset.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUnset.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseUnset],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUnset.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_castPath.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_castPath.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: castPath],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_castPath.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isKey.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isKey.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isKey],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isKey.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isSymbol.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isSymbol.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isSymbol],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isSymbol.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stringToPath.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stringToPath.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_stringToPath.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_memoizeCapped.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_memoizeCapped.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: memoizeCapped],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_memoizeCapped.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/memoize.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/memoize.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/memoize.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toString.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toString.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: toString],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toString.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseToString.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseToString.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseToString],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseToString.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/last.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/last.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: last],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/last.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_parent.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_parent.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: parent],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_parent.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseGet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseGet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_toKey.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_toKey.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: toKey],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_toKey.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSlice.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSlice.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseSlice],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSlice.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_customOmitClone.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_customOmitClone.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: customOmitClone],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_customOmitClone.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isPlainObject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isPlainObject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isPlainObject],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isPlainObject.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_flatRest.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_flatRest.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: flatRest],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_flatRest.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/flatten.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/flatten.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: flatten],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/flatten.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFlatten.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFlatten.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseFlatten],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFlatten.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isFlattenable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isFlattenable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isFlattenable],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isFlattenable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/mute-stream/mute.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/mute-stream/mute.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/mute-stream',
      exports: [Function: MuteStream],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/mute-stream/mute.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/readline.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/readline.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/readline.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-escapes/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-escapes/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-escapes',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ansi-escapes/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/prompt.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/prompt.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui',
      exports: [class PromptUI extends UI],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/ui/prompt.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/clone.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/clone.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: clone],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/clone.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/set.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/set.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: set],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/set.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseSet],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Observable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Observable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Observable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subscriber.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subscriber.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subscriber.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isFunction.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isFunction.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isFunction.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subscription.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subscription.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subscription.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/arrRemove.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/arrRemove.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/arrRemove.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/config.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/config.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/config.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/noop.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/noop.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/noop.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/NotificationFactories.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/NotificationFactories.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/NotificationFactories.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/errorContext.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/errorContext.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/errorContext.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/symbol/observable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/symbol/observable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/symbol',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/symbol/observable.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/pipe.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/pipe.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/pipe.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/identity.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/identity.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/identity.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/refCount.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/refCount.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/refCount.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/lift.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/lift.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/lift.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/dom',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Subject.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/ReplaySubject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/ReplaySubject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/ReplaySubject.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/AsyncSubject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/AsyncSubject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/AsyncSubject.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/asap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/asap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/asap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/Action.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/Action.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/Action.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/Immediate.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/Immediate.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/Immediate.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Scheduler.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Scheduler.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Scheduler.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/async.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/async.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/async.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/queue.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/queue.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/queue.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Notification.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Notification.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/Notification.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/empty.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/empty.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/empty.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/of.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/of.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/of.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromArray.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/from.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/from.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/from.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isPromise.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isPromise.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isPromise.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/symbol/iterator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/symbol/iterator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/symbol',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/symbol/iterator.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/caughtSchedule.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/caughtSchedule.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/caughtSchedule.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isIterable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isIterable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isIterable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/args.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/args.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/args.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isScheduler.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isScheduler.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isScheduler.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/throwError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/throwError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/throwError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isObservable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isObservable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isObservable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/lastValueFrom.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/lastValueFrom.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/lastValueFrom.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/EmptyError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/EmptyError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/EmptyError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/firstValueFrom.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/firstValueFrom.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/firstValueFrom.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/SequenceError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/SequenceError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/SequenceError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeout.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeout.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeout.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isDate.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isDate.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/isDate.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/map.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/map.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/map.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/observeOn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/observeOn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/observeOn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/createObject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/createObject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/createObject.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/concat.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/concat.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/concat.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatAll.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatAll.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatAll.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/connectable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/connectable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/connectable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/defer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/defer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/defer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/generate.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/generate.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/generate.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/iif.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/iif.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/iif.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/interval.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/interval.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/interval.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/timer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/timer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/timer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/merge.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/merge.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/merge.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/never.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/never.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/never.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNext.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNext.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNext.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/pairs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/pairs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/pairs.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/partition.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/partition.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/partition.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/not.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/not.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/util/not.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/filter.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/filter.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/filter.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/race.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/race.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/race.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/range.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/range.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/range.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/using.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/using.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/using.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/zip.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/zip.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/zip.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/types.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/types.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal',
      exports: {},
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/types.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/audit.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/audit.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/audit.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/auditTime.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/auditTime.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/auditTime.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/buffer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/buffer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/buffer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/catchError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/catchError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/catchError.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineAll.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineAll.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineAll.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/toArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/toArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/toArray.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/reduce.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/reduce.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/reduce.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concatWith.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concat.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concat.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/concat.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/connect.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/connect.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/connect.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/count.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/count.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/count.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/debounce.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/debounce.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/debounce.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/delay.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/delay.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/delay.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/take.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/take.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/take.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mapTo.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mapTo.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mapTo.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinct.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinct.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinct.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/elementAt.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/elementAt.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/elementAt.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/endWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/endWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/endWith.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/every.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/every.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/every.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaust.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaust.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaust.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/expand.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/expand.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/expand.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/finalize.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/finalize.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/finalize.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/find.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/find.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/find.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/findIndex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/findIndex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/findIndex.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/first.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/first.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/first.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/groupBy.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/groupBy.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/groupBy.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/last.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/last.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/last.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeLast.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeLast.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeLast.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/materialize.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/materialize.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/materialize.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/max.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/max.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/max.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/flatMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/flatMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/flatMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/merge.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/merge.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/merge.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/min.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/min.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/min.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/multicast.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/multicast.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/multicast.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/pairwise.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/pairwise.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/pairwise.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/pluck.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/pluck.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/pluck.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publish.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publish.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publish.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishLast.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishLast.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishLast.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/raceWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/raceWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/raceWith.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/repeat.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/repeat.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/repeat.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/retry.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/retry.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/retry.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sample.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sample.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sample.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/scan.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/scan.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/scan.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/share.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/share.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/share.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/single.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/single.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/single.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skip.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skip.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skip.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipLast.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipLast.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipLast.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/startWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/startWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/startWith.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchAll.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchAll.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchAll.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchScan.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchScan.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/switchScan.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/tap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/tap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/tap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throttle.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throttle.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throttle.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timestamp.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timestamp.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/timestamp.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/window.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/window.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/window.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowCount.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowCount.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowCount.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowTime.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowTime.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowTime.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zipAll.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zipAll.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zipAll.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zipWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zipWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zipWith.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zip.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zip.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/zip.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/operators/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/operators/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/operators/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/partition.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/partition.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/partition.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/race.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/race.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/rxjs/dist/cjs/internal/operators/race.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/run-async/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/run-async/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/run-async',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/run-async/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/utils.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/utils.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/utils.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/list.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/list.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class ListPrompt extends Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/list.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isNumber.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isNumber.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isNumber],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isNumber.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/findIndex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/findIndex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: findIndex],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/findIndex.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFindIndex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFindIndex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseFindIndex],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFindIndex.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIteratee.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIteratee.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIteratee],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIteratee.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMatches.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMatches.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseMatches],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMatches.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsMatch.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsMatch.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsMatch],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsMatch.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsEqual.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsEqual.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsEqual],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsEqual.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsEqualDeep.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsEqualDeep.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsEqualDeep],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsEqualDeep.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalArrays.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalArrays.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: equalArrays],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalArrays.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_SetCache.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_SetCache.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: SetCache],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_SetCache.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setCacheAdd.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setCacheAdd.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: setCacheAdd],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setCacheAdd.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setCacheHas.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setCacheHas.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: setCacheHas],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setCacheHas.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arraySome.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arraySome.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: arraySome],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arraySome.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cacheHas.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cacheHas.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: cacheHas],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_cacheHas.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalByTag.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalByTag.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: equalByTag],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalByTag.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapToArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapToArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: mapToArray],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_mapToArray.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setToArray.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setToArray.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: setToArray],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_setToArray.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalObjects.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalObjects.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: equalObjects],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_equalObjects.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getMatchData.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getMatchData.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: getMatchData],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_getMatchData.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isStrictComparable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isStrictComparable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isStrictComparable],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_isStrictComparable.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_matchesStrictComparable.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_matchesStrictComparable.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: matchesStrictComparable],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_matchesStrictComparable.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMatchesProperty.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMatchesProperty.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseMatchesProperty],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMatchesProperty.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/get.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/get.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: get],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/get.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/hasIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/hasIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: hasIn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/hasIn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseHasIn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseHasIn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseHasIn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseHasIn.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hasPath.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hasPath.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: hasPath],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_hasPath.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/property.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/property.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: property],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/property.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseProperty.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseProperty.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseProperty],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseProperty.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_basePropertyDeep.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_basePropertyDeep.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: basePropertyDeep],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_basePropertyDeep.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toInteger.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toInteger.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: toInteger],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toInteger.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toFinite.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toFinite.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: toFinite],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toFinite.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toNumber.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toNumber.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: toNumber],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/toNumber.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseTrim.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseTrim.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseTrim],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseTrim.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_trimmedEndIndex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_trimmedEndIndex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: trimmedEndIndex],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_trimmedEndIndex.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isString.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isString.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isString],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isString.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/base.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/base.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/base.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/assign.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/assign.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/assign.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/defaults.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/defaults.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/defaults.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/choices.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/choices.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects',
      exports: [class Choices],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/choices.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/filter.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/filter.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: filter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/filter.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFilter.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFilter.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseFilter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFilter.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseEach.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseEach.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseEach.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseForOwn.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseForOwn.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseForOwn],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseForOwn.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFor.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFor.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseFor.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createBaseFor.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createBaseFor.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: createBaseFor],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createBaseFor.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createBaseEach.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createBaseEach.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: createBaseEach],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createBaseEach.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/map.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/map.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: map],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/map.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMap.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMap.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseMap],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseMap.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/find.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/find.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/find.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createFind.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createFind.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: createFind],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createFind.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/choice.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/choice.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects',
      exports: [class Choice],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/objects/choice.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/screen-manager.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/screen-manager.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils',
      exports: [class ScreenManager],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/screen-manager.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-width/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-width/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-width',
      exports: [Function: cliWidth],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/cli-width/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/string-width/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/string-width/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/string-width',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/string-width/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/is-fullwidth-code-point/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/is-fullwidth-code-point/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/is-fullwidth-code-point',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/is-fullwidth-code-point/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/emoji-regex/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/emoji-regex/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/emoji-regex',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/node_modules/emoji-regex/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/events.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/events.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/events.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/paginator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/paginator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils',
      exports: [class Paginator],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/paginator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/sum.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/sum.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: sum],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/sum.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSum.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSum.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseSum],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseSum.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/incrementListIndex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/incrementListIndex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils',
      exports: [Function: incrementListIndex],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/utils/incrementListIndex.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/input.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/input.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class InputPrompt extends Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/input.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/number.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/number.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class NumberPrompt extends InputPrompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/number.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/confirm.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/confirm.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class ConfirmPrompt extends Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/confirm.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isBoolean.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isBoolean.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: isBoolean],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/isBoolean.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/rawlist.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/rawlist.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class RawListPrompt extends Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/rawlist.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/expand.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/expand.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class ExpandPrompt extends Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/expand.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/uniq.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/uniq.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: uniq],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/uniq.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUniq.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUniq.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseUniq],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseUniq.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayIncludes.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayIncludes.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: arrayIncludes],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayIncludes.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIndexOf.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIndexOf.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIndexOf],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIndexOf.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsNaN.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsNaN.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: baseIsNaN],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_baseIsNaN.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_strictIndexOf.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_strictIndexOf.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: strictIndexOf],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_strictIndexOf.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayIncludesWith.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayIncludesWith.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: arrayIncludesWith],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_arrayIncludesWith.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createSet.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createSet.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/_createSet.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/noop.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/noop.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash',
      exports: [Function: noop],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash/noop.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/checkbox.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/checkbox.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class CheckboxPrompt extends Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/checkbox.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/password.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/password.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class PasswordPrompt extends Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/password.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/editor.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/editor.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts',
      exports: [class EditorPrompt extends Prompt],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/inquirer/lib/prompts/editor.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/utf8.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/utf8.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/utf8.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/match.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/match.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/match.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/unicode.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/unicode.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/unicode.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/mbcs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/mbcs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/mbcs.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/sbcs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/sbcs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/sbcs.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/iso2022.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/iso2022.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/chardet/encoding/iso2022.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/safer-buffer/safer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/safer-buffer/safer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/safer-buffer',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/safer-buffer/safer.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/bom-handling.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/bom-handling.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/bom-handling.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/streams.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/streams.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/streams.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/extend-node.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/extend-node.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/iconv-lite/lib/extend-node.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/tmp/lib/tmp.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/tmp/lib/tmp.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/tmp/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/tmp/lib/tmp.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/os-tmpdir/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/os-tmpdir/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/os-tmpdir',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/os-tmpdir/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/CreateFileError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/CreateFileError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/CreateFileError.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/LaunchEditorError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/LaunchEditorError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/LaunchEditorError.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/ReadFileError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/ReadFileError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/ReadFileError.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/RemoveFileError.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/RemoveFileError.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/external-editor/main/errors/RemoveFileError.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/Creator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/Creator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib',
      exports: [class Creator extends EventEmitter],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/Creator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/node.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/node.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/node.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/common.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/common.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src',
      exports: [Function: setup],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/debug/src/common.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ms/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ms/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ms',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ms/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/Generator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/Generator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib',
      exports: [class Generator],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/Generator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/lib/ejs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/lib/ejs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/lib/ejs.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/lib/utils.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/lib/utils.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/lib/utils.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/package.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/package.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ejs/package.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/GeneratorAPI.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/GeneratorAPI.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib',
      exports: [class GeneratorAPI],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/GeneratorAPI.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/deepmerge/dist/cjs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/deepmerge/dist/cjs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/deepmerge/dist',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/deepmerge/dist/cjs.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/async.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/async.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/async.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/caller.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/caller.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/caller.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/node-modules-paths.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/node-modules-paths.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib',
      exports: [Function: nodeModulesPaths],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/node-modules-paths.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/normalize-options.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/normalize-options.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/normalize-options.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-core-module/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-core-module/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-core-module',
      exports: [Function: isCore],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-core-module/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/has/src/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/has/src/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/has/src',
      exports: [Function: bound call],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/has/src/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/function-bind/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/function-bind/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/function-bind',
      exports: [Function: bind],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/function-bind/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/function-bind/implementation.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/function-bind/implementation.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/function-bind',
      exports: [Function: bind],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/function-bind/implementation.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-core-module/core.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-core-module/core.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-core-module',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/is-core-module/core.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/core.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/core.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/core.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/core.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/core.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/core.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/is-core.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/is-core.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib',
      exports: [Function: isCore],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/is-core.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/sync.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/sync.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib',
      exports: [Function: resolveSync],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/resolve/lib/sync.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isbinaryfile/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isbinaryfile/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isbinaryfile/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/isbinaryfile/lib/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/mergeDeps.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/mergeDeps.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: mergeDeps],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/mergeDeps.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/tryGetNewerRange.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/tryGetNewerRange.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: tryGetNewerRange],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/tryGetNewerRange.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/VueTransformation.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/VueTransformation.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/VueTransformation.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/runTransformation.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/runTransformation.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/runTransformation.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/core.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/core.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/core.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/Collection.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/Collection.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/Collection.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/intersection.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/intersection.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/intersection.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/main.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/main.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/main.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/tslib/tslib.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/tslib/tslib.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/tslib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/tslib/tslib.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/main.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/main.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/main.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/fork.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/fork.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/fork.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/types.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/types.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/types.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/path-visitor.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/path-visitor.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib',
      exports: [Function: pathVisitorPlugin],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/path-visitor.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/node-path.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/node-path.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib',
      exports: [Function: nodePathPlugin],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/node-path.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/path.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/path.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib',
      exports: [Function: pathPlugin],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/path.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/scope.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/scope.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib',
      exports: [Function: scopePlugin],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/scope.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/equiv.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/equiv.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/equiv.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/core.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/core.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/core.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/core-operators.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/core-operators.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/core-operators.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/shared.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/shared.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/lib/shared.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es6.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es6.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es6.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2016.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2016.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2016.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2017.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2017.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2017.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2018.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2018.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2018.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2019.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2019.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2019.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2020.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2020.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es2020.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/jsx.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/jsx.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/jsx.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/flow.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/flow.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/flow.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es-proposals.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es-proposals.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/es-proposals.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/type-annotations.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/type-annotations.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/type-annotations.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/esprima.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/esprima.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/esprima.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/babel.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/babel.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/babel.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/babel-core.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/babel-core.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/babel-core.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/typescript.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/typescript.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def',
      exports: [Function: default_1],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/def/typescript.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/gen/namedTypes.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/gen/namedTypes.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/gen',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ast-types/gen/namedTypes.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/parser.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/parser.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/parser.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/options.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/options.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/options.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/parsers/esprima.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/parsers/esprima.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/parsers',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/parsers/esprima.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/util.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/util.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/util.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/source-map.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/source-map.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/source-map.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-map-generator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-map-generator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-map-generator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/base64-vlq.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/base64-vlq.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/base64-vlq.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/base64.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/base64.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/base64.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/util.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/util.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/util.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/array-set.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/array-set.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/array-set.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/mapping-list.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/mapping-list.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/mapping-list.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-map-consumer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-map-consumer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-map-consumer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/binary-search.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/binary-search.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/binary-search.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/quick-sort.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/quick-sort.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/quick-sort.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-node.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-node.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/node_modules/source-map/lib/source-node.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/lines.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/lines.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/lines.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/mapping.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/mapping.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/mapping.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/comments.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/comments.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/comments.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/printer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/printer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/printer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/patcher.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/patcher.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/patcher.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/fast-path.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/fast-path.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/recast/lib/fast-path.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/union.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/union.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/union.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/Node.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/Node.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/Node.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/matchNode.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/matchNode.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src',
      exports: [Function: matchNode],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/matchNode.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/once.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/once.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/utils/once.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/JSXElement.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/JSXElement.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/JSXElement.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/VariableDeclarator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/VariableDeclarator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/collections/VariableDeclarator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/getParser.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/getParser.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src',
      exports: [Function: getParser],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/getParser.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/template.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/template.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src',
      exports: [Function: withParser],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/src/template.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/parser/babel5Compat.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/parser/babel5Compat.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/parser',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/jscodeshift/parser/babel5Compat.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/parser/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/parser/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/parser/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@babel/parser/lib/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/sfcUtils.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/sfcUtils.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/sfcUtils.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-dom/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-dom/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-dom',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-dom/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-dom/dist/compiler-dom.cjs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-dom/dist/compiler-dom.cjs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-dom/dist',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-dom/dist/compiler-dom.cjs.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/dist',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/dist/compiler-core.cjs.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/shared/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/shared/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/shared',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/shared/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/shared/dist/shared.cjs.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/shared/dist/shared.cjs.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/shared/dist',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/shared/dist/shared.cjs.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/source-map.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/source-map.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/source-map.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-map-generator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-map-generator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-map-generator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/base64-vlq.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/base64-vlq.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/base64-vlq.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/base64.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/base64.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/base64.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/util.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/util.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/util.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/array-set.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/array-set.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/array-set.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/mapping-list.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/mapping-list.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/mapping-list.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-map-consumer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-map-consumer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-map-consumer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/binary-search.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/binary-search.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/binary-search.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/quick-sort.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/quick-sort.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/quick-sort.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-node.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-node.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/compiler-core/node_modules/source-map/lib/source-node.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/estree-walker/dist/umd/estree-walker.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/estree-walker/dist/umd/estree-walker.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/estree-walker/dist/umd',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/estree-walker/dist/umd/estree-walker.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/source-map.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/source-map.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/source-map.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-map-generator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-map-generator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-map-generator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/base64-vlq.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/base64-vlq.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/base64-vlq.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/base64.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/base64.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/base64.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/util.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/util.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/util.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/array-set.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/array-set.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/array-set.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/mapping-list.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/mapping-list.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/mapping-list.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-map-consumer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-map-consumer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-map-consumer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/binary-search.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/binary-search.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/binary-search.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/quick-sort.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/quick-sort.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/quick-sort.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-node.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-node.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/node_modules/source-map/lib/source-node.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-class-component-v8.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-class-component-v8.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-class-component-v8.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/wrapAstTransformation.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/wrapAstTransformation.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/src/wrapAstTransformation.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-global-api.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-global-api.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-global-api.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-as-namespace-import.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-as-namespace-import.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-as-namespace-import.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/import-composition-api-from-vue.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/import-composition-api-from-vue.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/import-composition-api-from-vue.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-vue-to-create-app.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-vue-to-create-app.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-vue-to-create-app.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/root-prop-to-use.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/root-prop-to-use.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/root-prop-to-use.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-trivial-root.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-trivial-root.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-trivial-root.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-production-tip.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-production-tip.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-production-tip.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-vue-use.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-vue-use.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-vue-use.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-extraneous-import.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-extraneous-import.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-extraneous-import.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-contextual-h-from-render.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-contextual-h-from-render.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-contextual-h-from-render.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/add-import.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/add-import.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/add-import.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-router-v4.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-router-v4.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vue-router-v4.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vuex-v4.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vuex-v4.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/vuex-v4.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/define-component.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/define-component.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/define-component.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/scoped-slots-to-slots.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/scoped-slots-to-slots.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/scoped-slots-to-slots.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-directive-api.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-directive-api.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/new-directive-api.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-vue-set-and-delete.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-vue-set-and-delete.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/vue-codemod/dist/transformations/remove-vue-set-and-delete.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/stringifyJS.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/stringifyJS.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: stringifyJS],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/stringifyJS.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/ConfigTransform.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/ConfigTransform.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib',
      exports: [class ConfigTransform],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/ConfigTransform.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/configTransforms.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/configTransforms.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/configTransforms.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/extendJSConfig.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/extendJSConfig.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: extendJSConfig],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/extendJSConfig.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/ProjectPackageManager.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/ProjectPackageManager.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [class PackageManager],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/ProjectPackageManager.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ini/ini.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ini/ini.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ini',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/ini/ini.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/options.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/options.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/options.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash.clonedeep/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash.clonedeep/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash.clonedeep',
      exports: [Function: cloneDeep],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/lodash.clonedeep/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/rcPath.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/rcPath.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/rcPath.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/assert.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/assert.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/assert.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/error.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/error.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [class (anonymous) extends Error],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/error.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/stringify.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/stringify.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/stringify.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/clone.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/clone.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/clone.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/reach.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/reach.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/reach.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/types.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/types.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/types.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/utils.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/utils.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/utils.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/cache.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/cache.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/cache.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/common.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/common.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/common.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/package.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/package.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/package.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/compile.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/compile.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/compile.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/ref.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/ref.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/ref.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/errors.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/errors.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/errors.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/annotate.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/annotate.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/annotate.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/template.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/template.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [class (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/template.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/escapeHtml.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/escapeHtml.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/escapeHtml.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/formula/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/formula/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/formula/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/formula/lib/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/extend.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/extend.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/extend.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/messages.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/messages.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/messages.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/manifest.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/manifest.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/manifest.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/trace.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/trace.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/trace.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/deepEqual.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/deepEqual.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/deepEqual.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/pinpoint/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/pinpoint/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/pinpoint/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/pinpoint/lib/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/alternatives.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/alternatives.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/alternatives.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/merge.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/merge.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/merge.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/any.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/any.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/any.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/base.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/base.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/base.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/modify.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/modify.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/modify.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/validator.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/validator.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/validator.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/ignore.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/ignore.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/ignore.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/state.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/state.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [class (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/state.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/values.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/values.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib',
      exports: [class (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/values.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/array.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/array.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/array.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/boolean.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/boolean.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/boolean.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/date.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/date.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/date.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/function.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/function.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/function.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/keys.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/keys.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/keys.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/applyToDefaults.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/applyToDefaults.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/applyToDefaults.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/topo/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/topo/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/topo/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/topo/lib/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/link.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/link.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/link.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/number.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/number.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/number.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/object.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/object.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/object.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/string.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/string.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/string.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/domain.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/domain.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/domain.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/errors.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/errors.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/errors.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/email.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/email.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/email.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/ip.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/ip.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/ip.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/uri.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/uri.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/uri.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/escapeRegex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/escapeRegex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@hapi/hoek/lib/escapeRegex.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/tlds.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/tlds.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib',
      exports: [Set],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@sideway/address/lib/tlds.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/symbol.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/symbol.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/symbol.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/binary.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/binary.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/joi/lib/types/binary.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/executeCommand.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/executeCommand.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/executeCommand.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/registries.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/registries.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/registries.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/shouldUseTaobao.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/shouldUseTaobao.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [AsyncFunction: shouldUseTaobao],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/shouldUseTaobao.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/sortObject.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/sortObject.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: sortObject],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/sortObject.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/writeFileTree.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/writeFileTree.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [AsyncFunction: writeFileTree],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/writeFileTree.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/inferRootOptions.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/inferRootOptions.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: inferRootOptions],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/inferRootOptions.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/normalizeFilePaths.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/normalizeFilePaths.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: normalizeFilePaths],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/normalizeFilePaths.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/getVersions.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/getVersions.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [AsyncFunction: getVersions],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/getVersions.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/normalize.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/normalize.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/normalize.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/fixer.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/fixer.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/fixer.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/node_modules/semver/semver.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/node_modules/semver/semver.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/node_modules/semver',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/node_modules/semver/semver.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/validate-npm-package-license/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/validate-npm-package-license/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/validate-npm-package-license',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/validate-npm-package-license/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/scan.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/scan.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/scan.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-license-ids/index.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-license-ids/index.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-license-ids',
      exports: [Array],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-license-ids/index.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-license-ids/deprecated.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-license-ids/deprecated.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-license-ids',
      exports: [Array],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-license-ids/deprecated.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-exceptions/index.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-exceptions/index.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-exceptions',
      exports: [Array],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-exceptions/index.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/parse.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/parse.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-expression-parse/parse.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-correct/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-correct/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-correct',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/spdx-correct/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/git-host-info.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/git-host-info.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/git-host-info.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/git-host.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/git-host.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/hosted-git-info/git-host.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/extract_description.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/extract_description.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib',
      exports: [Function: extractDescription],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/extract_description.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/typos.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/typos.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/typos.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/make_warning.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/make_warning.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/make_warning.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/warning_messages.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/warning_messages.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/normalize-package-data/lib/warning_messages.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/clearConsole.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/clearConsole.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/clearConsole.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/PromptModuleAPI.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/PromptModuleAPI.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib',
      exports: [class PromptModuleAPI],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/PromptModuleAPI.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/features.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/features.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/features.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadLocalPreset.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadLocalPreset.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [AsyncFunction: loadLocalPreset],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadLocalPreset.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadPresetFromDir.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadPresetFromDir.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [AsyncFunction: loadPresetFromDir],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadPresetFromDir.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadRemotePreset.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadRemotePreset.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [AsyncFunction: loadRemotePreset],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/loadRemotePreset.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/generateReadme.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/generateReadme.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Function: generateReadme],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/generateReadme.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/createTools.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/createTools.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util',
      exports: [Object],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/util/createTools.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/validate-npm-package-name/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/validate-npm-package-name/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/validate-npm-package-name',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/validate-npm-package-name/index.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/builtins/builtins.json': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/builtins/builtins.json',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/builtins',
      exports: [Array],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/builtins/builtins.json',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/vueVersion.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/vueVersion.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/vueVersion.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/babel.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/babel.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/babel.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/typescript.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/typescript.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/typescript.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/pwa.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/pwa.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/pwa.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/router.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/router.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/router.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/vuex.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/vuex.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/vuex.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/cssPreprocessors.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/cssPreprocessors.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/cssPreprocessors.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/linter.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/linter.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/linter.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/unit.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/unit.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/unit.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/e2e.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/e2e.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/lib/promptModules/e2e.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-fetch/lib/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-fetch/lib/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-fetch/lib',
      exports: [Function],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/node-fetch/lib/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-service/generator/index.js': Module {
      id: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-service/generator/index.js',
      path: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-service/generator',
      exports: [Function (anonymous)],
      filename: '/Users/guojufeng/Documents/GithubCode/vue-cli/packages/@vue/cli/node_modules/@vue/cli-service/generator/index.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  }
}
```