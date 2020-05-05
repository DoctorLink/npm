import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { conclusions: any },
  action: { traversalId: unknown }
) => call(api.conclusions, action.traversalId);

const getOnSuccess = (
  response: { json: () => any },
  action: { traversalId: any }
) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(
      actions.traversalConclusionSet({
        traversalId: action.traversalId,
        conclusions: json.data,
      })
    );
  };

export default (api: any) =>
  constructApiGenerator(
    api,
    'api/v2/Traversal/ConclusionAsync',
    getApiCall,
    getOnSuccess
  );
