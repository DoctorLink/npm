import React from 'react';
import {
  defaultTraversalActions,
  defaultTraversalComponents,
} from './defaults';
import {
  TraversalAnswer,
  TraversalQuestion,
  TraversalError,
} from '@doctorlink/traversal-core';
import { TraversalCallbacks } from './TraversalCallbacks';
import { TraversalComponents } from './TraversalComponents';
import { DropdownAnswer } from '../Chat/DropdownAnswer';

export interface TraversalResponseProps {
  question: TraversalQuestion;
  answers: Record<string, TraversalAnswer>;
  error: TraversalError;
  actions?: TraversalCallbacks;
  components?: TraversalComponents;
}

export const TraversalResponse: React.FC<TraversalResponseProps> = ({
  question,
  answers,
  error,
  actions = defaultTraversalActions,
  components = defaultTraversalComponents,
}) => {
  const comps = { ...defaultTraversalComponents, ...components };
  const display = question.data.display
    ? question.data.display
    : [
        {
          header: null,
          answers: question.answers.map((x) => Number(x.split('_')[2])),
        },
      ];
  return (
    <comps.Response>
      {comps.QuestionTitle && question.title && (
        <comps.QuestionTitle>{question.title}</comps.QuestionTitle>
      )}
      <comps.Question displayText={question.displayText}>
        <comps.InfoIcon
          onClick={actions.showExplanation}
          explanation={question.explanation}
        />
      </comps.Question>
      {comps.ErrorText && error && (
        <comps.ErrorText>{error.text}</comps.ErrorText>
      )}
      {display.map((section, i) => {
        const sectionAnswerKeys = question.answers.filter((x) =>
          section.answers.includes(Number(x.split('_')[2]))
        );
        return (
          <React.Fragment key={i}>
            <comps.Section text={section.header ?? ''} />
            {sectionAnswerKeys.map((answerId) => {
              const answer = answers[answerId];
              if (answer.controlType === 'Hidden') return null;

              const textAnswerId = question.answers.find(
                (id) => id !== answerId
              );
              return (
                <comps.Label key={answerId}>
                  {answer.controlType === 'Dropdown' && (
                    <DropdownAnswer
                      algos={answer.data?.algos ?? []}
                      loadAlgos={() => actions.loadAlgoSearchData(answerId)}
                      value={answer.controlValue}
                      onValueChange={(value) =>
                        actions.updateValue(answerId, question.answers, value)
                      }
                      onTextChange={(text) => {
                        if (textAnswerId) {
                          actions.updateValue(
                            textAnswerId,
                            question.answers,
                            text
                          );
                        }
                      }}
                    />
                  )}
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
                  {answer.controlType === 'Text' && (
                    <comps.TraversalValue
                      Comp={comps.TextField}
                      answerId={answerId}
                      value={answer.controlValue}
                      siblingIds={question.answers}
                      action={actions.updateValue}
                    />
                  )}
                  {answer.controlType === 'Number' && (
                    <comps.TraversalValue
                      Comp={comps.NumberField}
                      answerId={answerId}
                      value={answer.controlValue}
                      siblingIds={question.answers}
                      action={actions.updateValue}
                    />
                  )}
                  {answer.controlType === 'Date' && (
                    <comps.TraversalValue
                      Comp={comps.DateField}
                      answerId={answerId}
                      value={answer.controlValue}
                      siblingIds={question.answers}
                      action={actions.updateValue}
                    />
                  )}
                  <comps.DisplayText
                    dangerouslySetInnerHTML={{ __html: answer.displayText }}
                  />
                  <comps.InfoIcon
                    onClick={actions.showExplanation}
                    explanation={answer.explanation}
                  />
                </comps.Label>
              );
            })}
          </React.Fragment>
        );
      })}
    </comps.Response>
  );
};
