// import { BASE_URL } from '../config';
import store from '@redux/store';

import axios from 'axios';
axios.defaults.timeout = 5000;

const ApiFileService = (endpoint, formData) => {
    let token = null;
    if (store) {
        const storeData = store.getState();
        token = storeData.auth.user && storeData.auth.user.token;
    } else {
        return { status: 400, data: 'token incorrecto' };
    }
    return axios
        .post(endpoint, formData, {
            headers: {
                accept: 'application/json',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                [process.env.REACT_APP_ATH_TOKEN_NAME]: token,
            },
        })
        .then((response) => {
            const resp = response.data.response;
            const path = resp[Object.keys(resp)[0]];

            return { status: response.status, data: path };
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};

export default ApiFileService;
