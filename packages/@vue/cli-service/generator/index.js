module.exports = (api, options) => {
  // 这个文件里， api就是生成的cli-service的GeneratorAPI。options就是当前plugin对应的options
  // 该插件cli-service做的事情就是把vue的主版本、全家桶、ts、css等依赖确认一边，然后生成package.json
  api.render('./template', {
    doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript'),
    useBabel: api.hasPlugin('babel')
  })
  console.log('api.render end');
  console.log('vue版本 options.vueVersion', options.vueVersion);

  if (options.vueVersion === '3') {
    api.extendPackage({
      dependencies: {
        'vue': '^3.0.4'
      },
      devDependencies: {
        '@vue/compiler-sfc': '^3.0.4'
      }
    })
  } else {
    api.extendPackage({
      dependencies: {
        'vue': '^2.6.11'
      },
      devDependencies: {
        'vue-template-compiler': '^2.6.11'
      }
    })
  }

  api.extendPackage({
    scripts: {
      'serve': 'vue-cli-service serve',
      'build': 'vue-cli-service build'
    },
    browserslist: [
      '> 1%',
      'last 2 versions',
      'not dead',
      ...(options.vueVersion === '3' ? ['not ie 11'] : [])
    ]
  })

  if (options.cssPreprocessor) {
    const deps = {
      sass: {
        sass: '^1.32.7',
        'sass-loader': '^11.0.1'
      },
      'dart-sass': {
        sass: '^1.32.7',
        'sass-loader': '^11.0.1'
      },
      less: {
        'less': '^4.0.0',
        'less-loader': '^8.0.0'
      },
      stylus: {
        'stylus': '^0.54.8',
        'stylus-loader': '^5.0.0'
      }
    }

    api.extendPackage({
      devDependencies: deps[options.cssPreprocessor]
    })
  }

  // for v3 compatibility
  if (options.router && !api.hasPlugin('router')) {
    require('./router')(api, options, options)
  }

  // for v3 compatibility
  if (options.vuex && !api.hasPlugin('vuex')) {
    require('./vuex')(api, options, options)
  }

  // additional tooling configurations
  if (options.configs) {
    api.extendPackage(options.configs)
  }

  // Delete jsconfig.json when typescript
  if (api.hasPlugin('typescript')) {
    api.render((files) => delete files['jsconfig.json'])
  }
}
