import Api from '@/services/Api';

export default {
    async getUsuarios(data) {
        return await Api().get('/getUsuarios').then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async delete(id) {
        return await Api().get('/deleteUsuario/' + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async edit(id) {
        return await Api().get('/editUsuario/' + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async update(data) {
        return await Api().post('/updateUsuario', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async save(data) {
        return await Api().post('/saveUsuario', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async getPromotersList(data) {
        return await Api().get('/getPromotersList', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
}