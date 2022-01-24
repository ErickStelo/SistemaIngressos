import Usuario from '../resource';
import {required, minLength} from 'vuelidate/lib/validators';


export default {
    data: function() {
        return {
            usuarioForm: {},
            promotersList: []
        }
    },
    validations: {
        usuarioForm: {
            usu_username: {
                required,
                minLength: minLength(5)
            },
            usu_password: {
                minLength: minLength(5)
            },
        }
    },
    methods: {
        edit: function() {
            var usu_codigo = this.$route.params.usu_codigo;
            Usuario.edit(usu_codigo).then(r => {
                this.usuarioForm = r.usuario
                this.promotersList = r.promotersList
            })
        },
        saveForm: function() {
            this.$v.usuarioForm.$touch();
            if (!this.$v.usuarioForm.$invalid) {
                if(this.usuarioForm.usu_password){
                    this.usuarioForm.usu_password = this.usuarioForm.usu_password.trim()
                }
                Usuario.update(this.usuarioForm).then(r => {

                })
            }
        }
    },
    mounted: function() {
        this.edit()
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