import { call, put, all } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';
import addScrollEffect from '../addScrollEffect';

const getApiCall = (api, action) => call(function* apic() {
    const effects = yield addScrollEffect([call(api.next, action.traversalResponse)], action);
    const [apiResult] = yield all(effects);
    return apiResult;
})

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalNextSet(flattenTraversalNodeCollection(json)));
}

export default (api) => constructApiGenerator(api, "Traversal/NextAsync", getApiCall, getOnSuccess);