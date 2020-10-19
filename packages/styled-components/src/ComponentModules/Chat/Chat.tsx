import React, { FormEvent, RefObject } from 'react';
import { defaultChatActions, defaultChatComponents } from './defaults';
import { useChatScroll } from '../../Hooks/useChatScroll';
import { ChatTraversalState, DisplaySection } from '@doctorlink/traversal-core';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import { ChatComponents } from './ChatComponents';

export const ChatTraversal: React.FC<{
  traversal: ChatTraversalState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerRef?: RefObject<any>;
  actions?: ChatTraversalCallbacks;
  components?: ChatComponents;
}> = ({
  traversal,
  containerRef,
  actions = defaultChatActions,
  components = defaultChatComponents,
}) => {
  const comps = { ...defaultChatComponents, ...components };
  const { questionIds, questions, answers, errors, loading } = traversal;
  const minHeight = useChatScroll(loading, questionIds.length, containerRef);
  return (
    <comps.Container id="Traversal" minHeight={minHeight} ref={containerRef}>
      {questionIds.map((questionId) => {
        const lastQuestion = questionId === questionIds[questionIds.length - 1];
        const current = lastQuestion && !loading;
        const question = questions[questionId];
        const error = errors[questionId];
        const display = question.data.display
          ? question.data.display
          : ([
              {
                header: null,
                answers: question.answers.map((x) => Number(x.split('_')[3])),
              },
            ] as DisplaySection[]);
        const questionAnswers = question.answers.map(
          (answerId) => answers[answerId]
        );
        const showContinueButton =
          questionAnswers.length === 0 ||
          questionAnswers.filter((x) => x.controlType !== 'Radio').length > 0;
        const disableContinued =
          questionAnswers.length > 0 &&
          questionAnswers.filter((x) => x.controlChecked).length === 0;
        const jumpBack = () => actions.jump(question);
        const handleSubmit = (event: FormEvent) => {
          event.preventDefault();
          actions.next();
        };
        return (
          <comps.Step
            key={questionId}
            id={lastQuestion ? 'CurrentQuestion' : ''}
          >
            <comps.Question
              key={`Question_${questionId}`}
              current={current}
              displayText={question.displayText}
              error={error}
            >
              <comps.InfoIcon
                showExplanation={actions.showExplanation}
                explanation={question.explanation}
              />
            </comps.Question>
            {current && (
              <comps.Form
                key={`Answers_${questionId}`}
                onSubmit={handleSubmit}
                renderSubmit={!showContinueButton}
                disableSubmit={disableContinued}
              >
                {display.map((section, i) => {
                  const sectionAnswerKeys = question.answers.filter((x) =>
                    section.answers.includes(Number(x.split('_')[3]))
                  );
                  return (
                    <React.Fragment key={i}>
                      <comps.Section text={section.header} />
                      {sectionAnswerKeys.map((answerId) => {
                        const answer = answers[answerId];
                        return (
                          <comps.ChoiceContainer key={answerId}>
                            {answer.controlType === 'Checkbox' && (
                              <comps.PrimaryChoice
                                displayText={answer.displayText}
                              >
                                <comps.HiddenInput
                                  type="checkbox"
                                  id={answerId}
                                  checked={answer.controlChecked}
                                  onChange={(e) =>
                                    actions.toggleCheckbox(
                                      e,
                                      answerId,
                                      question.answers
                                    )
                                  }
                                />
                              </comps.PrimaryChoice>
                            )}
                            {answer.controlType === 'Radio' &&
                              !showContinueButton && (
                                <comps.PrimaryChoice
                                  displayText={answer.displayText}
                                >
                                  <comps.HiddenInput
                                    type="radio"
                                    id={answerId}
                                    name={answerId.substring(
                                      0,
                                      answerId.lastIndexOf('_')
                                    )}
                                    checked={answer.controlChecked}
                                    onChange={() => undefined}
                                    onClick={(e) =>
                                      actions.toggleRadio(
                                        e,
                                        answerId,
                                        question.answers
                                      )
                                    }
                                  />
                                </comps.PrimaryChoice>
                              )}
                            {answer.controlType === 'Radio' &&
                              showContinueButton && (
                                <comps.SecondaryChoice
                                  displayText={answer.displayText}
                                >
                                  <comps.HiddenInput
                                    type="radio"
                                    id={answerId}
                                    name={answerId.substring(
                                      0,
                                      answerId.lastIndexOf('_')
                                    )}
                                    checked={answer.controlChecked}
                                    onChange={() => undefined}
                                    onClick={(e) =>
                                      actions.toggleRadio(
                                        e,
                                        answerId,
                                        question.answers
                                      )
                                    }
                                  />
                                </comps.SecondaryChoice>
                              )}
                            {(answer.controlType === 'Text' ||
                              answer.controlType === 'Number' ||
                              answer.controlType === 'Date') && (
                              <comps.TextWrapper text={answer.displayText}>
                                <comps.TextField
                                  value={answer.controlValue || ''}
                                  onChange={(e) =>
                                    actions.updateValue(
                                      answerId,
                                      question.answers,
                                      e.target.value
                                    )
                                  }
                                />
                              </comps.TextWrapper>
                            )}
                            <comps.InfoIcon
                              showExplanation={actions.showExplanation}
                              explanation={answer.explanation}
                            />
                          </comps.ChoiceContainer>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
                {showContinueButton && (
                  <comps.ChoiceContainer>
                    <comps.SecondaryChoice
                      type="submit"
                      disabled={disableContinued}
                      displayText={'Continue'}
                      button={true}
                    />
                  </comps.ChoiceContainer>
                )}
                {/* Notes */}
              </comps.Form>
            )}
            {!current && (
              <comps.PreviousAnswers
                key={`PreviousAnswers_${questionId}`}
                jumpBack={jumpBack}
              >
                {question.answers.map((a) => (
                  <comps.PreviousAnswer
                    key={a}
                    jumpBack={jumpBack}
                    answer={answers[a]}
                  />
                ))}
              </comps.PreviousAnswers>
            )}
          </comps.Step>
        );
      })}
      {loading && (
        <comps.Step>
          <comps.Loader />
        </comps.Step>
      )}
    </comps.Container>
  );
};
