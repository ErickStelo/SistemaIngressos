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
        saveForm: function(){
            this.$v.eventoForm.$touch();
            if(!this.$v.eventoForm.$invalid){
                Eventos.save(this.eventoForm).then(r =>{

                })
            }
        }
    },
    mounted: function() {
    },
    head: {
        title: {
            inner: 'Painel',
            separator: '-',
            complement: 'Sistema de Ingressos AG'
        },
        meta:[
            
        ],
        link: [
           
        ],
        script: [
            
        ],

    }
}