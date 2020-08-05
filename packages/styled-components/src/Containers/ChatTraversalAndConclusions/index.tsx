import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ConclusionReportConnected as Conclusions } from '../ConclusionReport';
import { ChatTraversal, useChatActions } from '../../ComponentModules';
import { ChatTraversalRootState } from '@doctorlink/traversal-core';

export const ChatTraversalAndConclusionsConnected: React.FC = () => {
  const ref = useRef();
  const traversal = useSelector(
    (state: ChatTraversalRootState) => state.traversal
  );
  const actions = useChatActions(traversal);

  if (!traversal || !traversal.traversalId) {
    return null;
  }

  if (traversal.completed) {
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
      <ChatTraversal
        traversal={traversal}
        containerRef={ref}
        actions={actions}
      />
    </>
  );
};
