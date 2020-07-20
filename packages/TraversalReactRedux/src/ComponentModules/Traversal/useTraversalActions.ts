import { useDispatch } from 'react-redux';

import * as actions from '../../Actions';
import createTraversalResponse from '../../Helpers/createTraversalResponse';
import { TraversalModel } from '../../Models';
import { TraversalCallbacks } from './TraversalCallbacks';

export const useTraversalActions = (
  traversal: TraversalModel
): TraversalCallbacks => {
  const dispatch = useDispatch();
  const traversalId = traversal.traversalId;
  return {
    next: () =>
      dispatch(
        actions.traversalRespondPostRequest(
          traversalId,
          createTraversalResponse(traversal)
        )
      ),
    previous: () =>
      dispatch(actions.traversalPreviousPostRequest(traversal.traversalId)),
    showSummary: () =>
      dispatch(actions.traversalSummaryGetRequest(traversal.traversalId)),
    showExplanation: (explanation: any) =>
      dispatch(actions.populateModal(explanation, 'Explanation')),
    updateValue: (answerId: any, questionAnswerIds: any, value: any) =>
      dispatch(
        actions.traversalValueChange(answerId, questionAnswerIds, value)
      ),
    toggleCheckbox: (_event: any, answerId: any, questionAnswerIds: any) =>
      dispatch(actions.traversalCheckboxToggle(answerId, questionAnswerIds)),
    toggleRadio: (event: any, answerId: any, questionAnswerIds: any) => {
      dispatch(actions.traversalRadioToggle(answerId, questionAnswerIds, true));
      if (
        event.type === 'click' &&
        event.clientX !== 0 &&
        event.clientY !== 0
      ) {
        let forward = true;
        let answeredRadioQuestions: string[] = [];
        Object.entries(traversal.answers).forEach(answerId => {
          const answer = answerId[1];
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
            actions.traversalRespondPostRequest(
              traversalId,
              createTraversalResponse(traversal)
            )
          );
      }
    },
  };
};
