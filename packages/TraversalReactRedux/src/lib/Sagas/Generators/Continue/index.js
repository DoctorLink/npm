import { call, put } from 'redux-saga/effects'
import { normalizeTraversal } from '../Helpers'
import * as actions from '../../../Actions'

export default (api) => function* traversalContinue(action) {
    yield put(actions.traversalDirection(false))
    try {
        const json = yield call(api.fetchTraversalContinue, action.traversalId)
        yield put(actions.setTraversal(normalizeTraversal(json)))
    } catch (error) {
        console.log("traversalContinue error")
        console.log(error)
        alert("error")
    }
}