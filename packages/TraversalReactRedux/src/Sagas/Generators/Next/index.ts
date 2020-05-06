import { call, put, all } from 'redux-saga/effects';
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';
import addScrollEffect from '../addScrollEffect';

const getApiCall = (
  api: { next: any },
  action: { traversalResponse: unknown }
) =>
  call(function* apic() {
    const effects = yield addScrollEffect(
      [call(api.next, action.traversalResponse)],
      action
    );
    const [apiResult] = yield all(effects);
    return apiResult;
  });

const getOnSuccess = (response: { json: () => any }) =>
  function* onSuccess() {
    const json = yield response.json();
    console.log(json);
    yield put(actions.traversalNextSet(flattenTraversalNodeCollection(json)));
  };

export default (api: any) =>
  constructApiGenerator(
    api,
    'api/v2/Traversal/NextAsync',
    getApiCall,
    getOnSuccess
  );
