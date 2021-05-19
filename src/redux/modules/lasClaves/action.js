import * as types from './types';

export const searchLasClaves = (order, searchText) => ({
    type: types.SEARCH_LAS_CLAVES,
    payload: { order, searchText },
});

export const setLasClaves = (data) => ({
    type: types.SET_LAS_CLAVES,
    payload: data,
});

export const addClave = (data) => ({
    type: types.ADD_CLAVE,
    payload: data,
});

export const loadEditClave = (id) => ({
    type: types.LOAD_EDIT_CLAVE,
    payload: id,
});

export const editClave = (data) => ({
    type: types.EDIT_CLAVE,
    payload: data,
});

export const setClaveNow = (data) => ({
    type: types.SET_CLAVE_NOW,
    payload: data,
});

export const deleteClave = (id) => ({
    type: types.DELETE_CLAVE,
    payload: id,
});

export const removeItemFromLasClaves = (id) => ({
    type: types.REMOVE_ITEM_FROM_LAS_CLAVES,
    payload: id,
});