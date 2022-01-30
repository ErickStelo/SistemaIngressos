import Api from '@/services/Api'

export default {
    data: function() {
        return {
            loginForm: {
                usuario: null,
                senha: null
            }
        }
    },
    
    methods: {
        login: function(){
            Api().post('/checkLogin', this.loginForm).then(response =>{
                if(response.data.token){
                    document.cookie = "x-access-token="+response.data.token;
                    window.location.href = window.location.protocol + '//' + window.location.hostname + `:${window.location.port}/admin`;
                }else if(response.data.fail){
                    alert(response.data.fail)
                }
            }).catch(error => {
                if(error.response.data && error.response.data.fail){
                    alert(error.response.data.fail)

                }
            })
        },
        test: function(){
            alert('sdmasdmaskdmasdmkasdmkasdkasdaskd');
        }
    },
    mounted: function() {

    },
    head: {
        title: {
            inner: 'Login',
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
                href: require('../../assets/css/styles.css'),
                id: 'theme-style',
                body: false
            },
        ],
        script: [
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
                src: require('../../assets/js/scripts.js'),
                async: true,
                body: true
            }
        ],

    }
}