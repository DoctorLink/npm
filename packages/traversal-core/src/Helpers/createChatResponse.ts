import { ChatModel } from '../Models/Traversal';
import { TraversalsBaseRespond } from '../Models/Service/traversalsBase';

export const createChatResponse = (
  traversal: ChatModel
): TraversalsBaseRespond[] =>
  !traversal.answers
    ? []
    : (traversal.questions[
        traversal.questionIds[traversal.questionIds.length - 1]
      ].answers
        .map(function (answerId): TraversalsBaseRespond | undefined {
          const a = traversal.answers[answerId];
          if ((!a.controlValue || a.controlValue === '') && !a.controlChecked)
            return undefined;
          return {
            nodeId: a.nodeId,
            questionId: a.questionId,
            answerId: a.answerId,
            value: a.controlValue!,
          };
        })
        .filter((a) => a) as TraversalsBaseRespond[]);
