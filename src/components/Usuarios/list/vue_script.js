import Usuario from '../resource';
import moment from 'moment'

export default {
    data: function() {
        return {
            usuarioList: []
        }
    },
    filters: {
        formatDate: function(value) {
            if (value != null) {
                return moment(value).format('DD/MM/YYYY')
            } else {
                return null
            }
        }
    },

    methods: {
        index: function() {
            Usuario.getUsuarios().then(usuarios => {
                this.usuarioList = usuarios;
            })
        },

        edit: function(usuario) {
            this.$router.push({
                name: 'UsuariosEdit',
                params: {
                    usu_codigo: usuario.usu_codigo
                }
            })
        },

        excluir: function(usuario) {
            Usuario.delete(usuario.usu_codigo).then(r => {
                this.index()
            })
        }
    },
    mounted: function() {
        this.index()
    },
    head: {
        title: {
            inner: 'Painel',
            separator: '-',
            complement: 'Sistema de Ingressos AG'
        },
        meta: [

        ],
        link: [

        ],
        script: [

        ],

    }
}