import { call, put } from 'redux-saga/effects';
import {
  flattenTraversalChat,
  scrollLastChildIntoView,
} from '../../../Helpers';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { previous: any },
  action: {
    traversalId: unknown;
    algoId: unknown;
    nodeId: unknown;
    assetId: unknown;
  }
) =>
  call(
    api.previous,
    action.traversalId,
    action.algoId,
    action.nodeId,
    action.assetId
  );

const getOnSuccess = (
  response: { json: () => any },
  action: { containerRef: any }
) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalPreviousSet(flattenTraversalChat(json)));
    scrollLastChildIntoView(action.containerRef);
  };

export default (api: any) =>
  constructApiGenerator(
    api,
    'api/v2/Chat/PreviousAsync',
    getApiCall,
    getOnSuccess
  );
