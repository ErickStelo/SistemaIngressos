module.exports = {
    devServer: {
      disableHostCheck: true
    },
    outputDir: '../dist/admin',
    pages: {
      index: {
        entry: 'src/admin.js',
        template: 'public/index.html',
        filename: 'index.html',
        // chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // admin: {
      //   entry: 'src/admin.js',
      //   template: 'public/index.html',
        // filename: 'index.html',
        // chunks: ['chunk-vendors', 'chunk-common', 'admin']
      // },
    }
  }