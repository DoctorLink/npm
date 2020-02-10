import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api: { summary: any }, action: { traversalId: unknown }) =>
  call(api.summary, action.traversalId);

const getOnSuccess = (
  response: { json: () => any },
  action: { traversalId: any }
) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(
      actions.traversalSummarySet({
        traversalId: action.traversalId,
        questions: json.data,
      })
    );
  };

export default (api: any) =>
  constructApiGenerator(
    api,
    'Traversal/SummaryAsync',
    getApiCall,
    getOnSuccess
  );
