import { ForkEffect } from 'redux-saga/effects';
import {
  ChatTraversalRootState,
  ChatTraversalsService,
} from '@doctorlink/traversal-core';
import { chatRootReducersMapObject } from '../../Reducers/root';
import { ChatTraversalsServiceSagas } from '../../Sagas/ChatTraversals';
import { TraversalBaseStore } from '../TraversalBaseStore';

export class ChatTraversalStore extends TraversalBaseStore<
  ChatTraversalRootState,
  ChatTraversalsService
> {
  constructor(
    engineBase: string,
    hraBase?: string,
    moreEffects?: ForkEffect<never>[],
    tokenFactory?: () => Promise<string | null>
  ) {
    const traversalService = new ChatTraversalsServiceSagas(
      engineBase,
      tokenFactory
    );
    super(traversalService, chatRootReducersMapObject, hraBase, moreEffects);
  }
}
