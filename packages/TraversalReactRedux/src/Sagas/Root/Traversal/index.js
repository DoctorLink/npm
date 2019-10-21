import { all } from 'redux-saga/effects'
import createTraversalClassicEffects from '../../Effects/TraversalClassic'
import createSummaryEffects from '../../Effects/Summary'
import createSymptomAssessmentEffects from '../../Effects/SymptomAssessment'
import createHealhRiskAssessmentEffects from '../../Effects/HealhRiskAssessment'

export default (traversalApi, hraApi) => function* rootSaga() {
    yield all([
        ...createTraversalClassicEffects(traversalApi),
        ...createSummaryEffects(traversalApi),
        ...createSymptomAssessmentEffects(traversalApi),
        ...createHealhRiskAssessmentEffects(hraApi),
    ])
}