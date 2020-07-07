import React, { MutableRefObject } from 'react';
import MediaQuery from 'react-responsive';
import { TraversalState } from '../../Models';
import {
  defaultTraversalActions,
  defaultTraversalComponents,
} from './defaults';
import { TraversalTable } from './TraversalTable';
import { TraversalResponse } from './TraversalResponse';
import { TraversalCallbacks } from './TraversalCallbacks';
import { useTraversalScroll } from '../../Hooks';

export interface TraversalFormProps {
  traversal: TraversalState;
  containerRef?: MutableRefObject<any>;
  minWidthTable?: number;
  actions?: TraversalCallbacks;
  components?: Partial<typeof defaultTraversalComponents>;
}

export const TraversalForm: React.FC<TraversalFormProps> = ({
  traversal,
  containerRef,
  children,
  minWidthTable = 700,
  actions = defaultTraversalActions,
  components = defaultTraversalComponents,
}) => {
  const traversalState = useTraversalScroll(traversal, containerRef);
  const comps = { ...defaultTraversalComponents, ...components };
  const {
    algoName,
    algoId,
    nodeIds,
    nodes,
    questions,
    answers,
    errors,
    previous,
    loading,
    collectionErrors,
  } = traversalState;
  return (
    <comps.Form
      onSubmit={(e: any) => {
        e.preventDefault();
        actions.next();
      }}
      id="Traversal"
    >
      <comps.Container ref={containerRef}>
        {comps.AlgoName && <comps.AlgoName>{algoName}</comps.AlgoName>}
        {collectionErrors &&
          collectionErrors.length > 0 &&
          collectionErrors.map((error: any, i: any) => (
            <comps.ErrorText key={i}>{error}</comps.ErrorText>
          ))}
        <comps.Collection mirror={previous}>
          {nodes && (
            <comps.Nodes
              key={`${algoId}_${nodeIds.join('_')}`}
              mirror={previous}
            >
              {nodeIds.map((nodeId: any) => {
                const node = nodes[nodeId];
                return (
                  <comps.Fieldset
                    key={`${algoId}_${nodeId}`}
                    disabled={loading}
                  >
                    {(node.questions.length !== 1 || node.isTable) && (
                      <>
                        {comps.QuestionTitle && node.title && (
                          <comps.QuestionTitle>
                            {node.title}
                          </comps.QuestionTitle>
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
            </comps.Nodes>
          )}
        </comps.Collection>
      </comps.Container>
      {children}
    </comps.Form>
  );
};
