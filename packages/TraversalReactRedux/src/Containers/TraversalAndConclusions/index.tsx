import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ConclusionReportConnected as Conclusions } from '../ConclusionReport';
import { SummaryConnected as Summary } from '../Summary';
import { Traversal, useTraversalActions } from '../../ComponentModules';
import { TraversalRootState } from '../../Models';

export const TraversalAndConclusionsConnected: React.FC<{}> = () => {
  const ref = useRef();
  const traversal = useSelector((state: TraversalRootState) => state.traversal);
  const actions = useTraversalActions(traversal);

  if (!traversal || !traversal.traversalId) {
    return null;
  }

  if (traversal.nodeIds.length === 0) {
    return (
      <Conclusions
        traversalId={traversal.traversalId}
        assessmentType={traversal.assessmentType}
        noRouter={true}
      />
    );
  }

  return (
    <>
      <Traversal traversal={traversal} containerRef={ref} actions={actions} />
      <Summary />
    </>
  );
};
