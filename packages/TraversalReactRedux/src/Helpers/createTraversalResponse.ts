import { TraversalModel } from '../Models';
import { TraversalsBaseRespond } from '../Models/Service/traversalsBase';

export const creatTraversalResponse = (
  traversal: TraversalModel
): TraversalsBaseRespond[] =>
  !traversal.answers
    ? []
    : (Object.keys(traversal.answers)
        .map(function(answerId): TraversalsBaseRespond | undefined {
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
        .filter(a => a) as TraversalsBaseRespond[]);

export default creatTraversalResponse;
