import { call, put } from 'redux-saga/effects'
import { flattenTraversalChat, scrollLastChildIntoView } from '../../../Helpers';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.previous, action.traversalId, action.algoId, action.nodeId, action.assetId);

const getOnSuccess = (response, action) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalPreviousSet(flattenTraversalChat(json)));
    scrollLastChildIntoView(action.containerRef);
}

export default (api) => constructApiGenerator(api, "Chat/PreviousAsync", getApiCall, getOnSuccess);