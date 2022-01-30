import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Dashboard/Dashboard.vue')
  },
  {
    path: '/eventos',
    name: 'EventosList',
    component: () => import('../components/Eventos/list/template.vue')
  },
  {
    path: '/eventos/adicionar',
    name: 'EventosAdd',
    component: () => import('../components/Eventos/add/template.vue')
  },
  {
    path: '/eventos/editar/:eve_codigo',
    name: 'EventosEdit',
    component: () => import('../components/Eventos/edit/template.vue')
  },
  {
    path: '/promoters',
    name: 'PromotersList',
    component: () => import('../components/Promoters/list/template.vue')
  },
  {
    path: '/promoters/adicionar',
    name: 'PromotersAdd',
    component: () => import('../components/Promoters/add/template.vue')
  },
  {
    path: '/promoters/editar/:pro_codigo',
    name: 'PromotersEdit',
    component: () => import('../components/Promoters/edit/template.vue')
  },
  {
    path: '/usuarios',
    name: 'UsuariosList',
    component: () => import('../components/Usuarios/list/template.vue')
  },
  {
    path: '/usuarios/adicionar',
    name: 'UsuariosAdd',
    component: () => import('../components/Usuarios/add/template.vue')
  },
  {
    path: '/usuarios/editar/:usu_codigo',
    name: 'UsuariosEdit',
    component: () => import('../components/Usuarios/edit/template.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name) {

    // CHECK IF EXISTS USER TOKEN FROM ADMIN
    document.cookie.split(';').some(c => {
        const cookieName = 'x-access-token=';
        if (c.trim().startsWith(cookieName)) {
            next();
        } else {
            var newCookie = cookieName + 'NA' + ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
            document.cookie = newCookie;
            next(false);
            window.location.href = window.location.protocol + '//' + window.location.hostname + `:${window.location.port}`;
        }
    });
  }
});

export default router
