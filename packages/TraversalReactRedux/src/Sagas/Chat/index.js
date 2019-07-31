import { takeLatest } from 'redux-saga/effects'
import * as actions from '../../Actions'
import * as generators from '../Generators'

export default (api, stateSelector) => function* rootSaga() {
    yield takeLatest(actions.TRAVERSAL_START, generators.createStartChatGenerator(api))
    yield takeLatest(actions.TRAVERSAL_CONTINUE, generators.createContinueChatGenerator(api))
    yield takeLatest(actions.TRAVERSAL_NEXT, generators.createNextChatGenerator(api))
    yield takeLatest(actions.TRAVERSAL_PREVIOUS, generators.createPreviousChatGenerator(api))
    yield takeLatest(actions.TRAVERSAL_SUMMARY_GET, generators.createSummaryGenerator(api))
    yield takeLatest(actions.TRAVERSAL_CONCLUSION_GET, generators.createConclusionsGenerator(api))
    yield takeLatest(actions.TRAVERSAL_SYMPTOM_REPORT_GET, generators.createSymptomReportGenerator(api))
    yield takeLatest(actions.TRAVERSAL_AUTO, generators.createAutoForwardChatGenerator(stateSelector))
}