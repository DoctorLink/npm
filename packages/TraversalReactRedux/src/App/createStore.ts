import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {
  createTraversalWebApi,
  createChatWebApi,
  createHealthAssessmentWebApi,
} from '../WebApi';
import { createTraversalSaga, createChatSaga } from '../Sagas';
import { rootTraversalReducer, rootChatReducer } from '../Reducers';

const normaliseConfig = (configOrEngineUrl: any) =>
  typeof configOrEngineUrl === 'object'
    ? configOrEngineUrl
    : {
        engine: configOrEngineUrl,
        hraApi: null,
      };

export const createTraversalStore = (
  config: { engine: any; hraApi: any },
  history: any,
  getToken?: Promise<string>
) => {
  config = normaliseConfig(config);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootTraversalReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  const traversalApi = createTraversalWebApi(config.engine, getToken);
  const hraApi = createHealthAssessmentWebApi(config.hraApi, getToken);
  const rootSaga = createTraversalSaga(traversalApi, hraApi, history);
  sagaMiddleware.run(rootSaga);
  return store;
};

export const createChatStore = (
  config: { engine: any; hraApi: any },
  history: any,
  getToken?: Promise<string>
) => {
  config = normaliseConfig(config);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootChatReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  const chatApi = createChatWebApi(config.engine, getToken);
  const hraApi = createHealthAssessmentWebApi(config.hraApi, getToken);
  const rootSaga = createChatSaga(chatApi, hraApi, history);
  sagaMiddleware.run(rootSaga);
  return store;
};
