import { call, put } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import createTraversalResponse from '../../../Helpers/createTraversalResponse';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.next, createTraversalResponse(action.traversal));

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalNextSet(flattenTraversalNodeCollection(json)));
}

const getOnStart = () => function* apiCall() {
    yield put(actions.traversalDirection(false));
}

export default (api) => constructApiGenerator(api, "Traversal/NextAsync", getApiCall, getOnSuccess, getOnStart);