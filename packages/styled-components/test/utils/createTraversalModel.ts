import {
  TraversalsResponse,
  TraversalModel,
  TraversalsResponseAnswer,
  TraversalsResponseQuestion,
  TraversalsResponseNode,
  TraversalsResponseError,
  DeepPartial,
  flattenTraversal,
} from '@doctorlink/traversal-core';

const defaultAnswer: TraversalsResponseAnswer = {
  nodeId: 2,
  questionId: 1234,
  answerId: 12340,
  displayText: 'Answer text',
  controlType: 'Radio',
  controlChecked: false,
};

const createAnswer = (
  partialAnswer: Partial<TraversalsResponseAnswer>
): TraversalsResponseAnswer => ({
  ...defaultAnswer,
  ...partialAnswer,
});

const defaultQuestion: TraversalsResponseQuestion = {
  nodeId: 2,
  questionId: 1234,
  displayText: 'Question text',
  title: 'Question title',
  explanation: null,
  data: {},
  answers: [
    createAnswer({ answerId: 12340, displayText: 'Answer 1' }),
    createAnswer({ answerId: 12341, displayText: 'Answer 2' }),
  ],
};

const createQuestion = (
  partialQuestion: DeepPartial<TraversalsResponseQuestion>
): TraversalsResponseQuestion => ({
  ...defaultQuestion,
  ...partialQuestion,
  answers: partialQuestion.answers
    ? partialQuestion.answers.map(createAnswer)
    : defaultQuestion.answers,
});

const defaultError: TraversalsResponseError = {
  questionId: 1234,
  text: 'Error text',
};

const createError = (
  partialError: Partial<TraversalsResponseError>
): TraversalsResponseError => ({
  ...defaultError,
  ...partialError,
});

const defaultNode: TraversalsResponseNode = {
  nodeId: 1,
  assetId: 1234,
  displayText: 'Node text',
  explanation: 'Node explanation',
  title: 'Node title',
  isTable: false,
  questions: [defaultQuestion],
  errors: [],
};

const createNode = (
  partialNode: DeepPartial<TraversalsResponseNode>
): TraversalsResponseNode => ({
  ...defaultNode,
  ...partialNode,
  questions: partialNode.questions
    ? partialNode.questions.map(createQuestion)
    : defaultNode.questions,
  errors: partialNode.errors
    ? partialNode.errors.map(createError)
    : defaultNode.errors,
});

const defaultResponse: TraversalsResponse = {
  traversalId: 'testtraversalid',
  algoId: 1,
  algoName: 'Test algo',
  assessmentType: 1,
  previousDisabled: false,
  nextDisabled: false,
  language: 'EN',
  errors: [],
  nodes: [defaultNode],
};

const createResponse = (
  partialResponse: DeepPartial<TraversalsResponse>
): TraversalsResponse => ({
  ...defaultResponse,
  ...partialResponse,
  nodes: partialResponse.nodes
    ? partialResponse.nodes.map(createNode)
    : defaultResponse.nodes,
});

export function createTraversalModel(
  partialResponse: DeepPartial<TraversalsResponse> = {}
): TraversalModel {
  const response = createResponse(partialResponse);
  return flattenTraversal(response);
}
