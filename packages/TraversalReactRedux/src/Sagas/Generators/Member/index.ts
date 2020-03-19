import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { createMember: any },
  action: { memberReference: any }
) => call(api.createMember, action.memberReference);

const getOnSuccess = (
  response: { json: () => any },
  action: { memberReference: any }
) =>
  function* onSuccess() {
    console.log(response);
    localStorage.setItem(
      'memberReference',
      action.memberReference.memberReference
    );
    yield put(actions.memberCreateSet(action.memberReference.memberReference));
  };

export default (api: any) =>
  constructApiGenerator(api, 'Member', getApiCall, getOnSuccess);
