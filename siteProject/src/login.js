import Vue from 'vue'
import Login from './views/Login/Login-page.vue'
import store from './store'
import VueHead from 'vue-head'

Vue.config.productionTip = false
Vue.use(VueHead)
new Vue({
  store,
  render: h => h(Login)
}).$mount('#login')
