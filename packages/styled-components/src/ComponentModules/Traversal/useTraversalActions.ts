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
import { isClickEvent } from '../isClickEvent';

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
    showExplanation: (explanation) =>
      dispatch(populateModal(explanation, 'Explanation')),
    updateValue: (answerId, questionAnswerIds, value) =>
      dispatch(traversalValueChange(answerId, questionAnswerIds, value)),
    toggleCheckbox: (_event, answerId, questionAnswerIds) =>
      dispatch(traversalCheckboxToggle(answerId, questionAnswerIds)),
    toggleRadio: (event, answerId, questionAnswerIds) => {
      dispatch(traversalRadioToggle(answerId, questionAnswerIds, true));
      if (isClickEvent(event) && event.clientX !== 0 && event.clientY !== 0) {
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
