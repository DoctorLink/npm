import { call, put } from 'redux-saga/effects';

import * as actions from '../../Actions';

export default (
  api: any,
  url: any,
  getApiCall: any,
  getOnSuccess: any,
  getOnStart?: any
) =>
  function* apiCall(action: any) {
    if (!api.isConfigured) {
      console.warn(api.name + ' API is not configured.');
      return;
    }

    if (getOnStart) yield call(getOnStart());

    const { response, error } = yield getApiCall(api, action);

    if (response) {
      if (response.ok) yield call(getOnSuccess(response, action));
      else yield put(actions.webApiNotOk(url, response));
    } else {
      yield put(actions.webApiError(url, error));
    }
  };
