import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import * as actions from '../../Actions';
import createChatResponse from '../../Helpers/createChatResponse';

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

const transition = {
  duration: 300,
};

const Question = posed(ChatQuestion)({
  enter: {
    opacity: 1,
    x: '0',
    transition: transition,
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0,
    },
  },
  preEnterPose: {
    opacity: 0,
    x: '-100%',
    transition: transition,
  },
});

const PreviousAnswers = posed(ChatPreviousAnswers)({
  enter: {
    opacity: 1,
    x: '0',
    transition: transition,
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0,
    },
  },
  preEnterPose: {
    opacity: 0,
    x: '-100%',
    transition: transition,
  },
});

const Form = posed(ChatForm)({
  enter: {
    opacity: 1,
    delay: 1000,
    transition: transition,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  preEnterPose: {
    opacity: 0,
    transition: transition,
  },
});

interface props {
  minHeight: any;
}

const Container = styled.div<props>`
  box-sizing: border-box;
  padding: 0 10px;
  min-height: ${props => props.minHeight}px;
`;

const StepContent: React.FC<{ children: any }> = ({ children }) => (
  <PoseGroup preEnterPose={'preEnterPose'} animateOnMount={true}>
    {children}
  </PoseGroup>
);

export const defaultChatComponents = {
  Container,
  Loader,
  Step,
  StepContent,
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

export const defaultChatActions = {
  next: () => undefined,
  jump: (_question: any) => undefined,
  showSummary: () => undefined,
  showExplanation: (_explanation: any) => undefined,
  updateValue: (_answerId: any, _questionAnswerIds: any, _value: any) =>
    undefined,
  toggleCheckbox: (_event: any, _answerId: any, _questionAnswerIds: any) =>
    undefined,
  toggleRadio: (_event: any, _answerId: any, _questionAnswerIds: any) =>
    undefined,
  setHeight: () => undefined,
};

export const BuildChatActions = (traversal: any, containerRef: any) => {
  const dispatch = useDispatch();
  return {
    next: () =>
      dispatch(
        actions.traversalNext(createChatResponse(traversal), containerRef)
      ),
    jump: (question: any) =>
      dispatch(
        actions.traversalPrevious(
          traversal.traversalId,
          question.algoId,
          question.nodeId,
          question.questionId,
          containerRef
        )
      ),
    showExplanation: (explanation: any) =>
      dispatch(actions.populateModal(explanation, 'Explanation')),
    updateValue: (answerId: any, questionAnswerIds: any, value: any) =>
      dispatch(actions.updateText(answerId, questionAnswerIds, value)),
    toggleCheckbox: (_event: any, answerId: any, questionAnswerIds: any) =>
      dispatch(actions.toggleCheckbox(answerId, questionAnswerIds)),
    toggleRadio: (event: any, answerId: any, questionAnswerIds: any) => {
      dispatch(actions.toggleRadio(answerId, questionAnswerIds, true));
      if (
        event.type === 'click' &&
        event.clientX !== 0 &&
        event.clientY !== 0
      ) {
        dispatch(
          actions.traversalNext(createChatResponse(traversal), containerRef)
        );
      }
    },
    setHeight: () => {
      dispatch(actions.setTraversalMinHeight(0));
    },
  };
};
