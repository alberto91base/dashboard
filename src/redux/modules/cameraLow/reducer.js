import * as types from './types';

const initialState = {
    camerasLow: null,
    cameraLowNow: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_CAMERAS_LOW:
            return {
                ...state,
                camerasLow: action.payload,
            };

        case types.SET_CAMERA_LOW_NOW:
            return {
                ...state,
                cameraLowNow: action.payload,
            };
        case types.REMOVE_ITEM_FROM_CAMERAS_LOW:
            const camerasLow = state.camerasLow.filter((camera) => {
                if (action.payload !== camera._id) {
                    return camera;
                }
            });
            return {
                ...state,
                camerasLow,
            };
        default:
            return state;
    }
}
