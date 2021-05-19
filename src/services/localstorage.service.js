let instance = null;

class LocalstorageService {
    static get instance() {
        if (instance === null) {
            instance = new LocalstorageService();
        }
        return instance;
    }

    getItem(name) {
        return localStorage.getItem(name);
    }

    addItem(name, data) {
        localStorage.setItem(name, data);
    }

    removeItem(name) {
        localStorage.removeItem(name);
    }
}

export default LocalstorageService;
