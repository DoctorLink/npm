import { call, put } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api: { continue: any }, action: { traversalId: unknown }) =>
  call(api.continue, action.traversalId);

const getOnSuccess = (response: { json: () => any }) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(
      actions.traversalContinueSet(flattenTraversalNodeCollection(json))
    );
  };

export default (api: any) =>
  constructApiGenerator(
    api,
    'api/v2/Traversal/ContinueAsync',
    getApiCall,
    getOnSuccess
  );
