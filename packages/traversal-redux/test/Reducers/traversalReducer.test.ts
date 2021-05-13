import {
  traversalPostRequest,
  traversalGetRequest,
  traversalRespondPostRequest,
  traversalPreviousPostRequest,
  traversalRevisitPostRequest,
  traversalPostResponse,
  serviceSagaError,
} from '../../src/Actions';
import { TraversalState, TraversalModel } from '@doctorlink/traversal-core';
import { traversalReducer } from '../../src/Reducers';
import { AxiosError } from 'axios';

describe('Traversal reducer', () => {
  describe('traversalPostRequest', () => {
    const action = traversalPostRequest({ productId: 1 });

    test('should set loading', () => {
      const updatedState = traversalReducer(undefined, action);

      expect(updatedState.loading).toBe(true);
    });
  });

  describe('traversalGetRequest', () => {
    const action = traversalGetRequest('abc');

    test('should set loading', () => {
      const updatedState = traversalReducer(undefined, action);

      expect(updatedState.loading).toBe(true);
    });
  });

  describe('traversalRespondPostRequest', () => {
    const action = traversalRespondPostRequest('abc', [
      { nodeId: 1, questionId: 1, answerId: 1 },
    ]);

    test('should set loading', () => {
      const updatedState = traversalReducer({} as TraversalState, action);

      expect(updatedState.loading).toBe(true);
    });

    test('should set previous = false', () => {
      const updatedState = traversalReducer(
        { previous: true } as TraversalState,
        action
      );

      expect(updatedState.previous).toBe(false);
    });
  });

  describe('traversalPreviousPostRequest', () => {
    const action = traversalPreviousPostRequest('abc');

    test('should set loading', () => {
      const updatedState = traversalReducer({} as TraversalState, action);

      expect(updatedState.loading).toBe(true);
    });

    test('should set previous = true', () => {
      const updatedState = traversalReducer({} as TraversalState, action);

      expect(updatedState.previous).toBe(true);
    });
  });

  describe('traversalRevisitPostRequest', () => {
    const action = traversalRevisitPostRequest('abc', { algoId: 1, nodeId: 2 });

    test('should set loading', () => {
      const updatedState = traversalReducer({} as TraversalState, action);

      expect(updatedState.loading).toBe(true);
    });

    test('should set previous = true', () => {
      const updatedState = traversalReducer({} as TraversalState, action);

      expect(updatedState.previous).toBe(true);
    });
  });

  describe('traversalPostResponse', () => {
    const traversal = { algoId: 42, algoName: 'Test algo' } as TraversalModel;
    const action = traversalPostResponse(traversal);
    const state = { loading: true } as TraversalState;

    test('should set traversal properties', () => {
      const updatedState = traversalReducer(state, action);

      expect(updatedState.algoId).toBe(42);
      expect(updatedState.algoName).toBe('Test algo');
    });

    test('should set loading = false', () => {
      const updatedState = traversalReducer(state, action);

      expect(updatedState.loading).toBe(false);
    });
  });

  describe('serviceSagaError', () => {
    const action = serviceSagaError({} as AxiosError);

    test('should set loading to false', () => {
      const updatedState = traversalReducer(
        { loading: true } as TraversalState,
        action
      );

      expect(updatedState.loading).toBe(false);
    });
  });
});
