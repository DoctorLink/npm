import React from 'react';
import styled from 'styled-components';
import { HTMLMotionProps, motion } from 'framer-motion';

const PreviousAnswersContainer = styled(motion.div)`
  max-width: 440px;
  margin-left: auto;
  /* overflow: hidden; */
  margin-top: 22px;

  :after {
    content: '';
    clear: both;
    display: table;
  }
`;

const PreviousAnswersContent = styled.div`
  float: right;
`;

const ChangeAnswer = styled.div`
  font-size: 14px;
  text-align: right;
  margin-top: 10px;
  color: rgb(117, 117, 117);
  font-weight: bold;
  max-width: 440px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-left: auto;
`;

export interface ChatPreviousAnswersProps extends HTMLMotionProps<'div'> {
  jumpBack: () => void;
}

const ChatPreviousAnswers = React.forwardRef<
  HTMLDivElement,
  ChatPreviousAnswersProps
>(function ChatPreviousAnswers({ jumpBack, children, ...props }, ref) {
  return (
    <PreviousAnswersContainer ref={ref} {...props}>
      <PreviousAnswersContent>
        <div>{children}</div>
        <ChangeAnswer onClick={jumpBack}>Click to change</ChangeAnswer>
      </PreviousAnswersContent>
    </PreviousAnswersContainer>
  );
});

export default ChatPreviousAnswers;
