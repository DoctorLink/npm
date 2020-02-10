import { call, put } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { start: any },
  action: {
    algoId: unknown;
    release: unknown;
    lang: unknown;
    nodeId: unknown;
    injection: unknown;
    culture: unknown;
  }
) =>
  call(
    api.start,
    action.algoId,
    action.release,
    action.lang,
    action.nodeId,
    action.injection,
    action.culture
  );

const getOnSuccess = (response: { json: () => any }) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalStartSet(flattenTraversalNodeCollection(json)));
  };

export default (api: any) =>
  constructApiGenerator(api, 'Traversal/StartAsync', getApiCall, getOnSuccess);
