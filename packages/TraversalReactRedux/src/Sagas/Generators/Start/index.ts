import { call, put } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';
import { TraversalStartProduct } from 'Models/Traversal';

const getApiCall = (
  api: { start: any },
  action: TraversalStartProduct
) =>
  call(
    api.start,
    action.productId,
    action.language,
    action.release,
    action.algoId,
    action.nodeId,
    action.injection,
    action.memberReference
  );

const getOnSuccess = (response: { json: () => any }) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalStartSet(flattenTraversalNodeCollection(json)));
  };

export default (api: any) =>
  constructApiGenerator(api, 'api/v2/Traversal/StartAsync', getApiCall, getOnSuccess);
