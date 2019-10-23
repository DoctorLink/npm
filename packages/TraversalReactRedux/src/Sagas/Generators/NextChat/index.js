import { all, call, put, delay } from 'redux-saga/effects'
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import createChatResponse from '../../../Helpers/createChatResponse';
import * as actions from '../../../Actions'

export default (api) => function* traversalNext(action) {
    yield put(actions.setChatMinHeight(document.getElementById(action.traversal.traversalId).clientHeight))
    try {
        const [json] = yield all([
            call(api.next, createChatResponse(action.traversal)),
            delay(300)
        ])
        yield put(actions.traversalNextSet(flattenTraversalChat(json)))
    } catch (error) {
        console.log("traversalNext error")
        console.log(error)
        alert("error")
    }
}
