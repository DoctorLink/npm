import { takeLatest } from 'redux-saga/effects'
import * as actions from '../Actions'
import * as generators from './Generators'

export default (api) => function* rootSaga() {
    yield takeLatest(actions.TRAVERSAL_START, generators.Start(api))
    yield takeLatest(actions.TRAVERSAL_CONTINUE, generators.TRAVERSAL_CONTINUE(api))
    yield takeLatest(actions.TRAVERSAL_NEXT, generators.Next(api))
    yield takeLatest(actions.TRAVERSAL_PREVIOUS, generators.Previous(api))
    yield takeLatest(actions.TRAVERSAL_SUMMARY_GET, generators.Summary(api))
    yield takeLatest(actions.TRAVERSAL_CONCLUSION_GET, generators.Conclusions(api))
    yield takeLatest(actions.TRAVERSAL_SYMPTOM_REPORT_GET, generators.SymptomReport(api))
    yield takeLatest(actions.TOGGLE_RADIO, generators.AutoForward())
}