import { all } from 'redux-saga/effects'
import createTraversalChatEffects from '../../Effects/TraversalChat'
import createSummaryEffects from '../../Effects/Summary'
import createSymptomAssessmentEffects from '../../Effects/SymptomAssessment'
import createHealhRiskAssessmentEffects from '../../Effects/HealhRiskAssessment'

export default (traversalApi, hraApi) => function* rootSaga() {
    yield all([
        ...createTraversalChatEffects(traversalApi),
        ...createSummaryEffects(traversalApi),
        ...createSymptomAssessmentEffects(traversalApi),
        ...createHealhRiskAssessmentEffects(hraApi),
    ])
}