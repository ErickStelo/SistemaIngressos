module.exports = {
    devServer: {
      disableHostCheck: true
    },
    outputDir: '../dist',
    pages: {
      index: {
        entry: 'src/login.js',
        template: 'public/index.html',
        filename: 'login.html',
        // chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
    }
  }