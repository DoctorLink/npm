import { call, put, delay } from 'redux-saga/effects'
import flattenTraversalChat from '../../../Helpers/flattenTraversalChat';
import * as actions from '../../../Actions'

export default (api) => function* traversalPrevious(action) {
    try {
        const json = yield call(api.previous, action.traversalId, action.algoId, action.nodeId, action.assetId)
        yield put(actions.traversalPreviousSet(flattenTraversalChat(json)))
    } catch (error) {
        console.log("traversalPrevious error")
        console.log(error)
        alert("error")
    }
}