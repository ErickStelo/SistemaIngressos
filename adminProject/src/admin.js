import Vue from 'vue'
import routesAdmin from './router/admin-routes'
import store from './store'
import VueHead from 'vue-head'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'

import '../src/assets/css/awesome-notifications.css';
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

window.$ = window.jQuery = require('jquery')

import {
    addnotify
} from '@/services/Notifications';

import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
Vue.use(VueMask);
Vue.prototype.$addnotify = addnotify;
Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(Vuelidate)
import money from 'v-money'
 
// register directive v-money and component <money>
Vue.use(money, {precision: 4})
import AdminApp from './views/Admin/Admin-template.vue'

new Vue({
    router: routesAdmin,
    store,
    render: h => h(AdminApp)
}).$mount('#admin')