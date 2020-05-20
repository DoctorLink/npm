import {
  ChatModel,
  TraversalResponseModel,
  TraversalResponseAnswer,
} from '../Models';

export default (traversal: ChatModel): TraversalResponseModel => ({
  traversalId: traversal.traversalId,
  responses: !traversal.answers
    ? null
    : (traversal.questions[
        traversal.questionIds[traversal.questionIds.length - 1]
      ].answers
        .map(function(answerId): TraversalResponseAnswer | undefined {
          var a = traversal.answers[answerId];
          if ((!a.controlValue || a.controlValue === '') && !a.controlChecked)
            return undefined;
          return {
            nodeId: a.nodeId,
            questionId: a.questionId,
            answerId: a.answerId,
            value: a.controlValue!,
          };
        })
        .filter(a => a) as TraversalResponseAnswer[]),
});
