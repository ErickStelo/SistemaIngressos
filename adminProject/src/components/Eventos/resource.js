import Api from '@/services/Api';

export default {
    async index(data) {
        return await Api().get('/indexEventos', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async delete(id) {
        return await Api().get('/deleteEvento/' + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async edit(id) {
        return await Api().get('/editEvento/' + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async update(data) {
        return await Api().post('/updateEvento', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async save(data) {
        return await Api().post('/saveEvento', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async getPromotersForAdd(data) {
        return await Api().post('/getPromotersForAdd', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async getPromotersList(eve_codigo) {
        return await Api().get('/getPromotersList/' + eve_codigo).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async addPromoter(data) {
        return await Api().post('/addPromoter', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async excluirPromoter(data) {
        return await Api().post('/excluirPromoter', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async adicionarProduto(data) {
        return await Api().post('/adicionarProduto', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async getProdutosLotes(eve_codigo) {
        return await Api().get('/getProdutosLotes/' + eve_codigo).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async removerProduto(data) {
        return await Api().get('/removerProduto/' + data.eve_codigo + '/' + data.epr_codigo).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async addLoteToProduto(epr_codigo) {
        return await Api().get('/addLoteToProduto/' + epr_codigo).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async removerLoteFromProduto(data) {
        return await Api().post('/removerLoteFromProduto', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },

    async addCategoriaPrecoToLote(data) {
        return await Api().post('/addCategoriaPrecoToLote', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async removeCategoriaPrecoFromLote(data) {
        return await Api().post('/removeCategoriaPrecoFromLote', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async saveCategoriaPreco(data) {
        return await Api().post('/saveCategoriaPreco', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
}