import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ChatTraversalRootState } from '@doctorlink/traversal-core';
import { ChatTraversal, useChatActions } from '../../ComponentModules';

export const ChatTraversalConnected: React.FC = () => {
  const ref = useRef();
  const traversal = useSelector(
    (state: ChatTraversalRootState) => state.traversal
  );
  const actions = useChatActions(traversal);

  if (!traversal || !traversal.traversalId) {
    return null;
  }

  return (
    <ChatTraversal traversal={traversal} containerRef={ref} actions={actions} />
  );
};
