import * as types from './types';

export const login = ({ email, password }) => ({
    type: types.LOGIN,
    payload: { email, password },
});

export const localStoragelogin = () => ({
    type: types.LOCALSTORAGE_LOGIN,
    payload: {},
});

export const setUserData = (data) => ({
    type: types.SET_USER_DATA,
    payload: { data },
});

export const logout = () => ({
    type: types.LOGOUT,
    payload: {},
});

export const logoutSetData = () => ({
    type: types.LOGOUT_SET_DATA,
    payload: {},
});

export const setTextErrorLogin = (textError) => {
    return {
        type: types.SET_TEXT_ERROR_LOGIN,
        payload: { textError },
    };
};
