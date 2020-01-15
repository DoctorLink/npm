import { call, put } from 'redux-saga/effects';
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.start, action.algoId, action.release, action.lang, action.nodeId, action.injection, action.culture);

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalStartSet(flattenTraversalChat(json)));
}

export default (api) => constructApiGenerator(api, "Chat/StartAsync", getApiCall, getOnSuccess);