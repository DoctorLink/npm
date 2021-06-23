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
  algoSearchDataGetRequest,
} from '@doctorlink/traversal-redux';
import { isClickEvent } from '../isClickEvent';

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
    jump: (question) =>
      dispatch(
        chatTraversalRevisitPostRequest(traversal.traversalId, {
          algoId: question.algoId,
          nodeId: question.nodeId,
          assetId: question.questionId,
        })
      ),
    showExplanation: (explanation) =>
      dispatch(populateModal(explanation, 'Explanation')),
    updateValue: (answerId, questionAnswerIds, value) =>
      dispatch(chatTraversalValueChange(answerId, questionAnswerIds, value)),
    toggleCheckbox: (_event, answerId, questionAnswerIds) =>
      dispatch(chatTraversalCheckboxToggle(answerId, questionAnswerIds)),
    toggleRadio: (event, answerId, questionAnswerIds) => {
      dispatch(chatTraversalRadioToggle(answerId, questionAnswerIds, true));
      if (isClickEvent(event) && event.clientX !== 0 && event.clientY !== 0) {
        dispatch(
          chatTraversalRespondPostRequest(
            traversalId,
            createChatResponse(traversal)
          )
        );
      }
    },
    loadAlgoSearchData: (answerId) =>
      dispatch(algoSearchDataGetRequest(answerId)),
  };
};
