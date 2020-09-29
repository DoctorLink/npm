import React from 'react';
import { useSelector } from 'react-redux';
import { Summary, useSummaryActions } from '../../ComponentModules';
import { RootState, SummaryState } from '@doctorlink/traversal-core';

export const SummaryConnected: React.FC<{ chat?: boolean }> = ({
  chat = false,
}) => {
  const summary: SummaryState = useSelector(
    (state: RootState) => state.summary
  );
  const actions = useSummaryActions(summary, chat);
  return <Summary summary={summary} actions={actions} />;
};
