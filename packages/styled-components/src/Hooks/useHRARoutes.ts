import { useSelector, useDispatch } from 'react-redux';
import {
  healthAssessmentSelector,
  myNumbersSelector,
  actionsNowDueSelector,
  conclusionsSelector,
  healthAgeGetRequest,
  healthRisksGetRequest,
  wellnessGetRequest,
} from '@doctorlink/traversal-redux';
import { useState, useEffect } from 'react';

export type HraRouteName =
  | 'health-age'
  | 'risks'
  | 'wellbeing'
  | 'my-numbers'
  | 'info'
  | 'comparison-report';

interface RouteDefinition {
  path: HraRouteName;
  enabled: boolean;
  defer?: boolean;
}

export interface HraRoutes {
  routes: HraRouteName[];
  initialRoute: HraRouteName | undefined;
  allLoaded: boolean;
}

export const useHRARoutes = (traversalId: string): HraRoutes => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(healthAgeGetRequest(traversalId, []));
    dispatch(healthRisksGetRequest(traversalId, [90], []));
    dispatch(wellnessGetRequest(traversalId, []));
  }, [dispatch, traversalId]);

  const { riskSummary, healthAge, wellness } = useSelector(
    healthAssessmentSelector
  );
  const conclusions = useSelector(conclusionsSelector);
  const myNumbers = useSelector(myNumbersSelector);
  const nowDue = useSelector(actionsNowDueSelector);
  const conclusionsLoaded = conclusions.length > 0;

  const routeDefs: RouteDefinition[] = [
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

  const [initialRoute, setInitialRoute] = useState<HraRouteName>();

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
    .filter((route) => route.enabled)
    .map((route) => route.path);

  const allLoaded = routeDefs.findIndex((def) => def.defer) === -1;

  return { routes, initialRoute, allLoaded };
};
