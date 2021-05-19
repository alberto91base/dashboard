import ApiService from './api.service';

let instance = null;

class Authservice {
    static get instance() {
        if (instance === null) {
            instance = new Authservice();
        }
        return instance;
    }

    login(email, password) {
        const body = {
            email,
            password,
            project_unique: process.env.REACT_APP_PROJECT_UNIQUE,
        };
        return ApiService.instance.post('auths', body);
    }
}

export default Authservice;
