import Api from '@/services/Api'


export default {
    async getMenus(data) {
        return await Api().get('/getMenus', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
    async getInitData(data) {
        return await Api().get('/getInitData', data).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        })
    },
}