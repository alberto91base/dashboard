import ApiService from './apiOlympic.service';

let instance = null;

class LasClaves {
    static get instance() {
        if (instance === null) {
            instance = new LasClaves();
        }
        return instance;
    }

    getAll(params) {
        let url = 'claves';
        return ApiService.instance.get(url);
    }

    addItem(body) {
        return ApiService.instance.post('claves', body);
    }

    getById(id) {
        return ApiService.instance.get(`claves/${id}`);
    }

    updateItem(id, body) {
        return ApiService.instance.put(`claves/${id}`, body);
    }

    deleteItem(id) {
        return ApiService.instance.delete(`claves/${id}`);
    }
}

export default LasClaves;
