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

/**
 * A base class for Redux Saga stores.
 * @typeParam T - Store type.
 */
export class BaseStore<T> {
  /**
   * Construct a BaseStore.
   * @param effects - An array of sagas.
   * @param reducersObject - and object to combine into the store state.
   */
  constructor(
    effects: ForkEffect<never>[],
    reducersObject: ReducersMapObject<T>
  ) {
    const reducers = combineReducers(reducersObject);
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

  /**
   * The redux store.
   */
  public store: Store<CombinedState<T>> & {
    dispatch: unknown;
  };

  /**
   * The saga middleware running the sagas.
   */
  public sagaMiddleware: SagaMiddleware<object>;
}
