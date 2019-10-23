import { all } from 'redux-saga/effects'
import createTraversalChatEffects from '../../Effects/TraversalChat'
import createTraversalChatSetEffects from '../../Effects/TraversalChatSet'
import createSummaryEffects from '../../Effects/Summary'
import createSymptomAssessmentEffects from '../../Effects/SymptomAssessment'
import createHealhRiskAssessmentEffects from '../../Effects/HealhRiskAssessment'
import createHistoryPushEffects from '../../Effects/HistoryPush'

export default (traversalApi, hraApi, history) => {
    let effects = [
        ...createTraversalChatEffects(traversalApi),
        ...createTraversalChatSetEffects(),
        ...createSummaryEffects(traversalApi),
        ...createSymptomAssessmentEffects(traversalApi),
        ...createHealhRiskAssessmentEffects(hraApi),
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