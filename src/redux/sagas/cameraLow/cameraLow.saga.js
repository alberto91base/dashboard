import { put, takeLatest, all, call } from 'redux-saga/effects';

//types
import * as types from '@redux/modules/cameraLow/types';
//services
import NavigationService from '@services/navigation.service';
import CameraLowService from '@services/cameraLow.service';
//actions
import {
    showLoading,
    hideLoading,
    setAlert,
    setCamerasLow,
    setCameraLowNow,
    removeItemFromCamerasLow,
} from '@redux/actions';

function* onSearchCamerasLow(action) {
    try {
        yield put(showLoading());
        const response = yield call(
            [CameraLowService.instance, CameraLowService.instance.getAll],
            action.payload
        );
        yield put(setCamerasLow(response.data));
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error en carga cámara lenta' })
        );
    } finally {
        yield put(hideLoading());
    }
}

function* addCameraLow(action) {
    const { data } = action.payload;
    try {
        yield put(showLoading());
        const response = yield call(
            [CameraLowService.instance, CameraLowService.instance.addItem],
            data
        );
        yield call(NavigationService.navigate, '/camera-low');
        yield put(
            setAlert({ type: 'info', message: 'Añadido cámara lenta con exito' })
        );
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error al añadir el cámara lenta' })
        );
    } finally {
        yield put(hideLoading());
    }
}

function* loadEditCameraLow(action) {
    const id = action.payload;
    try {
        yield put(showLoading());
        yield put(setCameraLowNow(null));
        const response = yield call(
            [CameraLowService.instance, CameraLowService.instance.getById],
            id
        );
        yield put(setCameraLowNow(response));
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error al cargar la cámara lenta' })
        );
    } finally {
        yield put(hideLoading());
    }
}

function* editCameraLow(action) {
    const { id, data } = action.payload;

    try {
        yield put(showLoading());
        const response = yield call(
            [CameraLowService.instance, CameraLowService.instance.updateItem],
            id,
            data
        );
        yield put(setCameraLowNow(response));
        yield put(
            setAlert({ type: 'info', message: 'Editado cámara lenta con exito' })
        );
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error al editar el cámara lenta' })
        );
    } finally {
        yield put(hideLoading());
    }
}

function* deleteCameraLow(action) {
    const id = action.payload;

    try {
        yield put(showLoading());
        const response = yield call(
            [CameraLowService.instance, CameraLowService.instance.deleteItem],
            id
        );
        yield put(removeItemFromCamerasLow(id));
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error al elimiar el cámara lenta' })
        );
    } finally {
        yield put(hideLoading());
    }
}

export function* watchCameraLow() {
    yield takeLatest(types.SEARCH_CAMERAS_LOW, onSearchCamerasLow);
    yield takeLatest(types.ADD_CAMERA_LOW, addCameraLow);
    yield takeLatest(types.LOAD_EDIT_CAMERA_LOW, loadEditCameraLow);
    yield takeLatest(types.EDIT_CAMERA_LOW, editCameraLow);
    yield takeLatest(types.DELETE_CAMERA_LOW, deleteCameraLow);
}
