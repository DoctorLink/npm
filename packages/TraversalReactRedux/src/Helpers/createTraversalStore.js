import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createTraversalWebApi} from '../WebApi'
import createSaga from '../Sagas/Traversal'
import { rootTraversalReducer } from '../Reducers'

export default (apiUrl) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootTraversalReducer, applyMiddleware(sagaMiddleware));
    const api = createTraversalWebApi(apiUrl)
    const rootSaga = createSaga(api);
    sagaMiddleware.run(rootSaga)
    return store;
}

