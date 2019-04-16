import { call, put } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default (api) => function* traversalConclusion(action) {
    try {
        const json = yield call(api.conclusions, action.traversalId)
        yield put(actions.traversalConclusionSet({ 
            traversalId: action.traversalId,
            conclusions: json.data })
        )
    } catch (error) {
        console.log("traversalConclusion error")
        console.log(error)
        alert("error")
    }
}