import { all, call, put, delay } from 'redux-saga/effects';
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import createChatResponse from '../../../Helpers/createChatResponse';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api, action) => call(function* apic() {
    const [ apiResult ] = yield all([
        call(api.next, createChatResponse(action.traversal)),
        delay(300)
    ]);
    return apiResult;
})

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.traversalNextSet(flattenTraversalChat(json)));
}

const getOnStart = () => function* apiCall() {
    yield put(actions.setChatMinHeight(document.getElementById("Traversal").clientHeight));
}

export default (api) => constructApiGenerator(api, "Chat/NextAsync", getApiCall, getOnSuccess, getOnStart);