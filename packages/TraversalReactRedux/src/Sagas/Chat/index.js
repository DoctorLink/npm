import { takeLatest } from 'redux-saga/effects'
import * as actions from '../../Actions'
import * as generators from '../Generators'

export default (traversalApi, hraApi) => function* rootSaga() {
    yield takeLatest(actions.TRAVERSAL_START, generators.createStartChatGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_CONTINUE, generators.createContinueChatGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_NEXT, generators.createNextChatGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_PREVIOUS, generators.createPreviousChatGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_SUMMARY_GET, generators.createSummaryGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_CONCLUSION_GET, generators.createConclusionsGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_SYMPTOM_REPORT_GET, generators.createSymptomReportGenerator(traversalApi))
    yield takeLatest(actions.HEALTH_RISKS_GET, generators.createHealthRisksGenerator(hraApi))
    yield takeLatest(actions.HRA_CONCLUSIONS_GET, generators.createHraConclusionsGenerator(hraApi))
    yield takeLatest(actions.HRA_WELLNESS_GET, generators.createWellnessGenerator(hraApi))
    yield takeLatest(actions.TRAVERSAL_AUTO, generators.createAutoForwardChatGenerator())
}