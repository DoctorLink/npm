import { Action } from 'redux';
import { takeLatest, call, put, ForkEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { serviceSagaError } from '../Actions/ServiceError';

export class BaseServiceSagas {
  constructor() {
    this.effects = [];
  }
  protected effect = <T1 extends Action, T2, T3 extends Action>(
    pattern: string,
    request: (...args: any[]) => Promise<AxiosResponse<T2>>,
    buildCallArgs: (action: T1) => any[],
    buildAction: (data: T2) => T3
  ) =>
    takeLatest(pattern, function* (action: T1) {
      try {
        const response = yield call(request, ...buildCallArgs(action));
        yield put(buildAction(response.data));
      } catch (error) {
        yield put(serviceSagaError(error));
      }
    });

  public effects: ForkEffect<never>[];
}
