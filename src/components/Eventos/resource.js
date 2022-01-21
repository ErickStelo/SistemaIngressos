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
}