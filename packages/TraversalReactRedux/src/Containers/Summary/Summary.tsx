import React from 'react';
import { useSelector } from 'react-redux';
import { Summary, BuildSummaryActions } from '../../ComponentModules';

export const SummaryConnected: React.FC<{
  containerRef?: any;
}> = ({ containerRef }) => {
  const summary = useSelector((state: any) => state.summary);
  return (
    <Summary
      summary={summary}
      actions={BuildSummaryActions(summary, containerRef)}
    />
  );
};

export default SummaryConnected;
