import { createSelector, } from "reselect";
import { conclusionsSelector, nonSilentConclusionsSelector } from "./conclusion";
import { parseNumberConclusion } from "./parseNumberConclusion";
import { XmlRules } from "./XmlRules";

export const healthAssessmentSelector = state => state.healthAssessment;

const conclusionIdsSelector = createSelector(
    healthAssessmentSelector,
    hra => hra.conclusionIds
);

export const riskConclusionsSelector = createSelector(
    nonSilentConclusionsSelector,
    conclusionIdsSelector,
    (conclusions, ids) => conclusions.filter(c => ids.riskConclusions.indexOf(c.assetId) > -1)
);

export const wellnessConclusionsSelector = createSelector(
    nonSilentConclusionsSelector,
    conclusionIdsSelector,
    (conclusions, ids) => conclusions.filter(c => ids.wellnessConclusions.indexOf(c.assetId) > -1)
);

export const additionalConclusionsSelector = createSelector(
    nonSilentConclusionsSelector,
    riskConclusionsSelector,
    wellnessConclusionsSelector,
    (conclusions, riskConclusions, wellnessConclusions) =>
        conclusions.filter(c => riskConclusions.indexOf(c) === -1 && wellnessConclusions.indexOf(c) === -1)
);

export const riskExplanationsSelector = createSelector(
    conclusionsSelector,
    conclusions => conclusions.filter(c => c.category1 === "Risk Models" && c.category2 === "2")
);

export const wellnessExplanationsSelector = createSelector(
    conclusionsSelector,
    conclusions => conclusions.filter(c => c.category1 === "Wellbeing Models" && c.category2 === "2")
);

export const myNumbersSelector = createSelector(
    conclusionsSelector,
    conclusions => conclusions.filter(c => c.category1 === "My Numbers").map(parseNumberConclusion)
);

const healthAgeRulesSelector = createSelector(
    conclusionsSelector,
    conclusions => {
        const conclusion = conclusions.find(c => c.category1 === "Health Age");
        if (!conclusion) return null;
        return new XmlRules(conclusion.moreDetail);
    }
);

const healthAgeDiffSelector = createSelector(
    healthAssessmentSelector,
    healthAssessment => {
        const { age, healthAge } = healthAssessment.healthAge;
        return healthAge - age;
    }
);

export const healthAgeExplanationSelector = createSelector(
    healthAgeRulesSelector,
    healthAgeDiffSelector,
    (rules, healthAgeDiff) => rules && rules.getRuleValue(healthAgeDiff)
);
