import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import { defaultChatActions, defaultChatComponents } from './defaults';

import Loader from '../../Components/Loader';
import Step from '../../Components/Step';
import ChatForm from '../../Components/ChatForm';
import ChatInfoIcon from '../../Components/ChatInfoIcon';
import ChatQuestion from '../../Components/ChatQuestion';
import ChatPreviousAnswers from '../../Components/ChatPreviousAnswers';
import ChatPreviousAnswer from '../../Components/ChatPreviousAnswer';
import ChatTextWrapper from '../../Components/ChatTextWrapper';
import ChatTextField from '../../Components/ChatTextField';
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

const PosedPreviousAnswersContainer = posed(ChatPreviousAnswers)({
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

const PosedChatForm = posed(ChatForm)({
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

interface containerProps {
  minHeight: any;
}

const Container = styled.div<containerProps>`
  box-sizing: border-box;
  padding: 0 10px;
  min-height: ${props => props.minHeight}px;
`;

export const Chat: React.FC<{
  traversal: any;
  containerRef?: any;
  actions?: any;
  components?: any;
}> = ({
  traversal,
  containerRef,
  actions = defaultChatActions,
  components = defaultChatComponents,
}) => {
  const comps = { ...defaultChatComponents, ...components };
  console.log(comps);
  const {
    minHeight,
    questionIds,
    questions,
    answers,
    errors,
    loading,
  } = traversal;
  return (
    <Container id="Traversal" minHeight={minHeight} ref={containerRef}>
      {questionIds.map((questionId: any) => {
        const lastQuestion = questionId === questionIds[questionIds.length - 1];
        const current = lastQuestion && !loading;
        const question = questions[questionId];
        const error = errors[questionId];
        const display = question.data.display
          ? question.data.display
          : [
              {
                header: null,
                answers: question.answers.map((x: any) =>
                  Number(x.split('_')[3])
                ),
              },
            ];
        const questionAnswers = question.answers.map(
          (answerId: any) => answers[answerId]
        );
        const showContinueButton =
          questionAnswers.length === 0 ||
          questionAnswers.filter((x: any) => x.controlType !== 'Radio').length >
            0;
        const disableContinued =
          questionAnswers.length > 0 &&
          questionAnswers.filter((x: any) => x.controlChecked).length === 0;
        const jumpBack = () => actions.jump(question);
        const handleSubmit = (event: any) => {
          event.preventDefault();
          actions.next();
        };
        return (
          <Step key={questionId} id={lastQuestion ? 'CurrentQuestion' : ''}>
            <PoseGroup preEnterPose={'preEnterPose'} animateOnMount={true}>
              <Question
                key={`Question_${questionId}`}
                current={current}
                displayText={question.displayText}
                error={error}
              >
                <ChatInfoIcon
                  showExplanation={actions.showExplanation}
                  explanation={question.explanation}
                />
              </Question>
              {current && (
                <PosedChatForm
                  key={`Answers_${questionId}`}
                  onSubmit={(e: any) => handleSubmit(e)}
                  renderSubmit={!showContinueButton}
                  disableSubmit={disableContinued}
                >
                  {display.map((section: any, i: any) => {
                    const sectionAnswerKeys = question.answers.filter(
                      (x: any) =>
                        section.answers.includes(Number(x.split('_')[3]))
                    );
                    return (
                      <React.Fragment key={i}>
                        <Section text={section.header} />
                        {sectionAnswerKeys.map((answerId: any) => {
                          const answer = answers[answerId];
                          return (
                            <ChoiceContainer key={answerId}>
                              {answer.controlType === 'Checkbox' && (
                                <PrimaryChoice displayText={answer.displayText}>
                                  <HiddenInput
                                    type="checkbox"
                                    id={answerId}
                                    value={true}
                                    checked={answer.controlChecked}
                                    onChange={e =>
                                      actions.toggleCheckbox(
                                        e,
                                        answerId,
                                        question.answers,
                                        true
                                      )
                                    }
                                  />
                                </PrimaryChoice>
                              )}
                              {answer.controlType === 'Radio' &&
                                !showContinueButton && (
                                  <PrimaryChoice
                                    displayText={answer.displayText}
                                  >
                                    <HiddenInput
                                      type="radio"
                                      id={answerId}
                                      name={answerId.substring(
                                        0,
                                        answerId.lastIndexOf('_')
                                      )}
                                      value={true}
                                      checked={answer.controlChecked}
                                      onChange={() => {}}
                                      onClick={e =>
                                        actions.toggleRadio(
                                          e,
                                          answerId,
                                          question.answers,
                                          true
                                        )
                                      }
                                    />
                                  </PrimaryChoice>
                                )}
                              {answer.controlType === 'Radio' &&
                                showContinueButton && (
                                  <SecondaryChoice
                                    displayText={answer.displayText}
                                  >
                                    <HiddenInput
                                      type="radio"
                                      id={answerId}
                                      name={answerId.substring(
                                        0,
                                        answerId.lastIndexOf('_')
                                      )}
                                      value={true}
                                      checked={answer.controlChecked}
                                      onChange={() => {}}
                                      onClick={e =>
                                        actions.toggleRadio(
                                          e,
                                          answerId,
                                          question.answers,
                                          true
                                        )
                                      }
                                    />
                                  </SecondaryChoice>
                                )}
                              {(answer.controlType === 'Text' ||
                                answer.controlType === 'Number' ||
                                answer.controlType === 'Date') && (
                                <ChatTextWrapper text={answer.displayText}>
                                  <ChatTextField
                                    value={answer.controlValue || ''}
                                    onChange={e =>
                                      actions.updateValue(
                                        answerId,
                                        question.answers,
                                        e.target.value
                                      )
                                    }
                                  />
                                </ChatTextWrapper>
                              )}
                              <ChatInfoIcon
                                showExplanation={actions.showExplanation}
                                explanation={answer.explanation}
                              />
                            </ChoiceContainer>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                  {showContinueButton && (
                    <ChoiceContainer>
                      <SecondaryChoice
                        type="submit"
                        disabled={disableContinued}
                        displayText={'Continue'}
                        button={true}
                      />
                    </ChoiceContainer>
                  )}
                  {/* Notes */}
                </PosedChatForm>
              )}
              {!current && (
                <PosedPreviousAnswersContainer
                  key={`PreviousAnswers_${questionId}`}
                  jumpBack={jumpBack}
                >
                  {question.answers.map((a: any) => (
                    <ChatPreviousAnswer
                      key={a}
                      jumpBack={jumpBack}
                      answer={answers[a]}
                    />
                  ))}
                </PosedPreviousAnswersContainer>
              )}
            </PoseGroup>
          </Step>
        );
      })}
      {loading && (
        <Step>
          <Loader />
        </Step>
      )}
    </Container>
  );
};
