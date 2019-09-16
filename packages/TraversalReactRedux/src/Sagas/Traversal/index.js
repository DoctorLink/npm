import { takeLatest } from 'redux-saga/effects'
import * as actions from '../../Actions'
import * as generators from '../Generators'

export default (traversalApi, hraApi) => function* rootSaga() {
    yield takeLatest(actions.TRAVERSAL_START, generators.createStartGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_CONTINUE, generators.createContinueGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_NEXT, generators.createNextGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_PREVIOUS, generators.createPreviousGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_SUMMARY_GET, generators.createSummaryGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_CONCLUSION_GET, generators.createConclusionsGenerator(traversalApi))
    yield takeLatest(actions.TRAVERSAL_SYMPTOM_REPORT_GET, generators.createSymptomReportGenerator(traversalApi))
    yield takeLatest(actions.HEALTH_RISKS_GET, generators.createHealthRisksGenerator(hraApi))
    yield takeLatest(actions.HRA_CONCLUSIONS_GET, generators.createHraConclusionsGenerator(hraApi))
    yield takeLatest(actions.TOGGLE_RADIO, generators.createAutoForwardGenerator())
}