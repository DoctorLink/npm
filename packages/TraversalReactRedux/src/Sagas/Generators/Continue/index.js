import { call, put } from 'redux-saga/effects'
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection'
import * as actions from '../../../Actions'

export default (api) => function* traversalContinue(action) {
    yield put(actions.traversalDirection(false))
    try {
        const json = yield call(api.continue, action.traversalId)
        yield put(actions.traversalContinueSet(flattenTraversalNodeCollection(json)))
    } catch (error) {
        console.log("traversalContinue error")
        console.log(error)
        alert("error")
    }
}