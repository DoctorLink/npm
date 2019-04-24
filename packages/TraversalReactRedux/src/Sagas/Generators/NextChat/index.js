import { call, put } from 'redux-saga/effects'
import { flattenTraversalChat, createChatResponse } from '../../../Helpers'
import * as actions from '../../../Actions'

export default (api) => function* traversalNext(action) {
    yield put(actions.traversalDirection(false))
    try {
        const json = yield call(api.next, createChatResponse(action.traversal))
        yield put(actions.addTraversalQuestion(flattenTraversalChat(json)))
        // yield call(window.scroll, 0, 0)
    } catch (error) {
        console.log("traversalNext error")
        console.log(error)
        alert("error")
    }
}
