import { call, put, delay } from 'redux-saga/effects'
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import createChatResponse from '../../../Helpers/createChatResponse';
import * as actions from '../../../Actions'

export default (api) => function* traversalNext(action) {
    yield put(actions.traversalDirection(false))
    try {
        const json = yield call(api.next, createChatResponse(action.traversal))
        console.log(json)
        yield put(actions.nextTraversalQuestion(flattenTraversalChat(json)))
        //yield delay(500)
        let currentQuestion = document.getElementById("CurrentQuestion")
        if (currentQuestion)
            currentQuestion.scrollIntoView()
    } catch (error) {
        console.log("traversalNext error")
        console.log(error)
        alert("error")
    }
}
