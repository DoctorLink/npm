import { useDispatch } from 'react-redux';
import { createChatResponse } from '@doctorlink/traversal-core';
import { ChatModel } from '@doctorlink/traversal-core';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import {
  traversalRespondPostRequest,
  traversalRevisitPostRequest,
  populateModal,
  traversalValueChange,
  traversalCheckboxToggle,
  traversalRadioToggle,
} from '@doctorlink/traversal-redux';

export const useChatActions = (
  traversal: ChatModel
): ChatTraversalCallbacks => {
  const dispatch = useDispatch();
  const traversalId = traversal.traversalId;
  return {
    next: () =>
      dispatch(
        traversalRespondPostRequest(traversalId, createChatResponse(traversal))
      ),
    jump: (question: any) =>
      dispatch(
        traversalRevisitPostRequest(traversal.traversalId, {
          algoId: question.algoId,
          nodeId: question.nodeId,
          assetId: question.questionId,
        })
      ),
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
        dispatch(
          traversalRespondPostRequest(
            traversalId,
            createChatResponse(traversal)
          )
        );
      }
    },
  };
};
