import { call, put } from 'redux-saga/effects';
import {
  flattenTraversalChat,
  scrollLastChildIntoView,
} from '../../../Helpers';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api: { continue: any }, action: { traversalId: unknown }) =>
  call(api.continue, action.traversalId);

const getOnSuccess = (
  response: { json: () => any },
  action: { containerRef: any }
) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalContinueSet(flattenTraversalChat(json)));
    scrollLastChildIntoView(action.containerRef);
  };

export default (api: any) =>
  constructApiGenerator(api, 'api/v2/Chat/ContinueAsync', getApiCall, getOnSuccess);
