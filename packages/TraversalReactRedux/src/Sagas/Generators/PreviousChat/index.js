import { call, put } from 'redux-saga/effects'
import { flattenTraversalChat } from '../../../Helpers'
import * as actions from '../../../Actions'

export default (api) => function* traversalPrevious(action) {
    yield put(actions.traversalDirection(true))
    try {
        const json = yield call(api.previous, action.traversalId, action.algoId, action.nodeId, action.assetId)
        yield put(actions.previousTraversalQuestion(flattenTraversalChat(json)))
        // yield call(window.scroll, 0, 0)
    } catch (error) {
        console.log("traversalPrevious error")
        console.log(error)
        alert("error")
    }
}