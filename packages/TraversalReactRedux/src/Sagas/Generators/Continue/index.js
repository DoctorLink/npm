import { call, put } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.continue, action.traversalId);

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalContinueSet(flattenTraversalNodeCollection(json)));
}

export default (api) => constructApiGenerator(api, "Traversal/ContinueAsync", getApiCall, getOnSuccess);