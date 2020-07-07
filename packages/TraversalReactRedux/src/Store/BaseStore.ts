import {
  Store,
  CombinedState,
  createStore,
  applyMiddleware,
  combineReducers,
  ReducersMapObject,
} from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { ForkEffect, all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

export class BaseStore<T> {
  constructor(
    effects: ForkEffect<never>[],
    reducersObject: ReducersMapObject<T>
  ) {
    const reducers = combineReducers<T>(reducersObject);
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(function*() {
      yield all(effects);
    });
    this.sagaMiddleware = sagaMiddleware;
    this.store = store;
  }
  public store: Store<CombinedState<T>> & {
    dispatch: unknown;
  };
  public sagaMiddleware: SagaMiddleware<object>;
}
