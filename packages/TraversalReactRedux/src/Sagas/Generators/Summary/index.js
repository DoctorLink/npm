import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.summary, action.traversalId);

const getOnSuccess = (response, action) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalSummarySet({ 
        traversalId: action.traversalId,
        questions: json.data })
    );
}

export default (api) => constructApiGenerator(api, "Traversal/SummaryAsync", getApiCall, getOnSuccess);