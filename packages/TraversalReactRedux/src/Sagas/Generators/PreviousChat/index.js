import { call, put } from 'redux-saga/effects'
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.previous, action.traversalId, action.algoId, action.nodeId, action.assetId);

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalPreviousSet(flattenTraversalChat(json)));
}

export default (api) => constructApiGenerator(api, "Chat/PreviousAsync", getApiCall, getOnSuccess);