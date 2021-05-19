import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import combinedReducer from './reducers';
import initSagas from './sagas/initSagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
    return combinedReducer(state, action);
};

// const store = createStore(reducer, bindMiddleware([thunkMiddleware]));
const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

// then run the saga
initSagas(sagaMiddleware);

export default store;
