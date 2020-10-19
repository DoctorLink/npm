import React, { RefObject } from 'react';
import { defaultChatActions, defaultChatComponents } from './defaults';
import { useChatScroll } from '../../Hooks/useChatScroll';
import { ChatTraversalState } from '@doctorlink/traversal-core';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import { ChatComponents } from './ChatComponents';
import { ChatStep } from './ChatStep';

interface ChatTraversalProps {
  traversal: ChatTraversalState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerRef?: RefObject<any>;
  actions?: ChatTraversalCallbacks;
  components?: Partial<ChatComponents>;
}

export const ChatTraversal: React.FC<ChatTraversalProps> = ({
  traversal,
  containerRef,
  actions = defaultChatActions,
  components = defaultChatComponents,
}) => {
  const comps = { ...defaultChatComponents, ...components };
  const { Container, Step, Loader } = comps;
  const { questionIds, loading } = traversal;
  const minHeight = useChatScroll(loading, questionIds.length, containerRef);
  return (
    <Container id="Traversal" minHeight={minHeight} ref={containerRef}>
      {questionIds.map((questionId) => (
        <ChatStep
          key={questionId}
          questionId={questionId}
          traversal={traversal}
          actions={actions}
          components={comps}
        />
      ))}
      {loading && (
        <Step>
          <Loader />
        </Step>
      )}
    </Container>
  );
};
