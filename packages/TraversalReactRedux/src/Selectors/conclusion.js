import { createSelector } from "reselect";

export const conclusionsSelector = state => state.conclusion && state.conclusion.conclusions || [];

export const nonSilentConclusionsSelector = createSelector(
    conclusionsSelector,
    conclusions => conclusions.filter(c => !c.silent)
);
