import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import createSagaMiddleware from 'redux-saga';

=======

import createSagaMiddleware from 'redux-saga';


>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;