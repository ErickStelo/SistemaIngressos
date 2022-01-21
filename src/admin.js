import Vue from 'vue'
import App from './views/Admin/Admin-template.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import '../node_modules/vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'

import '../src/assets/css/awesome-notifications.css';

window.$ = window.jQuery = require('jquery')

import {
    addnotify
} from '@/services/Notifications';

Vue.prototype.$addnotify = addnotify;

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(Vuelidate)
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
