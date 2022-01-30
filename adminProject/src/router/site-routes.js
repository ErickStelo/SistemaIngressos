import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login/Login-page.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name) {

    // CHECK IF EXISTS USER TOKEN FROM ADMIN
    // document.cookie.split(';').some(c => {
    //     const cookieName = 'x-access-token=';
    //     if (c.trim().startsWith(cookieName)) {
    //         next();
    //     } else {
    //         var newCookie = cookieName + 'NA' + ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
    //         document.cookie = newCookie;
    //         next(false);
    //         window.location.href = window.location.protocol + '//' + window.location.hostname + `:${window.location.port}`;
    //     }
    // });
//   }
// });

export default router
