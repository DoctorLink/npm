import { all } from 'redux-saga/effects';
import createTraversalClassicEffects from '../../Effects/TraversalClassic';
import createSummaryEffects from '../../Effects/Summary';
import createSymptomAssessmentEffects from '../../Effects/SymptomAssessment';
import createHealthRiskAssessmentEffects from '../../Effects/HealthRiskAssessment';
import createHistoryPushEffects from '../../Effects/HistoryPush';
import createStartScrollToTopEffects from '../../Effects/StartScrollToTop';
import createProductsEffects from '../../Effects/Products';
import createWebApiEffects from '../../Effects/WebApi';

export default (traversalApi: any, hraApi: any, history: any) => {
  let effects = [
    ...createTraversalClassicEffects(traversalApi),
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
