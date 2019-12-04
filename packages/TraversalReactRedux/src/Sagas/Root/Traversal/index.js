import { all } from 'redux-saga/effects'
import createTraversalClassicEffects from '../../Effects/TraversalClassic'
import createTraversalClassicSetEffects from '../../Effects/TraversalClassicSet'
import createSummaryEffects from '../../Effects/Summary'
import createSymptomAssessmentEffects from '../../Effects/SymptomAssessment'
import createHealthRiskAssessmentEffects from '../../Effects/HealthRiskAssessment'
import createHistoryPushEffects from '../../Effects/HistoryPush'
import createStartScrollToTopEffects from '../../Effects/StartScrollToTop'
import createProductsEffects from '../../Effects/Products'

export default (traversalApi, hraApi, history) => {
    let effects = [
        ...createTraversalClassicEffects(traversalApi),
        ...createTraversalClassicSetEffects(),
        ...createSummaryEffects(traversalApi),
        ...createSymptomAssessmentEffects(traversalApi),
        ...createHealthRiskAssessmentEffects(hraApi),
        createStartScrollToTopEffects(),
        ...createProductsEffects(traversalApi),
    ];
    if (history) {
        effects = [
            ...effects,
            ...createHistoryPushEffects(history)
        ]
    }
    return function* rootSaga() {
        yield all(effects)
    }
}