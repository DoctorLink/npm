import { useDispatch } from 'react-redux';
import { createChatResponse } from '@doctorlink/traversal-core';
import { ChatModel } from '@doctorlink/traversal-core';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import {
  chatTraversalRespondPostRequest,
  chatTraversalRevisitPostRequest,
  populateModal,
  chatTraversalValueChange,
  chatTraversalCheckboxToggle,
  chatTraversalRadioToggle,
} from '@doctorlink/traversal-redux';

export const useChatActions = (
  traversal: ChatModel
): ChatTraversalCallbacks => {
  const dispatch = useDispatch();
  const traversalId = traversal.traversalId;
  return {
    next: () =>
      dispatch(
        chatTraversalRespondPostRequest(
          traversalId,
          createChatResponse(traversal)
        )
      ),
    jump: (question: any) =>
      dispatch(
        chatTraversalRevisitPostRequest(traversal.traversalId, {
          algoId: question.algoId,
          nodeId: question.nodeId,
          assetId: question.questionId,
        })
      ),
    showExplanation: (explanation: any) =>
      dispatch(populateModal(explanation, 'Explanation')),
    updateValue: (answerId: any, questionAnswerIds: any, value: any) =>
      dispatch(chatTraversalValueChange(answerId, questionAnswerIds, value)),
    toggleCheckbox: (_event: any, answerId: any, questionAnswerIds: any) =>
      dispatch(chatTraversalCheckboxToggle(answerId, questionAnswerIds)),
    toggleRadio: (event: any, answerId: any, questionAnswerIds: any) => {
      dispatch(chatTraversalRadioToggle(answerId, questionAnswerIds, true));
      if (
        event.type === 'click' &&
        event.clientX !== 0 &&
        event.clientY !== 0
      ) {
        dispatch(
          chatTraversalRespondPostRequest(
            traversalId,
            createChatResponse(traversal)
          )
        );
      }
    },
  };
};
