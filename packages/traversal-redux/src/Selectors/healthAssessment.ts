import { createSelector, Selector } from 'reselect';
import {
  conclusionsSelector,
  nonSilentConclusionsSelector,
  ConclusionsSelector,
} from './conclusion';
import { parseNumberConclusion } from './parseNumberConclusion';
import { XmlRules } from './XmlRules';
import {
  HealthAssessmentState,
  RootState,
  NumberConclusion,
} from '@doctorlink/traversal-core';

export const healthAssessmentSelector: Selector<
  RootState,
  HealthAssessmentState
> = (state: RootState) => state.healthAssessment;

const healthAgeConclusionIdsSelector: Selector<
  RootState,
  number[]
> = createSelector(
  healthAssessmentSelector,
  (hra) => hra.healthAge.checkableConclusions
);

const riskConclusionIdsSelector: Selector<RootState, number[]> = createSelector(
  healthAssessmentSelector,
  (hra) => hra.riskSummary.checkableConclusions
);

const wellnessConclusionIdsSelector: Selector<
  RootState,
  number[]
> = createSelector(
  healthAssessmentSelector,
  (hra) => hra.wellness.checkableConclusions
);

const allConclusionIdsSelector: Selector<
  RootState,
  number[]
> = createSelector(
  healthAgeConclusionIdsSelector,
  riskConclusionIdsSelector,
  wellnessConclusionIdsSelector,
  (healthConclusionIds, riskConclusionIds, wellnessConclusionIds) =>
    mergeArrays(healthConclusionIds, riskConclusionIds, wellnessConclusionIds)
);

const createFilteredConclusionsSelector = (
  conclusionIdsSelector: Selector<RootState, number[]>
): ConclusionsSelector =>
  createSelector(
    nonSilentConclusionsSelector,
    conclusionIdsSelector,
    (conclusions, ids) => conclusions.filter((c) => ids.indexOf(c.assetId) > -1)
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

export const allConclusionsSelector = createFilteredConclusionsSelector(
  allConclusionIdsSelector
);

export const additionalConclusionsSelector: ConclusionsSelector = createSelector(
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

export const riskExplanationsSelector: ConclusionsSelector = createSelector(
  conclusionsSelector,
  (conclusions) =>
    conclusions.filter(
      (c) => c.category1 === 'Risk Models' && c.category2 === '2'
    )
);

export const wellnessExplanationsSelector: ConclusionsSelector = createSelector(
  conclusionsSelector,
  (conclusions) =>
    conclusions.filter(
      (c) => c.category1 === 'Wellbeing Models' && c.category2 === '2'
    )
);

export const myNumbersSelector: Selector<
  RootState,
  NumberConclusion[]
> = createSelector(conclusionsSelector, (conclusions) =>
  conclusions
    .filter((c) => c.category1 === 'My Numbers')
    .map(parseNumberConclusion)
);

export const actionsNowDueSelector: ConclusionsSelector = createSelector(
  conclusionsSelector,
  (conclusions) =>
    conclusions
      .filter((c) => c.subCategory === 'Actions Now Due')
      .map((c) => ({
        ...c,
        displayText: c.clinicalText.split('|')[1],
      }))
);

const healthAgeRulesSelector: Selector<
  RootState,
  XmlRules | null
> = createSelector(conclusionsSelector, (conclusions) => {
  const conclusion = conclusions.find((c) => c.category1 === 'Health Age');
  if (!conclusion) return null;
  return new XmlRules(conclusion.moreDetail);
});

const healthAgeDiffSelector: Selector<RootState, number> = createSelector(
  healthAssessmentSelector,
  (healthAssessment) => {
    const { age, healthAge } = healthAssessment.healthAge;
    return healthAge - age;
  }
);

export const healthAgeExplanationSelector: Selector<
  RootState,
  string | null
> = createSelector(
  healthAgeRulesSelector,
  healthAgeDiffSelector,
  (rules, healthAgeDiff) => rules && rules.getRuleValue(healthAgeDiff)
);

export function mergeArrays<T>(...arrays: T[][]): T[] {
  let jointArray: T[] = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  return Array.from(new Set([...jointArray]));
}
