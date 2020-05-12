import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { comparisonReport: any },
  action: {
    currentTraversal: string;
    pastTraversal: string;
    riskAtAge: number;
  }
) =>
  call(
    api.comparisonReport,
    action.currentTraversal,
    action.pastTraversal,
    action.riskAtAge
  );

const getOnSuccess = (response: any) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.hraComparisonReportSet(json));
  };

export default (api: any) =>
  constructApiGenerator(api, 'Compare/Compare', getApiCall, getOnSuccess);
