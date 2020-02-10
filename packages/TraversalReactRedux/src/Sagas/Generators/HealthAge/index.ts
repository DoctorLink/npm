import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { healthRisks: any },
  action: { traversalId: unknown; conclusions: unknown }
) => call(api.healthRisks, action.traversalId, [], action.conclusions);

const getOnSuccess = (response: { json: () => any }) =>
  function* onSuccess() {
    const {
      age,
      healthAge,
      minimumHealthAge,
      checkableConclusions,
    } = yield response.json();
    yield put(
      actions.healthAgeSet({
        age,
        healthAge,
        minimumHealthAge,
        checkableConclusions,
      })
    );
  };

export default (api: any) =>
  constructApiGenerator(api, 'HealthRisk', getApiCall, getOnSuccess);
