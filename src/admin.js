import Vue from 'vue'
import App from './views/Admin/Admin-template.vue'
import router from './router'
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

new Vue({
    router,
    store,
    render: function(h) {
        return h(App)
    }
}).$mount('#app')