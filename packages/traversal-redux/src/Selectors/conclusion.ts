import { createSelector } from 'reselect';

export const conclusionsSelector = (state: {
  conclusion: { conclusions: any };
}) => (state.conclusion && state.conclusion.conclusions) || [];

export const nonSilentConclusionsSelector = createSelector(
  conclusionsSelector,
  (conclusions: any[]) => conclusions.filter((c: { silent: any }) => !c.silent)
);
