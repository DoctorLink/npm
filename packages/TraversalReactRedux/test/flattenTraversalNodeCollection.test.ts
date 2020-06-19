import flattenTraversalNodeCollection from '../src/Helpers/flattenTraversalNodeCollection';
import { TraversalModel } from 'Models';

describe('flattenTraversalNodeCollection', () => {
  const json = {
    data: {
      traversalId: 'abc',
      algoId: 123,
      nodes: [
        {
          nodeId: 1,
          assetId: 1234,
          displayText: 'Display text',
          explanation: 'Explanation',
          title: 'Title',
          isTable: false,
          questions: [
            {
              nodeId: 2,
              questionId: 1234,
              displayText: 'To be or not to be?',
              title: 'The question',
              explanation: null,
              data: {},
              answers: [
                {
                  nodeId: 3,
                  questionId: 1234,
                  answerId: 12340,
                  displayText: 'To be',
                },
                {
                  nodeId: 3,
                  questionId: 1234,
                  answerId: 12341,
                  displayText: 'Not to be',
                },
              ],
            },
          ],
          errors: [
            {
              questionId: 1234,
              text: 'That is the question',
            },
          ],
        },
      ],
      assessmentType: 1,
      algoName: 'My algo',
      errors: ['This is an error'],
      previousDisabled: true,
      nextDisabled: false,
      language: 'EN',
    },
  };

  test('should flatten traversal node collection correctly', () => {
    const result = flattenTraversalNodeCollection(json);
    expect(result).toMatchObject<TraversalModel>({
      traversalId: 'abc',
      algoId: 123,
      assessmentType: 1,
      algoName: 'My algo',
      collectionErrors: ['This is an error'],
      previousDisabled: true,
      nextDisabled: false,
      language: 'EN',
      nodeIds: [1],
      nodes: {
        '1': {
          nodeId: 1,
          assetId: 1234,
          displayText: 'Display text',
          explanation: 'Explanation',
          title: 'Title',
          isTable: false,
          questions: ['2_1234'],
        },
      },
      questions: {
        '2_1234': {
          nodeId: 2,
          questionId: 1234,
          displayText: 'To be or not to be?',
          answers: ['3_1234_12340', '3_1234_12341'],
          title: 'The question',
          explanation: null,
          data: {},
        },
      },
      answers: {
        '3_1234_12340': {
          nodeId: 3,
          questionId: 1234,
          answerId: 12340,
          displayText: 'To be',
        },
        '3_1234_12341': {
          nodeId: 3,
          questionId: 1234,
          answerId: 12341,
          displayText: 'Not to be',
        },
      },
      errors: {
        '1_1234': {
          questionId: 1234,
          text: 'That is the question',
        },
      },
    });
  });
});
