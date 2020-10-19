import React, { FormEvent } from 'react';
import {
  DisplaySection,
  TraversalAnswer,
  TraversalQuestion,
} from '@doctorlink/traversal-core';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import { ChatComponents } from './ChatComponents';
import { ChatAnswer } from './ChatAnswer';

const extractAnswerId = (answerKey: string) => Number(answerKey.split('_')[3]);

interface ChatAnswerFormProps {
  question: TraversalQuestion;
  answers: Record<string, TraversalAnswer>;
  actions: ChatTraversalCallbacks;
  components: ChatComponents;
}

export const ChatAnswerForm: React.FC<ChatAnswerFormProps> = ({
  question,
  answers,
  actions,
  components,
}) => {
  const { Form, ChoiceContainer, SecondaryChoice } = components;
  const display = question.data.display ?? [
    {
      header: null,
      answers: question.answers.map(extractAnswerId),
    } as DisplaySection,
  ];
  const questionAnswers = question.answers.map((answerId) => answers[answerId]);
  const showContinueButton =
    questionAnswers.length === 0 ||
    questionAnswers.filter((x) => x.controlType !== 'Radio').length > 0;
  const disableContinued =
    questionAnswers.length > 0 &&
    questionAnswers.filter((x) => x.controlChecked).length === 0;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    actions.next();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      renderSubmit={!showContinueButton}
      disableSubmit={disableContinued}
    >
      {display.map((section, i) => {
        const sectionAnswerKeys = question.answers.filter((x) =>
          section.answers.includes(extractAnswerId(x))
        );
        return (
          <React.Fragment key={i}>
            <components.Section text={section.header} />
            {sectionAnswerKeys.map((answerId) => (
              <ChatAnswer
                key={answerId}
                answer={answers[answerId]}
                answerId={answerId}
                questionAnswerIds={question.answers}
                showContinueButton={showContinueButton}
                actions={actions}
                components={components}
              />
            ))}
          </React.Fragment>
        );
      })}
      {showContinueButton && (
        <ChoiceContainer>
          <SecondaryChoice
            type="submit"
            disabled={disableContinued}
            displayText="Continue"
            button={true}
          />
        </ChoiceContainer>
      )}
      {/* Notes */}
    </Form>
  );
};
