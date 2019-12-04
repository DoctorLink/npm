import { useSelector } from "react-redux";
import { useHealthAge } from "./useHealthAge";
import { useRiskSummary } from "./useRiskSummary";
import { useWellness } from "./useWellness";
import { myNumbersSelector, actionsNowDueSelector } from '../../../Selectors/healthAssessment';
import { conclusionsSelector } from '../../../Selectors/conclusion';
import { useState, useEffect } from "react";

export const useHRARoutes = (traversalId) => {
    const { loaded: healthAgeLoaded, healthAge } = useHealthAge(traversalId);
    const { loaded: risksLoaded, risks } = useRiskSummary(traversalId);
    const { loaded: wellnessLoaded, scores } = useWellness(traversalId);
    const conclusions = useSelector(conclusionsSelector);
    const myNumbers = useSelector(myNumbersSelector);
    const actions = useSelector(actionsNowDueSelector);
    const conclusionsLoaded = conclusions.length > 0;

    const routeDefs = [
        { path: "health-age", defer: !healthAgeLoaded, enabled: healthAge > 0 },
        { path: "risks", defer: !risksLoaded, enabled: risks.length > 0 },
        { path: "wellbeing", defer: !wellnessLoaded, enabled: scores.length > 0 },
        { path: "my-numbers", defer: !conclusionsLoaded, enabled: myNumbers.length > 0 || actions.length > 0 },
        { path: "info", enabled: true }
    ];

    const [initialRoute, setInitialRoute] = useState();

    // Find the initial route to redirect to, if known.
    // If we are waiting for data before we can make that call, use undefined for now.
    useEffect(() => {
        for (const route of routeDefs) {
            if (route.defer)
                break;
            if (route.enabled) {
                setInitialRoute(route.path);
                break;
            }
        }
    }, [...routeDefs.map(def => def.defer), ...routeDefs.map(def => def.enabled)])

    const routes = routeDefs.filter(route => route.enabled).map(route => route.path);

    return { routes, initialRoute };
}
