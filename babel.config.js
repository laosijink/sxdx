module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
      ['import', {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }, 'element-ui']
    ]
  }
  