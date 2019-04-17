import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createApi from '../Api'
import createSaga from '../Sagas'
import rootReducer from '../Reducers'

export default (apiUrl) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    const api = createApi(apiUrl)
    const rootSaga = createSaga(api);
    sagaMiddleware.run(rootSaga)
    return store;
}

