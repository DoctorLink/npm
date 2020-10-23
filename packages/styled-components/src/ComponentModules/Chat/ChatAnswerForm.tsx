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
  const { Form, Section, Button } = components;
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
      <section>
        {display.map((section, i) => {
          const sectionAnswerKeys = question.answers.filter((x) =>
            section.answers.includes(extractAnswerId(x))
          );
          return (
            <React.Fragment key={i}>
              <Section text={section.header} />
              {sectionAnswerKeys.map((answerId) => {
                const answer = answers[answerId];
                const secondaryChoice =
                  showContinueButton && answer.controlType == 'Radio';
                return (
                  <ChatAnswer
                    key={answerId}
                    answer={answer}
                    answerId={answerId}
                    questionAnswerIds={question.answers}
                    secondaryChoice={secondaryChoice}
                    actions={actions}
                    components={components}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
      </section>
      {showContinueButton && (
        <Button type="submit" disabled={disableContinued}>
          Continue
        </Button>
      )}
      {/* Notes */}
    </Form>
  );
};
