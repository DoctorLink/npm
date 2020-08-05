import { TraversalModel } from '../Models/Traversal';
import { TraversalsBaseRespond } from '../Models/Service/traversalsBase';

export const createTraversalResponse = (
  traversal: TraversalModel
): TraversalsBaseRespond[] =>
  !traversal.answers
    ? []
    : (Object.keys(traversal.answers)
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
