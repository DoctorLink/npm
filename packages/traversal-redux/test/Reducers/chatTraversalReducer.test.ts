import { ChatModel, ChatTraversalState } from '@doctorlink/traversal-core';
import { AxiosError } from 'axios';
import {
  chatTraversalPostRequest,
  chatTraversalGetRequest,
  serviceSagaError,
  chatTraversalPostResponse,
  chatTraversalRespondPostRequest,
  chatTraversalRevisitPostRequest,
} from '../../src/Actions';
import { chatReducer } from '../../src/Reducers';

describe('Chat reducer', () => {
  describe('chatTraversalPostRequest', () => {
    const action = chatTraversalPostRequest({ productId: 1 });

    test('should set loading', () => {
      const updatedState = chatReducer(undefined, action);

      expect(updatedState.loading).toBe(true);
    });
  });

  describe('chatTraversalGetRequest', () => {
    const action = chatTraversalGetRequest('abc');

    test('should set loading', () => {
      const updatedState = chatReducer(undefined, action);

      expect(updatedState.loading).toBe(true);
    });
  });

  describe('chatTraversalRespondPostRequest', () => {
    const action = chatTraversalRespondPostRequest('abc', [
      { nodeId: 1, questionId: 1, answerId: 1 },
    ]);

    test('should set loading', () => {
      const updatedState = chatReducer({} as ChatTraversalState, action);

      expect(updatedState.loading).toBe(true);
    });
  });

  describe('chatTraversalRevisitPostRequest', () => {
    const action = chatTraversalRevisitPostRequest('abc', {
      assetId: 3,
      algoId: 1,
      nodeId: 2,
    });

    test('should set loading', () => {
      const updatedState = chatReducer({} as ChatTraversalState, action);

      expect(updatedState.loading).toBe(true);
    });
  });

  describe('chatTraversalPostResponse', () => {
    const traversal = { algoId: 42 } as ChatModel;
    const action = chatTraversalPostResponse(traversal);
    const state = { loading: true } as ChatTraversalState;

    test('should set traversal properties', () => {
      const updatedState = chatReducer(state, action);

      expect(updatedState.algoId).toBe(42);
    });

    test('should set loading = false', () => {
      const updatedState = chatReducer(state, action);

      expect(updatedState.loading).toBe(false);
    });
  });

  describe('serviceSagaError', () => {
    const action = serviceSagaError({} as AxiosError);

    test('should set loading to false', () => {
      const updatedState = chatReducer(
        { loading: true } as ChatTraversalState,
        action
      );

      expect(updatedState.loading).toBe(false);
    });
  });
});
