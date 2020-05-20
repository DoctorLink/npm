import React from 'react';
import {
  defaultTraversalActions,
  defaultTraversalComponents,
} from './defaults';
import { TraversalAnswer, TraversalQuestion } from 'Models';

export const TraversalResponse: React.FC<{
  question: TraversalQuestion;
  answers: Record<string, TraversalAnswer>;
  error: any;
  actions?: any;
  components?: any;
}> = ({
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
          answers: question.answers.map(x => Number(x.split('_')[2])),
        },
      ];
  return (
    <comps.Response>
      {comps.QuestionTitle && question.title && (
        <comps.QuestionTitle>{question.title}</comps.QuestionTitle>
      )}
      <comps.Question displayText={question.displayText} error={error}>
        <comps.InfoIcon
          onClick={actions.showExplanation}
          explanation={question.explanation}
        />
      </comps.Question>
      {comps.ErrorText && error && (
        <comps.ErrorText>{error.text}</comps.ErrorText>
      )}
      {display.map((section: any, i: any) => {
        const sectionAnswerKeys = question.answers.filter((x: any) =>
          section.answers.includes(Number(x.split('_')[2]))
        );
        return (
          <React.Fragment key={i}>
            <comps.Section text={section.header} />
            {sectionAnswerKeys.map((answerId: any) => {
              const answer = answers[answerId];
              return (
                <comps.Label key={answerId}>
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
                    answer={answer}
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
