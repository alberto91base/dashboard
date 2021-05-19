// import { BASE_URL } from '../config';
import store from '@redux/store';

import axios from 'axios';
axios.defaults.timeout = 5000;

let instance = null;

class ApiService {
    constructor() {
        let service = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        service.interceptors.request.use(
            this.handleRequesSuccess,
            this.handleRequesError
        );
        this.service = service;
    }

    static get instance() {
        if (instance === null) {
            instance = new ApiService();
        }
        return instance;
    }

    handleSuccess = (response) => {
        console.log('ApiService handleSuccess');
        return response.data;
    };

    handleError = (error) => {
        return Promise.reject(error);
    };

    handleRequesSuccess = (req) => {
        console.log('req handleRequesSuccess', req);
        if (req.data?.type === 'image/jpeg') {
            req.headers[
                'Content-Type'
            ] = `multipart/form-data; boundary=${req.body._boundary}`;
        }

        if (store) {
            const storeData = store.getState();
            const token = storeData.auth.user && storeData.auth.user.token;
            req.headers[process.env.REACT_APP_ATH_TOKEN_NAME] = token;
        }
        return req;
    };

    handleRequesError = (error) => {
        console.log('request error');
        return Promise.reject(error);
    };

    async get(url) {
        return await this.service.get(url);
    }
    async post(url, body) {
        return await this.service.post(url, body);
    }
    async put(url, body) {
        return await this.service.put(url, body);
    }
    async delete(url) {
        return await this.service.delete(url);
    }
}

export default ApiService;
