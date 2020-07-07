import { normalize, schema } from 'normalizr';
import { TraversalModel } from '../Models';
import { TraversalsResponse } from '../Models/Service/Traversals';

const traversalFlatten = (json: TraversalsResponse): TraversalModel => {
  const answer = new schema.Entity(
    'answers',
    {},
    {
      idAttribute: value =>
        `${value.nodeId}_${value.questionId}_${value.answerId}`,
    }
  );
  const question = new schema.Entity(
    'questions',
    { answers: [answer] },
    { idAttribute: value => `${value.nodeId}_${value.questionId}` }
  );
  const error = new schema.Entity(
    'errors',
    {},
    { idAttribute: (value, parent) => `${parent.nodeId}_${value.questionId}` }
  );
  const node = new schema.Entity(
    'nodes',
    { questions: [question], errors: [error] },
    { idAttribute: value => value.nodeId }
  );
  const traversal = { nodes: [node] };

  const { result, entities } = normalize<any, TraversalModel, any>(
    json,
    traversal
  );

  entities.traversalId = result.traversalId;
  entities.nodeIds = result.nodes;
  entities.algoId = result.algoId;
  entities.language = result.language;
  entities.assessmentType = result.assessmentType;
  entities.algoName = result.algoName;
  entities.nextDisabled = result.nextDisabled;
  entities.previousDisabled = result.previousDisabled;
  entities.collectionErrors = result.errors;
  if (!entities.errors) entities.errors = {};

  return entities;
};

export default traversalFlatten;
