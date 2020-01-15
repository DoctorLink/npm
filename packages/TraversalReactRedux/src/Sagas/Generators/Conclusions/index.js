import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.conclusions, action.traversalId);

const getOnSuccess = (response, action) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalConclusionSet({ 
        traversalId: action.traversalId,
        conclusions: json.data })
    );
}

export default (api) => constructApiGenerator(api, "Traversal/ConclusionAsync", getApiCall, getOnSuccess);