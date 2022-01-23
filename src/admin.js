import Vue from 'vue'
import App from './views/Admin/Admin-template.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import Vuelidate from 'vuelidate'

import '../src/assets/css/awesome-notifications.css';
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

window.$ = window.jQuery = require('jquery')

import {
    addnotify
} from '@/services/Notifications';

import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

Vue.prototype.$addnotify = addnotify;

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
