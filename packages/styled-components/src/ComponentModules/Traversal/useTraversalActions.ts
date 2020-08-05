import { useDispatch } from 'react-redux';
import {
  createTraversalResponse,
  TraversalModel,
} from '@doctorlink/traversal-core';
import { TraversalCallbacks } from './TraversalCallbacks';
import {
  traversalRespondPostRequest,
  traversalPreviousPostRequest,
  traversalSummaryGetRequest,
  populateModal,
  traversalValueChange,
  traversalCheckboxToggle,
  traversalRadioToggle,
} from '@doctorlink/traversal-redux';

export const useTraversalActions = (
  traversal: TraversalModel
): TraversalCallbacks => {
  const dispatch = useDispatch();
  const traversalId = traversal.traversalId;
  return {
    next: () =>
      dispatch(
        traversalRespondPostRequest(
          traversalId,
          createTraversalResponse(traversal)
        )
      ),
    previous: () =>
      dispatch(traversalPreviousPostRequest(traversal.traversalId)),
    showSummary: () =>
      dispatch(traversalSummaryGetRequest(traversal.traversalId)),
    showExplanation: (explanation: any) =>
      dispatch(populateModal(explanation, 'Explanation')),
    updateValue: (answerId: any, questionAnswerIds: any, value: any) =>
      dispatch(traversalValueChange(answerId, questionAnswerIds, value)),
    toggleCheckbox: (_event: any, answerId: any, questionAnswerIds: any) =>
      dispatch(traversalCheckboxToggle(answerId, questionAnswerIds)),
    toggleRadio: (event: any, answerId: any, questionAnswerIds: any) => {
      dispatch(traversalRadioToggle(answerId, questionAnswerIds, true));
      if (
        event.type === 'click' &&
        event.clientX !== 0 &&
        event.clientY !== 0
      ) {
        let forward = true;
        const answeredRadioQuestions: string[] = [];
        Object.entries(traversal.answers).forEach((answerId) => {
          const answer = answerId[1];
          if (answer.controlChecked === true)
            answeredRadioQuestions.push(
              `${answer.nodeId}_${answer.questionId}`
            );
        });
        Object.keys(traversal.questions).forEach((question) => {
          if (!answeredRadioQuestions.includes(question)) forward = false;
        });
        if (forward)
          dispatch(
            traversalRespondPostRequest(
              traversalId,
              createTraversalResponse(traversal)
            )
          );
      }
    },
  };
};
