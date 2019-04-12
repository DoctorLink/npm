import { call, put } from 'redux-saga/effects'
import { normalizeTraversal, traversalResponse } from '../../../Helpers'
import * as actions from '../../../Actions'

export default (api) => function* traversalNext(action) {
    yield put(actions.traversalDirection(false))
    try {
        const json = yield call(api.fetchTraversalNext,  traversalResponse(action.traversal))
        yield put(actions.setTraversal(normalizeTraversal(json)))
        yield call(window.scroll, 0, 0)
    } catch (error) {
        console.log("traversalNext error")
        console.log(error)
        alert("error")
    }
}
