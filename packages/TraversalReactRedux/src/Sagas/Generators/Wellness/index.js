import { call, put } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default (api) => function* wellness(action) {
    if (!api.isConfigured) {
        console.warn("Health risk API is not configured.");
        return;
    }
    try {
        const wellness = yield call(api.wellness, action.traversalId, action.conclusions);
        yield put(actions.hraWellnessSet(wellness));
    } catch (error) {
        console.error("wellness error", error);
        alert("error");
    }
}
