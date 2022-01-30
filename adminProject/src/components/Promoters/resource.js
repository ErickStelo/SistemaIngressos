import Api from '@/services/Api';

export default {
    async index(data) {
        return await Api().get('/indexPromoters', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async delete(id) {
        return await Api().get('/deletePromoter/' + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async edit(id) {
        return await Api().get('/editPromoter/' + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async update(data) {
        return await Api().post('/updatePromoter', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async save(data) {
        return await Api().post('/savePromoter', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
}