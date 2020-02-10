import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import baseTheme from '../../Theme/base/index';
import { defaultLabels } from '../../Constants';
import {
  defaultTraversalActions,
  defaultTraversalComponents,
} from './defaults';

export const TraversalResponse: React.FC<{
  question: any;
  answers: any;
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
          answers: question.answers.map((x: any) => Number(x.split('_')[2])),
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

export const TraversalTable: React.FC<{
  node: any;
  questions: any;
  answers: any;
  errors: any;
  actions?: any;
  components?: any;
}> = ({
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
        {questions[node.questions[0]].answers.map((answerId: any) => (
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
      {node.questions.map((q: any) => {
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
            {question.answers.map((answerId: any) => {
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

export const TraversalForm: React.FC<{
  traversal: any;
  containerRef?: any;
  minWidthTable?: any;
  children?: any;
  actions?: any;
  components?: any;
}> = ({
  traversal,
  containerRef,
  children,
  minWidthTable = 700,
  actions = defaultTraversalActions,
  components = defaultTraversalComponents,
}) => {
  const comps = { ...defaultTraversalComponents, ...components };
  const {
    algoId,
    nodeIds,
    nodes,
    questions,
    answers,
    errors,
    previous,
    loading,
    collectionErrors,
    minHeight,
  } = traversal;
  return (
    <comps.Form
      onSubmit={(e: any) => {
        e.preventDefault();
        actions.next();
      }}
      id="Traversal"
    >
      <comps.Container
        ref={containerRef}
        style={{ minHeight: minHeight + 'px' }}
      >
        {comps.AlgoName && (
          <comps.AlgoName>{traversal.algoName}</comps.AlgoName>
        )}
        {collectionErrors &&
          collectionErrors.length > 0 &&
          collectionErrors.map((error: any, i: any) => (
            <comps.ErrorText key={i}>{error}</comps.ErrorText>
          ))}
        <comps.Collection onRest={actions.setHeight}>
          {nodes &&
            nodeIds.map((nodeId: any) => {
              const node = nodes[nodeId];
              return (
                <comps.Fieldset
                  key={`${algoId}_${nodeId}`}
                  mirror={previous}
                  disabled={loading}
                  initialPose="preEnterpose"
                >
                  {(node.questions.length !== 1 || node.isTable) && (
                    <>
                      {comps.QuestionTitle && node.title && (
                        <comps.QuestionTitle>{node.title}</comps.QuestionTitle>
                      )}
                      <comps.Question displayText={node.displayText}>
                        <comps.InfoIcon
                          onClick={actions.showExplanation}
                          explanation={node.explanation}
                        />
                      </comps.Question>
                    </>
                  )}
                  <MediaQuery minWidth={minWidthTable}>
                    {matches => {
                      if (matches && node.isTable) {
                        return (
                          <TraversalTable
                            node={node}
                            questions={questions}
                            answers={answers}
                            errors={errors}
                            actions={actions}
                            components={comps}
                          />
                        );
                      } else {
                        return node.questions.map((questionId: any) => (
                          <TraversalResponse
                            key={questionId}
                            question={questions[questionId]}
                            answers={answers}
                            error={errors[questionId]}
                            actions={actions}
                            components={comps}
                          />
                        ));
                      }
                    }}
                  </MediaQuery>
                </comps.Fieldset>
              );
            })}
        </comps.Collection>
      </comps.Container>
      {children}
    </comps.Form>
  );
};

const FlexButton = styled.div`
  flex: 1;
`;

const PrevButton = styled(FlexButton)``;

const SummaryButton = styled(FlexButton)`
  @media screen and (min-width: 450px) {
    flex: none;
    margin-left: auto;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${Buttons} {
    @media screen and (min-width: 450px) {
      flex-direction: row;
    }
  }
  ${PrevButton} {
    margin-right: ${p => p.theme.spacing.padding}px;
  }
  ${ButtonGroup} {
    margin-bottom: ${p => p.theme.spacing.padding}px;
    @media screen and (min-width: 450px) {
      margin-bottom: 0;
    }
  }
`;

Container.defaultProps = {
  theme: baseTheme,
};

export const Traversal: React.FC<{
  traversal: any;
  containerRef?: any;
  minWidthTable?: any;
  labels?: any;
  actions?: any;
  components?: any;
}> = ({
  traversal,
  containerRef,
  minWidthTable = 700,
  labels = defaultLabels.traversal,
  actions = defaultTraversalActions,
  components = defaultTraversalComponents,
}) => {
  const comps = { ...defaultTraversalComponents, ...components };
  return (
    <Container>
      <TraversalForm
        containerRef={containerRef}
        traversal={traversal}
        minWidthTable={minWidthTable}
        actions={actions}
        components={comps}
      >
        <Buttons>
          <ButtonGroup>
            <PrevButton>
              <comps.Button
                type="button"
                disabled={traversal.loading || traversal.previousDisabled}
                onClick={actions.previous}
              >
                {labels.previous}
              </comps.Button>
            </PrevButton>
            <FlexButton>
              <comps.Button
                type="submit"
                disabled={traversal.loading || traversal.nextDisabled}
              >
                {labels.next}
              </comps.Button>
            </FlexButton>
          </ButtonGroup>
          {actions.showSummary && (
            <SummaryButton>
              <comps.Button type="button" onClick={actions.showSummary}>
                {labels.summary}
              </comps.Button>
            </SummaryButton>
          )}
        </Buttons>
      </TraversalForm>
    </Container>
  );
};
