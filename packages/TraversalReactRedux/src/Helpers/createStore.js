import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { createTraversalWebApi, createChatWebApi, createHealthAssessmentWebApi } from '../WebApi'
import { createTraversalSaga, createChatSaga } from '../Sagas'
import { rootTraversalReducer, rootChatReducer } from '../Reducers'

const normaliseConfig = (configOrEngineUrl) =>
    typeof(configOrEngineUrl) === "object"
    ? configOrEngineUrl
    : {
        engine: configOrEngineUrl,
        hraApi: null
    };

export const createTraversalStore = (config) => {
    config = normaliseConfig(config);    
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootTraversalReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    const traversalApi = createTraversalWebApi(config.engine);
    const hraApi = createHealthAssessmentWebApi(config.hraApi);
    const rootSaga = createTraversalSaga(traversalApi, hraApi);
    sagaMiddleware.run(rootSaga);
    return store;
}

export const createChatStore = (config) => {
    config = normaliseConfig(config);
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootChatReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    const chatApi = createChatWebApi(config.engine);
    const hraApi = createHealthAssessmentWebApi(config.hraApi);
    const rootSaga = createChatSaga(chatApi, hraApi);
    sagaMiddleware.run(rootSaga);
    return store;
}