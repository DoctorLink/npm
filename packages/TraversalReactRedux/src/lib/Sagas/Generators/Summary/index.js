import { call, put } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default (api) => function* traversalSummary(action) {
    try {
        const json = yield call(api.fetchTraversalSummary, action.traversalId)
        yield put(actions.traversalSummarySet({ 
            traversalId: action.traversalId,
            questions: json.data })
        )
    } catch (error) {
        console.log("traversalSummary error")
        console.log(error)
        alert("error")
    }
}