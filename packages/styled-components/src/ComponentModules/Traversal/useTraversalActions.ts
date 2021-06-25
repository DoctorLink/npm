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
        let forward = false;
        const questionLength = Object.keys(traversal.questions).length;
        // if a traversal "page" contains only one question, we can auto-forward.
        if (questionLength === 1) forward = true;
        else if (questionLength === 2) {
          Object.keys(traversal.questions).forEach((questionKey) => {
            const question = traversal.questions[questionKey];
            // if one of the 2 questions is a message, we can auto-forward.
            if (question.answers.length === 0) forward = true;
          });
        }
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
