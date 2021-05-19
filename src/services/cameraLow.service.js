import ApiService from './apiOlympic.service';

let instance = null;

class CameraLowService {
    static get instance() {
        if (instance === null) {
            instance = new CameraLowService();
        }
        return instance;
    }

    getAll(params) {
        let url = 'slowCam';
        return ApiService.instance.get(url);
    }

    addItem(body) {
        return ApiService.instance.post('slowCam', body);
    }

    getById(id) {
        return ApiService.instance.get(`slowCam/${id}`);
    }

    updateItem(id, body) {
        return ApiService.instance.put(`slowCam/${id}`, body);
    }

    deleteItem(id) {
        return ApiService.instance.delete(`slowCam/${id}`);
    }
}

export default CameraLowService;
