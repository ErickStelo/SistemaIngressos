/**
 * @description Configura o axios para realizar requests no backend
 * @returns Axios
 */

import axios from 'axios';

import {blockUI} from './Tools'
import {responseNotifications, addnotify} from '@/services/Notifications';
import AdminRoute from '../router/admin-routes';


function getAccessToken(){
    let nameCookie = 'x-access-token=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if(c.indexOf(nameCookie) == 0){
            return c.substring(nameCookie.length)
        }else{
            return 'NA';
        }
    }
}

var AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    // baseURL: 'http://192.168.0.193:3000',
    timeout: 6000,
    headers:{
        'x-access-token': getAccessToken()
    }
})

AxiosInstance.interceptors.response.use(function(response) {
    blockUI(false);
    responseNotifications(response);
    if(response.data.redirect && response.data.redirect != ''){
        AdminRoute.push(response.data.redirect)
    }else{
        return response;
    }
}, function(error) {
    blockUI(false);
    if (error.code === 'ECONNABORTED') {
        addnotify('info', 'Não foi possivel completar sua requisição')
    } else {
        responseNotifications(error);
        if(error.response && error.response.data){
            if(error.response.data.redirect && error.response.data.redirect != ''){
                AdminRoute.push(error.response.data.redirect)
            }
        }
    }
    return Promise.reject(error);
});

export default () => AxiosInstance;