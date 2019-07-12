import { call, put, delay } from 'redux-saga/effects'
import { flattenTraversalChat } from '../../../Helpers'
import * as actions from '../../../Actions'

export default (api) => function* traversalPrevious(action) {
    yield put(actions.traversalDirection(true))
    try {
        const json = yield call(api.previous, action.traversalId, action.algoId, action.nodeId, action.assetId)
        yield put(actions.previousTraversalQuestion(flattenTraversalChat(json)))
        let currentQuestion = document.getElementById("CurrentQuestion")
        if (currentQuestion)
            currentQuestion.scrollIntoView({block: "end"})
        // yield delay(500)
        yield put(actions.setChatMinHeight(0))
    } catch (error) {
        console.log("traversalPrevious error")
        console.log(error)
        alert("error")
    }
}