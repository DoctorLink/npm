import { all, call, put, delay } from 'redux-saga/effects';
import {
  flattenTraversalChat,
  scrollLastChildIntoView,
} from '../../../Helpers';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (
  api: { next: any },
  action: { traversalResponse: unknown }
) =>
  call(function* apic() {
    const [apiResult] = yield all([
      call(api.next, action.traversalResponse),
      delay(300),
    ]);
    return apiResult;
  });

const getOnSuccess = (
  response: { json: () => any },
  action: { containerRef: any }
) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalNextSet(flattenTraversalChat(json)));
    scrollLastChildIntoView(action.containerRef);
  };

export default (api: any) =>
  constructApiGenerator(api, 'Chat/NextAsync', getApiCall, getOnSuccess);
