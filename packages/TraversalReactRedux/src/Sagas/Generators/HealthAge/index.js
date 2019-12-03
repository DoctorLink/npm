import { call, put } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default (api) => function* healthRisks(action) {
    if (!api.isConfigured) {
        console.warn("Health risk API is not configured.");
        return;
    }
    try {
        const { age, healthAge, minimumHealthAge } = yield call(api.healthRisks, action.traversalId, [], action.conclusions);
        yield put(actions.healthAgeSet({ age, healthAge, minimumHealthAge }));
    } catch (error) {
        console.error("Error getting health age", error);
        alert("error");
    }
}
