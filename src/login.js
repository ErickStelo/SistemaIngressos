import Vue from 'vue'
import App from './views/Login/Login-page.vue'
// import router from './router'
import store from './store'
import VueHead from 'vue-head'

Vue.config.productionTip = false
Vue.use(VueHead)

new Vue({
  // router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
