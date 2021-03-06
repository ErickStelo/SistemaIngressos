import Evento from '../resource';
import {
    required,
    minLength
} from 'vuelidate/lib/validators';
import {
    blockUI
} from '../../../services/Tools';


export default {
    data: function() {
        return {
            eventoForm: {
                aaa: null
            },
            promotersOptions: [],
            promoterOption: null,
            promotersList: [],
            eve_codigo: null,
            newProdutoForm: {},
            produtosLotes: {},
            categoriaValores: {},
            catValorSelectedToAdd: null,
            loteSelectedToAddCatValor: null,
            categoriaValorLoteForm: [],
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                suffix: '',
                precision: 2,
                masked: false
              }
        }
    },
    validations: {
        eventoForm: {
            eve_nome: {
                required
            },
        },
        newProdutoForm: {
            evp_nome: {
                required
            },
        },
    },
    methods: {
        edit: function() {
            this.eve_codigo = parseInt(this.$route.params.eve_codigo);
            Evento.edit(this.eve_codigo).then(data => {
                this.eventoForm = data.evento;
                this.getPromotersForAdd();
                this.getPromotersList();
            })
        },
        saveForm: function() {
            this.$v.eventoForm.$touch();
            if (!this.$v.eventoForm.$invalid) {
                Evento.update(this.eventoForm);
            }
        },
        getPromotersForAdd: function() {
            Evento.getPromotersForAdd({
                eve_codigo: this.eve_codigo
            }).then(promotersOptionsToAdd => {
                this.promotersOptions = promotersOptionsToAdd;
            })
        },
        getPromotersList: function() {
            blockUI(true);
            Evento.getPromotersList(this.eve_codigo).then(promotersList => {
                this.promotersList = promotersList;
            })
        },
        addPromoter: function() {
            Evento.addPromoter({
                eve_codigo: this.eve_codigo,
                pro_codigo: this.promoterOption
            }).then(r => {
                this.getPromotersForAdd();
                this.getPromotersList();
                this.promoterOption = null;
            })
        },
        excluirPromoter: function(promoter) {
            Evento.excluirPromoter(promoter).then(r => {
                this.getPromotersForAdd();
                this.getPromotersList();
            })
        },
        getProdutosLotes: function() {
            blockUI(true)
            Evento.getProdutosLotes(this.eve_codigo).then(data => {
                console.log(data.produtosLotes);
                this.produtosLotes = data.produtosLotes;
                this.categoriaValores = data.categoriaValores;
            })
        },
        adicionarProduto: function() {
            this.$v.newProdutoForm.$touch()
            if (!this.$v.newProdutoForm.$invalid) {
                blockUI(true)
                Evento.adicionarProduto({
                    eve_codigo: this.eve_codigo,
                    epr_nome: this.newProdutoForm.evp_nome
                }).then(newProduto => {
                    this.newProdutoForm = {};
                    this.produtosLotes.push({
                        ProdutoLotes: [],
                        ...newProduto
                    });
                })
            }
        },
        removerProduto: function(produto, idx) {
            blockUI(true);
            Evento.removerProduto({
                eve_codigo: this.eve_codigo,
                epr_codigo: produto.epr_codigo
            }).then(r => {
                this.produtosLotes.splice(idx, 1);
            })
        },
        addLoteToProduto: function(produto) {
            blockUI(true)
            Evento.addLoteToProduto(produto.epr_codigo).then(newLote => {
                produto.ProdutoLotes.push(newLote);
            })
        },
        removerLoteFromProduto: function(produto, lote, idx) {
            blockUI(true)
            Evento.removerLoteFromProduto(lote).then(removed => {
                produto.ProdutoLotes.splice(idx, 1);
            })
        },
        addCategoriaPrecoToLote: function() {
            $('#modalAddCategoriaValor').modal('hide');
            blockUI(true)
            Evento.addCategoriaPrecoToLote({
                eve_codigo: this.eve_codigo,
                epl_codigo: this.loteSelectedToAddCatValor.epl_codigo,
                cap_codigo: this.catValorSelectedToAdd
            }).then(newCategoriaValorLote => {
                this.loteSelectedToAddCatValor.LoteCategoriaPrecoValor.push(newCategoriaValorLote)
                this.loteSelectedToAddCatValor = null;
                this.catValorSelectedToAdd = null;
            })
        },
        removeCategoriaPrecoFromLote: function(lote, categoriaValor, idx){
            Evento.removeCategoriaPrecoFromLote(categoriaValor).then(r=>{
                lote.LoteCategoriaPrecoValor.splice(idx, 1);
            })
        },

        saveCategoriaPreco: function(categoriaValor){
            blockUI(true)
           Evento.saveCategoriaPreco(categoriaValor).then(updated =>{

           })

        }
    },
    mounted: function() {
        console.clear();
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