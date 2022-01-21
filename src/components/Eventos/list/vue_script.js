import Eventos from '../resource';
import moment from 'moment'

export default {
    data: function() {
        return {
            eventosList : []
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
            Eventos.index().then(eventos =>{
                this.eventosList = eventos
            }).catch(error =>{

            })
        },

        edit: function(evento){
            this.$router.push({ name: 'EventosEdit', params: { eve_codigo: evento.eve_codigo } })

        },
        excluir: function(evento){
            Eventos.delete(evento.eve_codigo).then(r =>{
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