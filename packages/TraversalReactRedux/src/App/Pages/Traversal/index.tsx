import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../Actions';
import { Traversal, BuildTraversalActions } from '../../../ComponentModules';
import {
  ConclusionReportConnected as Conclusions,
  SummaryConnected as Summary,
} from '../../../Containers';

const TraversalPage: React.FC<{ match: any }> = ({ match }) => {
  const containerRef = useRef<any>();
  const dispatch = useDispatch();
  const traversal = useSelector((state: any) => state.traversal);
  const labels = useSelector((state: any) => state.labels.traversal);

  const { id } = match.params;
  const loadTraversal = !traversal || traversal.traversalId !== id;

  useEffect(() => {
    if (loadTraversal) dispatch(actions.traversalContinue(id));
  }, [dispatch, id, loadTraversal]);

  const traversalActions = BuildTraversalActions(traversal, containerRef);

  if (loadTraversal) {
    return null;
  }

  if (traversal.nodeIds.length === 0) {
    return (
      <Conclusions traversalId={id} assessmentType={traversal.assessmentType} />
    );
  }

  return (
    <>
      <Traversal
        traversal={traversal}
        containerRef={containerRef}
        labels={labels}
        actions={traversalActions}
      />
      <Summary containerRef={containerRef} />
    </>
  );
};

export default TraversalPage;
