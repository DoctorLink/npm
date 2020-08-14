import { createSelector, Selector } from 'reselect';
import { RootState, Conclusion } from '@doctorlink/traversal-core';

export type ConclusionsSelector = Selector<RootState, Conclusion[]>;

export const conclusionsSelector: ConclusionsSelector = (state) =>
  (state.conclusion && state.conclusion.conclusions) || [];

export const nonSilentConclusionsSelector = createSelector(
  conclusionsSelector,
  (conclusions) => conclusions.filter((c) => !c.silent)
);
