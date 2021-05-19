let instance = null;

class ErrorLoginService {
    static get instance() {
        if (instance === null) {
            instance = new ErrorLoginService();
        }
        return instance;
    }

    getError(numberError) {
        switch (numberError) {
            case 0:
                return 'Error conexión con servidor';
                break;
            case 400:
                return 'Email o contraseña incorrectos';
                break;
            default:
                return 'Error';
                break;
        }
    }
}

export default ErrorLoginService;
