import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';
import {
  createTraversalWebApi,
  createChatWebApi,
  createHealthAssessmentWebApi,
  createMemberWebApi,
  GetTokenFunction,
} from '../WebApi';
import { createTraversalSaga, createChatSaga } from '../Sagas';
import { rootTraversalReducer, rootChatReducer } from '../Reducers';
import * as actions from '../Actions';

export interface StoreConfig {
  engine: string;
  hraApi?: string;
}

const normaliseConfig = (
  configOrEngineUrl: StoreConfig | string
): StoreConfig =>
  typeof configOrEngineUrl === 'object'
    ? configOrEngineUrl
    : {
        engine: configOrEngineUrl,
      };

export const createTraversalStore = (
  config: StoreConfig,
  history: History<any>,
  getToken?: GetTokenFunction
) => {
  config = normaliseConfig(config);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootTraversalReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  setMemberRefToStoreFromLocalStorage(store);
  const traversalApi = createTraversalWebApi(config.engine, getToken);
  const hraApi = createHealthAssessmentWebApi(config.hraApi, getToken);
  const memberApi = createMemberWebApi(config.engine, getToken);
  const rootSaga = createTraversalSaga(
    traversalApi,
    hraApi,
    memberApi,
    history
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export const createChatStore = (
  config: StoreConfig,
  history: History<any>,
  getToken?: GetTokenFunction
) => {
  config = normaliseConfig(config);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootChatReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  setMemberRefToStoreFromLocalStorage(store);
  const chatApi = createChatWebApi(config.engine, getToken);
  const hraApi = createHealthAssessmentWebApi(config.hraApi, getToken);
  const memberApi = createMemberWebApi(config.engine, getToken);
  const rootSaga = createChatSaga(chatApi, hraApi, memberApi, history);
  sagaMiddleware.run(rootSaga);
  return store;
};

const setMemberRefToStoreFromLocalStorage = (store: any) => {
  const memberReference = localStorage.getItem('memberReference');
  if (memberReference) {
    store.dispatch(actions.memberCreateSet(memberReference));
  }
};
