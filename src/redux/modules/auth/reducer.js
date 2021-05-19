import * as types from './types';

const initialState = {
    isLoggedIn: false,
    user: null,
    errorTextLogin: null,
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.SET_USER_DATA:
            return { ...state, isLoggedIn: true, user: payload.data };

        case types.LOGOUT_SET_DATA:
            return { ...state, isLoggedIn: false, user: null };

        case types.SET_TEXT_ERROR_LOGIN:
            return { ...state, errorTextLogin: payload.textError };

        default:
            return state;
    }
}
