module.exports = {
    devServer: {
      disableHostCheck: true
    },
    pages: {
      index: {
        entry: 'src/login.js',
        template: 'public/index.html',
        filename: 'index.html',
        // chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      admin: {
        entry: 'src/admin.js',
        template: 'public/index.html',
        // filename: 'index.html',
        // chunks: ['chunk-vendors', 'chunk-common', 'admin']
      },
    }
  }