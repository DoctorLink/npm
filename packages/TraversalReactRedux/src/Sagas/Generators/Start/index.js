import { call, put } from 'redux-saga/effects'
import { normalizeTraversal } from '../../../Helpers'
import * as actions from '../../../Actions'

export default (api) => function* traversalStart(action) {
    yield put(actions.traversalDirection(false))
    try {
        const json = yield call(api.start, action.algoId, action.nodeId)
        yield put(actions.setTraversal(normalizeTraversal(json)))
        yield call(action.history.push, "/traversal/" + json.data.traversalId)
        yield call(window.scroll, 0, 0)
    } catch (error) {
        console.log("traversalStart error")
        console.log(error)
        alert("error")
    }
}