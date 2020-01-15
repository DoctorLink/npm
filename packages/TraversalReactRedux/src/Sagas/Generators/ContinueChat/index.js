import { call, put } from 'redux-saga/effects';
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.continue, action.traversalId);

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalContinueSet(flattenTraversalChat(json)));
}

const getOnStart = () => function* apiCall() {
    yield put(actions.traversalDirection(false));
}

export default (api) => constructApiGenerator(api, "Chat/ContinueAsync", getApiCall, getOnSuccess, getOnStart);