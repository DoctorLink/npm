import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Traversal, useTraversalActions } from '../../ComponentModules';
import { TraversalRootState } from '@doctorlink/traversal-core';

export const TraversalConnected: React.FC = () => {
  const ref = useRef();
  const traversal = useSelector((state: TraversalRootState) => state.traversal);
  const actions = useTraversalActions(traversal);

  if (!traversal || !traversal.traversalId) {
    return null;
  }

  return (
    <Traversal traversal={traversal} containerRef={ref} actions={actions} />
  );
};
