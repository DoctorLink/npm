import { call, put, all, delay } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';
import addScrollEffect from '../addScrollEffect';

// const getApiCall = (api, action) => call(api.previous, action.traversalId, action.algoId, action.nodeId);

const getApiCall = (api, action) => call(function* apic() {
    const effects = yield addScrollEffect([call(api.previous, action.traversalId, action.algoId, action.nodeId)], action);
    const [apiResult] = yield all(effects);
    return apiResult;
})

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalPreviousSet(flattenTraversalNodeCollection(json)));
}

export default (api) => constructApiGenerator(api, "Traversal/PreviousAsync", getApiCall, getOnSuccess);