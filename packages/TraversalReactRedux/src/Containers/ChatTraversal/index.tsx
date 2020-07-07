import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ChatTraversal, useChatActions } from '../../ComponentModules';
import { ChatTraversalRootState } from '../../Models';

export const ChatTraversalConnected: React.FC<{}> = () => {
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
