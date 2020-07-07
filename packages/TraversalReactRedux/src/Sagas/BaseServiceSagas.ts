import { takeLatest, call, put, ForkEffect } from 'redux-saga/effects';
import { ServiceResponse } from '../Models/Service';
import { Action } from 'redux';
import { serviceSagaError } from '../Actions/Service';

export class BaseServiceSagas {
  constructor() {
    this.effects = [];
  }
  protected effect = <T1 extends Action, T2, T3 extends Action>(
    pattern: string,
    request: (...args: any[]) => Promise<ServiceResponse<T2>>,
    buildCallArgs: (action: T1) => any[],
    buildAction: (data: T2) => T3
  ) =>
    takeLatest(pattern, function*(action: T1) {
      const serviceResponse = yield call(request, ...buildCallArgs(action));
      yield put(
        serviceResponse.data
          ? buildAction(serviceResponse.data)
          : serviceSagaError(serviceResponse)
      );
    });

  public effects: ForkEffect<never>[];
}
