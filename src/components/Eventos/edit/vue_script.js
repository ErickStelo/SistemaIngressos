import Eventos from '../resource';
import {required, minLength} from 'vuelidate/lib/validators';


export default {
    data: function() {
        return {
            eventoForm: {}
        }
    },
    validations: {
        eventoForm: {
            eve_nome: {
                required
            },

        }
    },
    methods: {
        edit: function() {
            var eve_codigo = this.$route.params.eve_codigo;
            Eventos.edit(eve_codigo).then(eventoData => {
                this.eventoForm = eventoData
            })
        },
        saveForm: function() {
            this.$v.eventoForm.$touch();
            if (!this.$v.eventoForm.$invalid) {
                Eventos.update(this.eventoForm).then(r => {

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