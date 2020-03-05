import { useSelector, useDispatch } from 'react-redux';
// import { useHealthAge } from "./useHealthAge";
// import { useRiskSummary } from "./useRiskSummary";
// import { useWellness } from "./useWellness";
import {
  healthAssessmentSelector,
  myNumbersSelector,
  actionsNowDueSelector,
} from '../../../Selectors/healthAssessment';
import { conclusionsSelector } from '../../../Selectors/conclusion';
import * as actions from '../../../Actions';
import { useState, useEffect } from 'react';

export const useHRARoutes = (traversalId: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.healthAgeGet(traversalId, []));
    dispatch(actions.healthRisksGet(traversalId, [90], []));
    dispatch(actions.hraWellnessGet(traversalId, []));
  }, [dispatch, traversalId]);

  const { riskSummary, healthAge, wellness } = useSelector(
    healthAssessmentSelector
  );
  const conclusions = useSelector(conclusionsSelector);
  const myNumbers = useSelector(myNumbersSelector);
  const nowDue = useSelector(actionsNowDueSelector);
  const conclusionsLoaded = conclusions.length > 0;

  const routeDefs = [
    {
      path: 'health-age',
      defer: !healthAge.loaded,
      enabled: healthAge.healthAge > 0,
    },
    {
      path: 'risks',
      defer: !riskSummary.loaded,
      enabled: riskSummary.risks.length > 0,
    },
    {
      path: 'wellbeing',
      defer: !wellness.loaded,
      enabled: wellness.scores.length > 0,
    },
    {
      path: 'my-numbers',
      defer: !conclusionsLoaded,
      enabled: myNumbers.length > 0 || nowDue.length > 0,
    },
    { path: 'info', enabled: true },
  ];

  const [initialRoute, setInitialRoute] = useState<string>();

  // Find the initial route to redirect to, if known.
  // If we are waiting for data before we can make that call, use undefined for now.
  useEffect(() => {
    for (const route of routeDefs) {
      if (route.defer) break;
      if (route.enabled) {
        setInitialRoute(route.path);
        break;
      }
    }
  }, [routeDefs]);

  const routes = routeDefs
    .filter(route => route.enabled)
    .map(route => route.path);

  return { routes, initialRoute };
};
