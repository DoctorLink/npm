import { MutableRefObject } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../Actions';
import createTraversalResponse from '../../Helpers/createTraversalResponse';
import { TraversalModel } from '../../Models';
import { TraversalCallbacks } from './TraversalCallbacks';

export const useTraversalActions = (
  traversal: TraversalModel,
  containerRef: MutableRefObject<HTMLElement>
): TraversalCallbacks => {
  const dispatch = useDispatch();
  return {
    next: () =>
      dispatch(
        actions.traversalNext(createTraversalResponse(traversal), containerRef)
      ),
    previous: () =>
      dispatch(
        actions.traversalPrevious(
          traversal.traversalId,
          null,
          null,
          null,
          containerRef
        )
      ),
    showSummary: () =>
      dispatch(actions.traversalSummaryGet(traversal.traversalId)),
    showExplanation: (explanation: any) =>
      dispatch(actions.populateModal(explanation, 'Explanation')),
    updateValue: (answerId: any, questionAnswerIds: any, value: any) =>
      dispatch(actions.updateText(answerId, questionAnswerIds, value)),
    toggleCheckbox: (_event: any, answerId: any, questionAnswerIds: any) =>
      dispatch(actions.toggleCheckbox(answerId, questionAnswerIds)),
    toggleRadio: (event: any, answerId: any, questionAnswerIds: any) => {
      dispatch(actions.toggleRadio(answerId, questionAnswerIds, true));
      if (
        event.type === 'click' &&
        event.clientX !== 0 &&
        event.clientY !== 0
      ) {
        let forward = true;
        let answeredRadioQuestions: string[] = [];
        Object.entries(traversal.answers).forEach(answerId => {
          const answer = answerId[1] as any;
          if (answer.controlChecked === true)
            answeredRadioQuestions.push(
              `${answer.nodeId}_${answer.questionId}`
            );
        });
        Object.keys(traversal.questions).forEach(question => {
          if (!answeredRadioQuestions.includes(question)) forward = false;
        });
        if (forward)
          dispatch(
            actions.traversalNext(
              createTraversalResponse(traversal),
              containerRef
            )
          );
      }
    },
    setHeight: () => {
      dispatch(actions.setTraversalMinHeight(0));
    },
  };
};
