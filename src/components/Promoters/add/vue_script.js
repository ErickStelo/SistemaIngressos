import Promoters from '../resource';
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
        saveForm: function(){
            this.$v.promoterForm.$touch();
            if(!this.$v.promoterForm.$invalid){
                Promoters.save(this.promoterForm).then(r =>{

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