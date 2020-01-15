import { call, put } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.start, action.algoId, action.release, action.lang, action.nodeId, action.injection, action.culture);

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalStartSet(flattenTraversalNodeCollection(json)));
}

const getOnStart = () => function* apiCall() {
    yield put(actions.traversalDirection(false));
}

export default (api) => constructApiGenerator(api, "Traversal/StartAsync", getApiCall, getOnSuccess, getOnStart);