import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api: any, action: any) =>
  call(api.wellness, action.traversalId, action.conclusions);

const getOnSuccess = (response: any) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.hraWellnessSet(json));
  };

export default (api: any) =>
  constructApiGenerator(api, 'Wellness', getApiCall, getOnSuccess);
