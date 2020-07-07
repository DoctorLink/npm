import { useDispatch } from 'react-redux';
import * as actions from '../../Actions';
import createChatResponse from '../../Helpers/createChatResponse';
import { ChatModel } from '../../Models';
import { ChatTraversalCallbacks } from './ChatCallbacks';

export const useChatActions = (
  traversal: ChatModel
): ChatTraversalCallbacks => {
  const dispatch = useDispatch();
  const traversalId = traversal.traversalId;
  return {
    next: () =>
      dispatch(
        actions.traversalRespondPostRequest(
          traversalId,
          createChatResponse(traversal)
        )
      ),
    jump: (question: any) =>
      dispatch(
        actions.traversalRevisitPostRequest(traversal.traversalId, {
          algoId: question.algoId,
          nodeId: question.nodeId,
          assetId: question.questionId,
        })
      ),
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
        dispatch(
          actions.traversalRespondPostRequest(
            traversalId,
            createChatResponse(traversal)
          )
        );
      }
    },
  };
};
