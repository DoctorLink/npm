import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { symptomReport: any },
  action: { traversalId: unknown }
) => call(api.symptomReport, action.traversalId);

const getOnSuccess = (
  response: { json: () => any },
  action: { traversalId: any }
) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(
      actions.traversalConclusionSet({
        traversalId: action.traversalId,
        symptomReport: json.data,
      })
    );
  };

export default (api: any) =>
  constructApiGenerator(
    api,
    'Traversal/SymptomReportAsync',
    getApiCall,
    getOnSuccess
  );
