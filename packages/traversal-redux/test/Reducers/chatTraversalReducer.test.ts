import { ChatTraversalState } from '@doctorlink/traversal-core';
import { AxiosError } from 'axios';
import {
  chatTraversalPostRequest,
  chatTraversalGetRequest,
  serviceSagaError,
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
