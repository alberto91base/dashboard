import { put, takeLatest, all, call } from 'redux-saga/effects';

import * as types from '@redux/modules/auth/types';

import {
    showLoading,
    hideLoading,
    setUserData,
    setTextErrorLogin,
    logoutSetData,
    setAlert,
} from '@redux/actions';

import AuthService from '@services/auth.service';
import NavigationService from '@services/navigation.service';
import LocalstorageService from '@services/localstorage.service';
import ErrorLoginService from '@services/errorLogin.service';

import isDateNoExpired from '@lib/dateExpired';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* login(action) {
    const { email, password } = action.payload;
    yield put(showLoading());

    try {
        // const response = yield call(
        //     [AuthService.instance, AuthService.instance.login],
        //     email,
        //     password
        // );
        const user = {
            token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiI2MDg0MzU2Njc1ZTkwMzIzNDAzYjQyNGMiLCJyZWxhdGlvbl9pZCI6IjYwODQzNTY2NzVlOTAzMjM0MDNiNDI0ZiIsInByb2plY3QiOnsiX2lkIjoiNjA4NDM1NjY3NWU5MDMyMzQwM2I0MjRkIiwibmFtZSI6InVzZXJzIiwicHJvamVjdF91bmlxdWUiOiJMQUItUFJPSkVDVC1VTklRVUUtVVNFUlMifSwicm9sZSI6eyJfaWQiOiI2MDg0MzU2Njc1ZTkwMzIzNDAzYjQyNGUiLCJuYW1lIjoicm9vdCJ9fSwiaWF0IjoxNjIxNDQ2NTc1LCJleHAiOjE2MjE0ODI1NzV9.RAGEA_H7oCzEXVvfcPr0yXFhCPbeNi3WU_q5MpARQFo',
            role: 'admin',
            email: 'admin@prueba.com',
        };
        const date = new Date();
        // const dataAndEmail = { ...response.data, email, date: date };
        const dataAndEmail = { ...user, email, date: date };
        yield put(setUserData(dataAndEmail));
        yield call(
            [
                LocalstorageService.instance,
                LocalstorageService.instance.addItem,
            ],
            process.env.REACT_APP_ATH_TOKEN_NAME,
            JSON.stringify(dataAndEmail)
        );
        if (
            window.location.pathname ===
            `${process.env.REACT_APP_BASE_URL}/login`
        ) {
            yield call(NavigationService.replace, '/');
        }
    } catch (error) {
        let errorStatusCode = error.response?.status || 0;
        const textError = yield call(
            [ErrorLoginService.instance, ErrorLoginService.instance.getError],
            errorStatusCode
        );
        yield put(setTextErrorLogin(textError));
    } finally {
        yield put(hideLoading());
    }
}

function* localstorageLogin() {
    const dataStoreUser = yield call(
        [LocalstorageService.instance, LocalstorageService.instance.getItem],
        process.env.REACT_APP_ATH_TOKEN_NAME
    );

    const dataStoreUserObject = JSON.parse(dataStoreUser);

    if (dataStoreUserObject && isDateNoExpired(dataStoreUserObject.date)) {
        if (dataStoreUserObject) {
            yield put(setUserData(dataStoreUserObject));
        } else {
            yield put(
                setAlert({
                    type: 'Error',
                    message: 'Token expirado, volver a iniciar sesión',
                })
            );
        }
    } else {
        yield call(
            [
                LocalstorageService.instance,
                LocalstorageService.instance.removeItem,
            ],
            process.env.REACT_APP_ATH_TOKEN_NAME
        );
    }
}

function* logout() {
    yield call(
        [LocalstorageService.instance, LocalstorageService.instance.removeItem],
        process.env.REACT_APP_ATH_TOKEN_NAME
    );
    yield put(logoutSetData());
}

export function* watchAuth() {
    yield takeLatest(types.LOGIN, login);
    yield takeLatest(types.LOCALSTORAGE_LOGIN, localstorageLogin);
    yield takeLatest(types.LOGOUT, logout);
}
