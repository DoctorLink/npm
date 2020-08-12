import React from 'react';
import {
  defaultTraversalActions,
  defaultTraversalComponents,
} from './defaults';
import {
  TraversalNode,
  TraversalQuestion,
  TraversalAnswer,
  TraversalError,
} from '@doctorlink/traversal-core';
import { TraversalCallbacks } from './TraversalCallbacks';
import { TraversalComponents } from './TraversalComponents';

interface TraversalTableProps {
  node: TraversalNode;
  questions: Record<string, TraversalQuestion>;
  answers: Record<string, TraversalAnswer>;
  errors: Record<string, TraversalError>;
  actions?: TraversalCallbacks;
  components?: TraversalComponents;
}

export const TraversalTable: React.FC<TraversalTableProps> = ({
  node,
  questions,
  answers,
  errors,
  actions = defaultTraversalActions,
  components = defaultTraversalComponents,
}) => {
  const comps = { ...defaultTraversalComponents, ...components };
  return (
    <comps.TableQuestion>
      <comps.HeaderRow>
        {questions[node.questions[0]].answers.map((answerId) => (
          <comps.HeaderCell
            key={answerId}
            text={answers[answerId].displayText}
            justifyContent={'center'}
          >
            <comps.InfoIcon
              onClick={actions.showExplanation}
              explanation={answers[answerId].explanation}
            />
          </comps.HeaderCell>
        ))}
      </comps.HeaderRow>
      {node.questions.map((q) => {
        const question = questions[q];
        const error = errors[q];
        return (
          <comps.QuestionRow key={q}>
            <comps.HeaderCell
              colspan={2}
              textAlign={'left'}
              text={question.displayText}
              error={error}
            >
              <comps.InfoIcon
                onClick={actions.showExplanation}
                explanation={question.explanation}
              />
            </comps.HeaderCell>
            {question.answers.map((answerId) => {
              const answer = answers[answerId];
              return (
                <comps.AnswerCell key={answerId} answerId={answerId}>
                  {answer.controlType === 'Radio' && (
                    <comps.TraversalRadio
                      Comp={comps.Radio}
                      answerId={answerId}
                      checked={answer.controlChecked}
                      siblingIds={question.answers}
                      action={actions.toggleRadio}
                    />
                  )}
                  {answer.controlType === 'Checkbox' && (
                    <comps.TraversalCheckbox
                      Comp={comps.Checkbox}
                      answerId={answerId}
                      checked={answer.controlChecked}
                      siblingIds={question.answers}
                      action={actions.toggleCheckbox}
                    />
                  )}
                </comps.AnswerCell>
              );
            })}
          </comps.QuestionRow>
        );
      })}
    </comps.TableQuestion>
  );
};
