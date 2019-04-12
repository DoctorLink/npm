import { call, put } from 'redux-saga/effects'
import { normalizeTraversal } from '../../../Helpers'
import * as actions from '../../../Actions'

export default (api) => function* traversalPrevious(action) {
    yield put(actions.traversalDirection(true))
    try {
        const json = yield call(api.fetchTraversalPrevious, action.traversalId, action.algoId, action.nodeId)
        yield put(actions.setTraversal(normalizeTraversal(json)))
        yield call(window.scroll, 0, 0)
    } catch (error) {
        console.log("traversalPrevious error")
        console.log(error)
        alert("error")
    }
}