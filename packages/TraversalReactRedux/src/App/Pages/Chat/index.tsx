import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../Actions';
import { Chat, BuildChatActions } from '../../../ComponentModules';
import { ConclusionReportConnected as Conclusions } from '../../../Containers';

const ChatPage: React.FC<{ match: any }> = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const traversal = useSelector((state: any) => state.traversal);
  const loadTraversal = !traversal || traversal.traversalId !== id;
  const containerRef = useRef();

  useEffect(() => {
    if (loadTraversal) dispatch(actions.traversalContinue(id, containerRef));
  }, [dispatch, id, loadTraversal, traversal]);

  if (!traversal) {
    return null;
  }

  if (traversal.completed) {
    return (
      <Conclusions traversalId={id} assessmentType={traversal.assessmentType} />
    );
  }

  return (
    <Chat
      traversal={traversal}
      containerRef={containerRef}
      actions={BuildChatActions(traversal, containerRef)}
    />
  );
};

export default ChatPage;
