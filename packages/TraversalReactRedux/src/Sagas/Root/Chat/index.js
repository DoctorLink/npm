import { all } from 'redux-saga/effects'
import createTraversalChatEffects from '../../Effects/TraversalChat'
import createTraversalChatSetEffects from '../../Effects/TraversalChatSet'
import createSummaryEffects from '../../Effects/Summary'
import createSymptomAssessmentEffects from '../../Effects/SymptomAssessment'
import createHealthRiskAssessmentEffects from '../../Effects/HealthRiskAssessment'
import createHistoryPushEffects from '../../Effects/HistoryPush'
import createStartScrollToTopEffects from '../../Effects/StartScrollToTop'
import createWebApiEffects from '../../Effects/WebApi'
import createProductsEffects from '../../Effects/Products'

export default (traversalApi, hraApi, history) => {
    let effects = [
        ...createTraversalChatEffects(traversalApi),
        ...createTraversalChatSetEffects(),
        ...createSummaryEffects(traversalApi),
        ...createSymptomAssessmentEffects(traversalApi),
        ...createHealthRiskAssessmentEffects(hraApi),
        ...createStartScrollToTopEffects(),
        ...createWebApiEffects(),
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