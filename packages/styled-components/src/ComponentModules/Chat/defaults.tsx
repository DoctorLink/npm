import React from 'react';
import styled from 'styled-components';

import Loader from '../../Components/Loader';
import Step from '../../Components/Step';
import ChatForm from '../../Components/ChatForm';
import InfoIcon from '../../Components/ChatInfoIcon';
import ChatQuestion from '../../Components/ChatQuestion';
import ChatPreviousAnswers from '../../Components/ChatPreviousAnswers';
import PreviousAnswer from '../../Components/ChatPreviousAnswer';
import TextWrapper from '../../Components/ChatTextWrapper';
import TextField from '../../Components/ChatTextField';
import ChoiceContainer from '../../Components/ChoiceContainer';
import PrimaryChoice from '../../Components/PrimaryChoice';
import SecondaryChoice from '../../Components/SecondaryChoice';
import Section from '../../Components/ChatSection';
import HiddenInput from '../../Components/HiddenInput';
import { ChatTraversalCallbacks } from './ChatCallbacks';

const transition = {
  duration: 0.3,
};

const Question: React.FC<any> = ({ children, ...props }) => (
  <ChatQuestion
    initial={{
      opacity: 0,
      x: '-100%',
      transition: transition,
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

const PreviousAnswers: React.FC<any> = ({ children, ...props }) => (
  <ChatPreviousAnswers
    initial={{
      opacity: 0,
      x: '-100%',
      transition: transition,
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

const Form: React.FC<any> = ({ children, ...props }) => (
  <ChatForm
    initial={{
      opacity: 0,
      transition: transition,
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

interface props {
  minHeight: any;
}

const Container = styled.div<props>`
  box-sizing: border-box;
  padding: 0 10px;
  min-height: ${(props) => props.minHeight}px;
`;

export const defaultChatComponents = {
  Container,
  Loader,
  Step,
  Form,
  InfoIcon,
  Question,
  PreviousAnswers,
  PreviousAnswer,
  TextWrapper,
  TextField,
  ChoiceContainer,
  PrimaryChoice,
  SecondaryChoice,
  Section,
  HiddenInput,
};

export const defaultChatActions: ChatTraversalCallbacks = {
  next: () => undefined,
  jump: (_question: any) => undefined,
  showExplanation: (_explanation: any) => undefined,
  updateValue: (_answerId: any, _questionAnswerIds: any, _value: any) =>
    undefined,
  toggleCheckbox: (_event: any, _answerId: any, _questionAnswerIds: any) =>
    undefined,
  toggleRadio: (_event: any, _answerId: any, _questionAnswerIds: any) =>
    undefined,
};
