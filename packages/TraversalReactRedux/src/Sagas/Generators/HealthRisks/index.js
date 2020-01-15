import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(api.healthRisks, action.traversalId, action.ages, action.conclusions);

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.healthRisksSet(json));
}

export default (api) => constructApiGenerator(api, "HealthRisk", getApiCall, getOnSuccess);
