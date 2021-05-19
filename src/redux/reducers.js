import { combineReducers } from 'redux';
import app from './modules/app/reducer';
import auth from './modules/auth/reducer';
import cameraLow from './modules/cameraLow/reducer';
import lasClaves from './modules/lasClaves/reducer';

export default combineReducers({
    app,
    auth,
    cameraLow,
    lasClaves,
});
