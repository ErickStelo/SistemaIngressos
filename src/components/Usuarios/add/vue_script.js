import Usuario from '../resource';
import {
    required,
    minLength
} from 'vuelidate/lib/validators';


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
                required,
                minLength: minLength(5)
            },
        }
    },
    methods: {
        getPromotersList: function() {
            Usuario.getPromotersList().then(promotersList => {
                console.log(promotersList);
                this.promotersList = promotersList
            })
        },
        saveForm: function() {
            this.$v.usuarioForm.$touch();
            if (!this.$v.usuarioForm.$invalid) {
                Usuario.save(this.usuarioForm).then(r => {

                })
            }
        }
    },
    mounted: function() {
        this.getPromotersList()
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