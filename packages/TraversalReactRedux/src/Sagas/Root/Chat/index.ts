import { all } from 'redux-saga/effects';
import createTraversalChatEffects from '../../Effects/TraversalChat';
import createSummaryEffects from '../../Effects/Summary';
import createSymptomAssessmentEffects from '../../Effects/SymptomAssessment';
import createHealthRiskAssessmentEffects from '../../Effects/HealthRiskAssessment';
import createHistoryPushEffects from '../../Effects/HistoryPush';
import createStartScrollToTopEffects from '../../Effects/StartScrollToTop';
import createWebApiEffects from '../../Effects/WebApi';
import createProductsEffects from '../../Effects/Products';

export default (traversalApi: any, hraApi: any, history: any) => {
  let effects = [
    ...createTraversalChatEffects(traversalApi),
    ...createSummaryEffects(traversalApi),
    ...createSymptomAssessmentEffects(traversalApi),
    ...createHealthRiskAssessmentEffects(hraApi),
    ...createStartScrollToTopEffects(),
    ...createWebApiEffects(),
    ...createProductsEffects(traversalApi),
  ];
  if (history) {
    effects = [...effects, ...createHistoryPushEffects(history)];
  }
  return function* rootSaga() {
    yield all(effects);
  };
};