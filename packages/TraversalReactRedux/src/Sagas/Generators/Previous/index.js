import { call, put } from 'redux-saga/effects'
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import * as actions from '../../../Actions'

export default (api) => function* traversalPrevious(action) {
    yield put(actions.traversalDirection(true))
    try {
        const json = yield call(api.previous, action.traversalId, action.algoId, action.nodeId)
        yield put(actions.traversalPreviousSet(flattenTraversalNodeCollection(json)))
    } catch (error) {
        console.log("traversalPrevious error")
        console.log(error)
        alert("error")
    }
}