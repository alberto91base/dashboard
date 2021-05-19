import * as types from './types';

export const searchCamerasLow = (order, searchText) => ({
    type: types.SEARCH_CAMERAS_LOW,
    payload: { order, searchText },
});

export const setCamerasLow = (data) => ({
    type: types.SET_CAMERAS_LOW,
    payload: data,
});

export const addCameraLow = (data) => ({
    type: types.ADD_CAMERA_LOW,
    payload: data,
});

export const loadEditCameraLow = (id) => ({
    type: types.LOAD_EDIT_CAMERA_LOW,
    payload: id,
});

export const editCameraLow = (data) => ({
    type: types.EDIT_CAMERA_LOW,
    payload: data,
});

export const setCameraLowNow = (data) => ({
    type: types.SET_CAMERA_LOW_NOW,
    payload: data,
});

export const deleteCameraLow = (id) => ({
    type: types.DELETE_CAMERA_LOW,
    payload: id,
});

export const removeItemFromCamerasLow = (id) => ({
    type: types.REMOVE_ITEM_FROM_CAMERAS_LOW,
    payload: id,
});