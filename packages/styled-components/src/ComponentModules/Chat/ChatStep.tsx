import React from 'react';
import { ChatTraversalState } from '@doctorlink/traversal-core';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import { ChatComponents } from './ChatComponents';
import { ChatAnswerForm } from './ChatAnswerForm';

interface ChatStepProps {
  questionId: string;
  traversal: ChatTraversalState;
  actions: ChatTraversalCallbacks;
  components: ChatComponents;
}

export const ChatStep: React.FC<ChatStepProps> = ({
  questionId,
  traversal,
  actions,
  components,
}) => {
  const {
    Step,
    Question,
    InfoIcon,
    PreviousAnswers,
    PreviousAnswer,
  } = components;
  const { questionIds, questions, answers, errors, loading } = traversal;

  const lastQuestion = questionId === questionIds[questionIds.length - 1];
  const current = lastQuestion && !loading;
  const question = questions[questionId];
  const error = errors[questionId];
  const jumpBack = () => actions.jump(question);

  return (
    <Step id={lastQuestion ? 'CurrentQuestion' : ''}>
      <Question
        current={current}
        displayText={question.displayText}
        error={error}
      >
        <InfoIcon
          showExplanation={actions.showExplanation}
          explanation={question.explanation}
        />
      </Question>
      {current && (
        <ChatAnswerForm
          question={question}
          answers={answers}
          actions={actions}
          components={components}
        />
      )}
      {!current && (
        <PreviousAnswers
          key={`PreviousAnswers_${questionId}`}
          jumpBack={jumpBack}
        >
          {question.answers.map((a) => (
            <PreviousAnswer key={a} jumpBack={jumpBack} answer={answers[a]} />
          ))}
        </PreviousAnswers>
      )}
    </Step>
  );
};
