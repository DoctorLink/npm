import { call, put } from 'redux-saga/effects';
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { start: any },
  action: {
    algoId: unknown;
    release: unknown;
    lang: unknown;
    nodeId: unknown;
    injection: unknown;
    memberReference: unknown;
  }
) =>
  call(
    api.start,
    action.algoId,
    action.release,
    action.lang,
    action.nodeId,
    action.injection,
    action.memberReference
  );

const getOnSuccess = (response: { json: () => any }) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalStartSet(flattenTraversalChat(json)));
  };

export default (api: any) =>
  constructApiGenerator(api, 'Chat/StartAsync', getApiCall, getOnSuccess);
