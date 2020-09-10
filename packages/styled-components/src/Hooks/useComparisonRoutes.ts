import { useSelector, useDispatch } from 'react-redux';
import {
  comparisonReportSelector,
  hraComparisonReportGetRequest,
} from '@doctorlink/traversal-redux';
import { HealthComparisonModel } from '@doctorlink/traversal-core';
import { useState, useEffect } from 'react';

export type ComparisonRouteName = 'risks' | 'wellbeing' | 'my-numbers';

interface RouteDefinition {
  path: ComparisonRouteName;
  enabled: boolean;
  defer?: boolean;
}

export interface ComparisonRoutes {
  routes: ComparisonRouteName[];
  initialRoute: ComparisonRouteName | undefined;
  allLoaded: boolean;
}

export const useComparisonRoutes = (
  traversalId: string,
  pastTraversalId: string,
  riskAtAge: number
): ComparisonRoutes => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      hraComparisonReportGetRequest(traversalId, pastTraversalId, riskAtAge)
    );
  }, [dispatch, traversalId, pastTraversalId, riskAtAge]);

  const comparisonReport = useSelector(
    comparisonReportSelector
  ) as HealthComparisonModel;
  const reportLoaded = comparisonReport.loaded ?? false;

  const routeDefs: RouteDefinition[] = [
    {
      path: 'risks',
      defer: !reportLoaded,
      enabled: reportLoaded,
    },
    {
      path: 'wellbeing',
      defer: !reportLoaded,
      enabled: reportLoaded,
    },
    {
      path: 'my-numbers',
      defer: !reportLoaded,
      enabled: reportLoaded,
    },
  ];

  const [initialRoute, setInitialRoute] = useState<ComparisonRouteName>();

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
