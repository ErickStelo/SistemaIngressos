import Promoters from '../resource';
import moment from 'moment'

export default {
    data: function() {
        return {
            promotersList : []
        }
    },
    filters: {
        formatDate: function (value) {
            if(value != null){
                return moment(value).format('DD/MM/YYYY')
            }else{
                return null
            }
        }
    },
    
    methods: {
        index: function(){
            Promoters.index().then(promoters =>{
                console.log(promoters);
                this.promotersList = promoters
            }).catch(error =>{

            })
        },

        edit: function(promoter){
            this.$router.push({ name: 'PromotersEdit', params: {pro_codigo: promoter.pro_codigo } })

        },
        excluir: function(promoter){
            Promoters.delete(promoter.pro_codigo).then(r =>{
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
        meta:[
            
        ],
        link: [
           
        ],
        script: [
            
        ],

    }
}