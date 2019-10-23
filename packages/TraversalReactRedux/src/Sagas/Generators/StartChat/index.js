import { call, put } from 'redux-saga/effects'
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import * as actions from '../../../Actions'

export default (api) => function* traversalStart(action) {
    try {
        const json = yield call(api.start, action.algoId, action.release, action.lang, action.nodeId, action.injection)
        yield put(actions.traversalStartSet(flattenTraversalChat(json)))
    } catch (error) {
        console.log("traversalStart error")
        console.log(error)
        alert("error")
    }
}