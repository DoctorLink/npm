import { normalize, schema } from 'normalizr'

export const normalizeTraversal = json => {
    const answer = new schema.Entity('answers', {}, { idAttribute: value => `${value.nodeId}_${value.questionId}_${value.answerId}` });
    const question = new schema.Entity('questions', { answers: [answer] }, { idAttribute: value => `${value.nodeId}_${value.questionId}` });
    const error = new schema.Entity('errors', {}, { idAttribute: (value,parent) => `${parent.nodeId}_${value.questionId}` });
    const node = new schema.Entity('nodes', { questions: [question],  errors: [error] }, { idAttribute: value => value.nodeId });
    const traversal = { nodes: [node] }

    const normalizedData = normalize(json.data, traversal);

    normalizedData.entities.traversalId = normalizedData.result.traversalId;
    normalizedData.entities.nodeIds = normalizedData.result.nodes;
    normalizedData.entities.algoId = normalizedData.result.algoId;
    normalizedData.entities.assessmentType = json.data.assessmentType;
    if (!normalizedData.entities.errors) normalizedData.entities.errors = {}

    return normalizedData.entities
}

export const traversalResponse = traversal => ({
    traversalId: traversal.traversalId,
    responses: !traversal.answers ? null : Object.keys(traversal.answers).map(function (answerId) {
        var a = traversal.answers[answerId];
        if ((!a.controlValue || a.controlValue === "") && !a.controlChecked) return undefined;
        return {
            nodeId: a.nodeId,
            questionId: a.questionId,
            answerId: a.answerId,
            value: a.controlValue
        }
    }).filter(a => a)
})