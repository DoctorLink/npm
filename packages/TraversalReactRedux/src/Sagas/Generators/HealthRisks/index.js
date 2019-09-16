import { call, put } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default (api) => function* healthRisks(action) {
    if (!api.isConfigured) {
        console.warn("Health risk API is not configured.");
        return;
    }
    try {
        const healthRisks = yield call(api.healthRisks, action.traversalId, action.ages, action.conclusions);
        yield put(actions.healthRisksSet(healthRisks));
    } catch (error) {
        console.log("healthRisks error")
        console.log(error)
        alert("error")
    }
}
