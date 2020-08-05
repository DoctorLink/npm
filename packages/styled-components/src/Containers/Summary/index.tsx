import React from 'react';
import { useSelector } from 'react-redux';
import { Summary, useSummaryActions } from '../../ComponentModules';
import { RootState, SummaryState } from '@doctorlink/traversal-core';

export const SummaryConnected: React.FC = () => {
  const summary: SummaryState = useSelector(
    (state: RootState) => state.summary
  );
  const actions = useSummaryActions(summary);
  return <Summary summary={summary} actions={actions} />;
};
