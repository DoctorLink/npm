import { call, put } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default (api) => function* traversalSymptomReport(action) {
    try {
        const json = yield call(api.symptomReport, action.traversalId)
        yield put(actions.traversalConclusionSet({ 
            traversalId: action.traversalId,
            symptomReport: json.data })
        )
    } catch (error) {
        console.log("traversalSymptomReport error")
        console.log(error)
        alert("error")
    }
}
