import { normalize, schema } from 'normalizr';
import { ChatTraversalsResponse } from '../Models/Service/ChatTraversals';
import { ChatModel } from '../Models/Traversal';

export const flattenChatTraversal = (
  json: ChatTraversalsResponse
): ChatModel => {
  const answer = new schema.Entity(
    'answers',
    {},
    {
      idAttribute: (value, parent) =>
        `${parent.algoId}_${value.nodeId}_${value.questionId}_${value.answerId}`,
    }
  );
  const question = new schema.Entity(
    'questions',
    { answers: [answer] },
    {
      idAttribute: (value) =>
        `${value.algoId}_${value.nodeId}_${value.questionId}`,
    }
  );
  const error = new schema.Entity(
    'errors',
    {},
    {
      idAttribute: (value, parent) =>
        `${json.algoId}_${parent.nodeId}_${value.questionId}`,
    }
  );
  const traversal = { questions: [question], errors: [error] };

  const normalizedData = normalize<any, ChatModel, any>(json, traversal);

  normalizedData.entities.traversalId = normalizedData.result.traversalId;
  normalizedData.entities.completed = normalizedData.result.completed;
  normalizedData.entities.questionIds = normalizedData.result.questions;
  normalizedData.entities.algoId = normalizedData.result.algoId;
  normalizedData.entities.assessmentType = json.assessmentType;
  if (!normalizedData.entities.errors) normalizedData.entities.errors = {};

  return normalizedData.entities;
};
