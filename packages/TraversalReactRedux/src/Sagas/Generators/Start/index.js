import { call, put } from 'redux-saga/effects'
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import * as actions from '../../../Actions'

export default (api) => function* traversalStart(action) {
    yield put(actions.traversalDirection(false))
    try {
        const json = yield call(api.start, action.algoId, action.release, action.lang, action.nodeId, action.injection, action.culture)
        yield put(actions.traversalStartSet(flattenTraversalNodeCollection(json)))
    } catch (error) {
        console.log("traversalStart error")
        console.log(error)
        alert("error")
    }
}