import { call, put } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default (api) => function* healthRisks() {
    if (!api.isConfigured) {
        console.warn("Health risk API is not configured.");
        return;
    }
    try {
        const conclusionIds = yield call(api.conclusionIds);
        yield put(actions.hraConclusionsSet(conclusionIds));
    } catch (error) {
        console.error("Error getting HRA conclusions", error)
    }
}
