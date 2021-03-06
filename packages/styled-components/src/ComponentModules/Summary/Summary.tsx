import React, { useEffect, useRef } from 'react';
import { defaultSummaryActions, defaultSummaryComponents } from './defaults';
import { SummaryState } from '@doctorlink/traversal-core';

export interface SummaryLabels {
  title: string;
  noQuestions: string;
  noAnswers: string;
}

export const Summary: React.FC<{
  summary: SummaryState;
  labels?: SummaryLabels;
  actions?: any;
  components?: any;
}> = ({
  summary,
  labels = {
    title: 'Question Summary',
    noQuestions: 'No questions to display.',
    noAnswers: 'None',
  },
  components = defaultSummaryComponents,
  actions = defaultSummaryActions,
}) => {
  const comps = { ...defaultSummaryComponents, ...components };
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref && ref.current && !ref.current.contains(event.target))
        actions.close();
    };

    const handleKeydown = (event: any) => {
      if (event.keyCode === 27) actions.close();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [actions]);

  return (
    <comps.Wrapper>
      {summary &&
        summary.questions && [
          <comps.DelayExit key="global">
            <comps.BodyOverflowHidden />
          </comps.DelayExit>,
          <comps.TransparentCurtain key="curtain">
            <comps.Summary ref={ref}>
              <comps.Header>
                <comps.Title>{labels.title}</comps.Title>
                <comps.Close onClick={actions.close} />
              </comps.Header>
              {summary.questions.length === 0 && (
                <comps.Header>{labels.noQuestions}</comps.Header>
              )}
              {summary.questions.length > 0 &&
                summary.questions.map((question) => (
                  <comps.Question
                    key={`${question.algoId}_${question.nodeId}`}
                    onClick={() =>
                      actions.jump(question.algoId, question.nodeId)
                    }
                  >
                    <comps.QuestionText
                      dangerouslySetInnerHTML={{
                        __html: question.summaryText
                          ? question.summaryText
                          : question.displayText,
                      }}
                    />
                    <comps.Answers>
                      {question.answers
                        .filter((x) => x.isAnswered)
                        .map((answer) => {
                          let answerValue = '';
                          if (answer.value && answer.nodeType === 'DateEnter') {
                            answerValue =
                              new Intl.DateTimeFormat()
                                .format(Date.parse(answer.value))
                                .toString() + ' ';
                          } else if (answer.value) {
                            answerValue = answer.value + ' ';
                          }
                          return (
                            <comps.AnswerText
                              key={`${question.algoId}_${question.nodeId}_${answer.answerId}`}
                              dangerouslySetInnerHTML={{
                                __html: `${answerValue}${answer.displayText}`,
                              }}
                            />
                          );
                        })}
                      {question.answers.filter((x) => x.isAnswered).length ===
                        0 &&
                        question.answers.filter((x) => x.answerId === 0)
                          .length === 0 && (
                          <comps.EmptyAnswerText>
                            {labels.noAnswers}
                          </comps.EmptyAnswerText>
                        )}
                    </comps.Answers>
                  </comps.Question>
                ))}
            </comps.Summary>
          </comps.TransparentCurtain>,
        ]}
    </comps.Wrapper>
  );
};
