import * as types from './types';

const initialState = {
    claves: null,
    claveNow: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_LAS_CLAVES:
            return {
                ...state,
                claves: action.payload,
            };

        case types.SET_CLAVE_NOW:
            return {
                ...state,
                claveNow: action.payload,
            };
        case types.REMOVE_ITEM_FROM_LAS_CLAVES:
            const claves = state.claves.filter((clave) => {
                if (action.payload !== clave._id) {
                    return clave;
                }
            });
            return {
                ...state,
                claves,
            };
        default:
            return state;
    }
}
