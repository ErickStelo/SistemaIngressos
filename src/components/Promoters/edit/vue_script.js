import Promoter from '../resource';
import {required, minLength} from 'vuelidate/lib/validators';


export default {
    data: function() {
        return {
            promoterForm: {}
        }
    },
    validations: {
        promoterForm: {
            pro_nome: {
                required
            },

        }
    },
    methods: {
        edit: function() {
            var pro_codigo = this.$route.params.pro_codigo;
            Promoter.edit(pro_codigo).then(promoter => {
                this.promoterForm = promoter
            })
        },
        saveForm: function() {
            this.$v.promoterForm.$touch();
            if (!this.$v.promoterForm.$invalid) {
                Promoter.update(this.promoterForm).then(r => {

                }).catch(error => {

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