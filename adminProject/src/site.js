import Vue from 'vue'
// import App from './views/Login/Login-page.vue'
import routesSite from './router/site-routes'
import store from './store'
import VueHead from 'vue-head'

Vue.config.productionTip = false
Vue.use(VueHead)
import SiteApp from './views/Site/Default-template'
new Vue({
  router: routesSite,
  store,
  render: h => h(SiteApp)
}).$mount('#site')
