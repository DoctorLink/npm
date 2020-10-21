import React from 'react';
import styled from 'styled-components';
import { HTMLMotionProps, motion } from 'framer-motion';
import EditAnswerButton from '../EditAnswerButton';

const PreviousAnswersContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export interface ChatPreviousAnswersProps extends HTMLMotionProps<'div'> {
  jumpBack: () => void;
}

const ChatPreviousAnswers = React.forwardRef<
  HTMLDivElement,
  ChatPreviousAnswersProps
>(function ChatPreviousAnswers({ jumpBack, children, ...props }, ref) {
  return (
    <motion.div ref={ref} {...props}>
      <PreviousAnswersContent>
        <div>{children}</div>
        <EditAnswerButton onClick={jumpBack} />
      </PreviousAnswersContent>
    </motion.div>
  );
});

export default ChatPreviousAnswers;
