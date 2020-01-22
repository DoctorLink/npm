import { call, put } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.previous, action.traversalId, action.algoId, action.nodeId);

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalPreviousSet(flattenTraversalNodeCollection(json)));
}

export default (api) => constructApiGenerator(api, "Traversal/PreviousAsync", getApiCall, getOnSuccess);