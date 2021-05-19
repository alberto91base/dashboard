import * as types from './types';

const initialState = {
    showLoading: false,
    alert: {
        type: '',
        message: '',
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_LOADING:
            return {
                ...state,
                showLoading: true,
            };

        case types.HIDE_LOADING:
            return {
                ...state,
                showLoading: false,
            };
        case types.ALERT:
            return {
                ...state,
                alert: action.payload,
            };
        default:
            return state;
    }
}
