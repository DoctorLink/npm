import { normalize, schema } from 'normalizr'

export default json => {
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
    normalizedData.entities.firstCollection = json.data.firstCollection;
    normalizedData.entities.collectionErrors = json.data.errors;
    if (!normalizedData.entities.errors) normalizedData.entities.errors = {}

    return normalizedData.entities
}