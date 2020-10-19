import React from 'react';
import ChatForm, { ChatFormProps } from '../../Components/ChatForm';
import ChatQuestion, { ChatQuestionProps } from '../../Components/ChatQuestion';
import ChatPreviousAnswers, {
  ChatPreviousAnswersProps,
} from '../../Components/ChatPreviousAnswers';

const transition = {
  duration: 0.3,
};

export const Question: React.FC<ChatQuestionProps> = ({
  children,
  ...props
}) => (
  <ChatQuestion
    initial={{
      opacity: 0,
      x: '-100%',
    }}
    animate={{
      opacity: 1,
      x: '0',
      transition: transition,
    }}
    {...props}
  >
    {children}
  </ChatQuestion>
);

export const PreviousAnswers: React.FC<ChatPreviousAnswersProps> = ({
  children,
  ...props
}) => (
  <ChatPreviousAnswers
    initial={{
      opacity: 0,
      x: '-100%',
    }}
    animate={{
      opacity: 1,
      x: '0',
      transition: transition,
    }}
    {...props}
  >
    {children}
  </ChatPreviousAnswers>
);

export const Form: React.FC<ChatFormProps> = ({ children, ...props }) => (
  <ChatForm
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    }}
    {...props}
  >
    {children}
  </ChatForm>
);
