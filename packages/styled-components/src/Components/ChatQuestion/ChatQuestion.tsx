import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';
import { HTMLMotionProps, motion } from 'framer-motion';
import { TraversalError } from '@doctorlink/traversal-core';

const QuestionContent = styled.div`
  white-space: pre-line;
  max-width: 440px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: inherit;
  font-size: ${(p) => p.theme.chatQuestion.fontSize}px;
  line-height: ${(p) => p.theme.chatQuestion.lineHeight}px;
  font-weight: ${(p) => p.theme.chatQuestion.fontWeight};
  animation: 0s ease 0s 1 normal none running none;

  .e24subtext {
    font-size: ${(p) => p.theme.chatQuestion.subtext.fontSize}px;
    line-height: ${(p) => p.theme.chatQuestion.subtext.lineHeight}px;
    font-weight: ${(p) => p.theme.chatQuestion.subtext.fontWeight};
    font-style: ${(p) => p.theme.chatQuestion.subtext.fontStyle};
  }
`;

QuestionContent.defaultProps = {
  theme: defaultTheme,
};

interface QuestionWrapperProps {
  current: boolean;
}

const QuestionWrapper = styled(motion.div)<QuestionWrapperProps>`
  width: 100%;
  box-sizing: border-box;
  transition: width 300ms ease 0s;
  padding: ${(p) => p.theme.chatQuestion.padding}px;

  ${QuestionContent} {
    width: ${(p) => (p.current ? '100%' : 'auto')};
  }
`;

QuestionWrapper.defaultProps = {
  theme: defaultTheme,
};

const QuestionText = styled.span`
  flex: 1;
`;

const ErrorText = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: rgb(179, 0, 0);
`;

export interface ChatQuestionProps extends HTMLMotionProps<'div'> {
  displayText: string;
  error: TraversalError;
  current: boolean;
}

const ChatQuestion = React.forwardRef<HTMLDivElement, ChatQuestionProps>(
  function ChatQuestion(
    { displayText, error, current, children, ...props },
    ref
  ) {
    return (
      <QuestionWrapper current={current} ref={ref} {...props}>
        <QuestionContent>
          <QuestionText dangerouslySetInnerHTML={{ __html: displayText }} />
          {children}
        </QuestionContent>
        {error && <ErrorText>{error.text}</ErrorText>}
      </QuestionWrapper>
    );
  }
);

export default ChatQuestion;
