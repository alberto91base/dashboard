import { put, takeLatest, all, call } from 'redux-saga/effects';

//types
import * as types from '@redux/modules/lasClaves/types';
//services
import NavigationService from '@services/navigation.service';
import LasClavesService from '@services/lasClaves.service';
//actions
import {
    showLoading,
    hideLoading,
    setAlert,
    setLasClaves,
    setClaveNow,
    removeItemFromLasClaves,
} from '@redux/actions';

function* onSearchLasClaves(action) {
    try {
        yield put(showLoading());
        const response = yield call(
            [LasClavesService.instance, LasClavesService.instance.getAll],
            action.payload
        );
        yield put(setLasClaves(response.data));
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error en carga de las claves' })
        );
    } finally {
        yield put(hideLoading());
    }
}

function* addClave(action) {
    const { data } = action.payload;
    try {
        yield put(showLoading());
        const response = yield call(
            [LasClavesService.instance, LasClavesService.instance.addItem],
            data
        );
        yield call(NavigationService.navigate, '/las-claves');
        yield put(
            setAlert({ type: 'info', message: 'Añadido clave con exito' })
        );
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error al añadir la clave' })
        );
    } finally {
        yield put(hideLoading());
    }
}

function* loadEditClave(action) {
    const id = action.payload;
    try {
        yield put(showLoading());
        yield put(setClaveNow(null));
        const response = yield call(
            [LasClavesService.instance, LasClavesService.instance.getById],
            id
        );
        yield put(setClaveNow(response));
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error al cargar clave' })
        );
    } finally {
        yield put(hideLoading());
    }
}

function* editClave(action) {
    const { id, data } = action.payload;

    try {
        yield put(showLoading());
        const response = yield call(
            [LasClavesService.instance, LasClavesService.instance.updateItem],
            id,
            data
        );
        yield put(setClaveNow(response));
        yield put(
            setAlert({ type: 'info', message: 'Editado clave con exito' })
        );
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error al editar clave' })
        );
    } finally {
        yield put(hideLoading());
    }
}

function* deleteClave(action) {
    const id = action.payload;

    try {
        yield put(showLoading());
        const response = yield call(
            [LasClavesService.instance, LasClavesService.instance.deleteItem],
            id
        );
        yield put(removeItemFromLasClaves(id));
    } catch (error) {
        console.log(error);
        yield put(
            setAlert({ type: 'Error', message: 'Error al elimiar clave' })
        );
    } finally {
        yield put(hideLoading());
    }
}

export function* wathLasClaves() {
    yield takeLatest(types.SEARCH_LAS_CLAVES, onSearchLasClaves);
    yield takeLatest(types.ADD_CLAVE, addClave);
    yield takeLatest(types.LOAD_EDIT_CLAVE, loadEditClave);
    yield takeLatest(types.EDIT_CLAVE, editClave);
    yield takeLatest(types.DELETE_CLAVE, deleteClave);
}
