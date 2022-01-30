import Default from './resource'

export default {
    data: function() {
        return {
            menusList: []
        }
    },
    
    methods: {
        init: function () {
            Default.getInitData().then((data) => {
                if(data.logoutUsuario){
                    document.cookie = 'x-access-token= expired;expires=Thu, 01 Jan 1970 00:00:01 GMT'
                    window.location.href = window.location.protocol + '//' + window.location.hostname + `:${window.location.port}`;
                }else{
                    this.getMenus();
                }
            })
        },
        
        logout: function() {
            document.cookie.split(';').some(c => {
                const cookieName = 'x-access-token=';
                if (c.trim().startsWith(cookieName)) {
                    var token = c.trim().substr(cookieName.length);
                    var newCookie = cookieName + token + ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
                    document.cookie = newCookie;
                    window.location.href = window.location.protocol + '//' + window.location.hostname + `:${window.location.port}`;
                }
            });
        },

        getMenus: function(){
            Default.getMenus().then(menus => {
                this.menusList = menus;
            })
        }
    },
    mounted: function() {
        this.init();
    },
    head: {
        title: {
            inner: 'Painel',
            separator: '-',
            complement: 'Sistema de Ingressos AG'
        },
        meta:[
            {name:'viewport', content:'width=device-width, initial-scale=1, shrink-to-fit=no'},
            {name:'description', content:'Sistema de controle para vendas de ingressos físicos por promoters'}
        ],
        link: [
            {
                rel: 'stylesheet',
                href: require('../../../node_modules/vue-material/dist/vue-material.min.css'),
                id: 'theme-style',
                body: false
            },
            {
                rel: 'stylesheet',
                href: require('../../../node_modules/vue-material/dist/theme/default.css'),
                id: 'theme-style',
                body: false
            },
            {
                rel: 'stylesheet',
                href: require('../../assets/css/styles.css'),
                id: 'theme-style',
                body: false
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css',
                id: 'theme-style',
                body: false
            },
        ],
        script: [
            {
                type: 'text/javascript',
                src: 'https://malsup.github.io/jquery.blockUI.js',
                async: true,
                body: false
            },
            {
                type: 'text/javascript',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js',
                async: true,
                body: false
            },
            {
                type: 'text/javascript',
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: require('../../assets/js/scripts.js'),
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: require('../../assets/js/scripts.js'),
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: require('../../assets/js/datatables-simple-demo.js'),
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: 'https://cdn.jsdelivr.net/npm/simple-datatables@latest',
                async: true,
                body: true
            },
        ],

    }
}