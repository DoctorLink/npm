import { createSelector } from 'reselect';
import {
  conclusionsSelector,
  nonSilentConclusionsSelector,
} from './conclusion';
import { parseNumberConclusion } from './parseNumberConclusion';
import { XmlRules } from './XmlRules';

export const healthAssessmentSelector = (state: { healthAssessment: any }) =>
  state.healthAssessment;

const healthAgeConclusionIdsSelector = createSelector(
  healthAssessmentSelector,
  (hra) => hra.healthAge.checkableConclusions
);

const riskConclusionIdsSelector = createSelector(
  healthAssessmentSelector,
  (hra) => hra.riskSummary.checkableConclusions
);

const wellnessConclusionIdsSelector = createSelector(
  healthAssessmentSelector,
  (hra) => hra.wellness.checkableConclusions
);

const createFilteredConclusionsSelector = (conclusionIdsSelector: any) =>
  createSelector(
    nonSilentConclusionsSelector,
    conclusionIdsSelector,
    (conclusions: any, ids: any) =>
      conclusions.filter((c: any) => ids.indexOf(c.assetId) > -1)
  );

export const healthAgeConclusionsSelector = createFilteredConclusionsSelector(
  healthAgeConclusionIdsSelector
);
export const riskConclusionsSelector = createFilteredConclusionsSelector(
  riskConclusionIdsSelector
);
export const wellnessConclusionsSelector = createFilteredConclusionsSelector(
  wellnessConclusionIdsSelector
);

export const additionalConclusionsSelector = createSelector(
  nonSilentConclusionsSelector,
  riskConclusionsSelector,
  wellnessConclusionsSelector,
  (conclusions, riskConclusions, wellnessConclusions) =>
    conclusions.filter(
      (c) =>
        riskConclusions.indexOf(c) === -1 &&
        wellnessConclusions.indexOf(c) === -1
    )
);

export const riskExplanationsSelector = createSelector(
  conclusionsSelector,
  (conclusions) =>
    conclusions.filter(
      (c: any) => c.category1 === 'Risk Models' && c.category2 === '2'
    )
);

export const wellnessExplanationsSelector = createSelector(
  conclusionsSelector,
  (conclusions) =>
    conclusions.filter(
      (c: any) => c.category1 === 'Wellbeing Models' && c.category2 === '2'
    )
);

export const myNumbersSelector = createSelector(
  conclusionsSelector,
  (conclusions) =>
    conclusions
      .filter((c: any) => c.category1 === 'My Numbers')
      .map(parseNumberConclusion)
);

export const actionsNowDueSelector = createSelector(
  conclusionsSelector,
  (conclusions) =>
    conclusions
      .filter((c: any) => c.subCategory === 'Actions Now Due')
      .map((c: any) => ({
        ...c,
        displayText: c.clinicalText.split('|')[1],
      }))
);

const healthAgeRulesSelector = createSelector(
  conclusionsSelector,
  (conclusions) => {
    const conclusion = conclusions.find(
      (c: any) => c.category1 === 'Health Age'
    );
    if (!conclusion) return null;
    return new XmlRules(conclusion.moreDetail);
  }
);

const healthAgeDiffSelector = createSelector(
  healthAssessmentSelector,
  (healthAssessment) => {
    const { age, healthAge } = healthAssessment.healthAge;
    return healthAge - age;
  }
);

export const healthAgeExplanationSelector = createSelector(
  healthAgeRulesSelector,
  healthAgeDiffSelector,
  (rules, healthAgeDiff) => rules && rules.getRuleValue(healthAgeDiff)
);
