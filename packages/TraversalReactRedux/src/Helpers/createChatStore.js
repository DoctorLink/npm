import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createChatWebApi} from '../WebApi'
import createSaga from '../Sagas/Chat'
import { rootChatReducer } from '../Reducers'

export default (apiUrl) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootChatReducer, applyMiddleware(sagaMiddleware));
    const api = createChatWebApi(apiUrl)
    const rootSaga = createSaga(api);
    sagaMiddleware.run(rootSaga)
    return store;
}

