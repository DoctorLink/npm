import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { healthRisks: any },
  action: { traversalId: unknown; ages: unknown; conclusions: unknown }
) => call(api.healthRisks, action.traversalId, action.ages, action.conclusions);

const getOnSuccess = (response: { json: () => any }) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.healthRisksSet(json));
  };

export default (api: any) =>
  constructApiGenerator(api, 'HealthRisk', getApiCall, getOnSuccess);
