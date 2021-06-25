import { ForkEffect } from 'redux-saga/effects';
import {
  ChatTraversalRootState,
  ChatTraversalsService,
} from '@doctorlink/traversal-core';
import { chatRootReducersMapObject } from '../../Reducers/root';
import { ChatTraversalsServiceSagas } from '../../Sagas/ChatTraversals';
import { TraversalBaseStore } from '../TraversalBaseStore';
import { ApiUrls } from '../ApiUrls';

export class ChatTraversalStore extends TraversalBaseStore<
  ChatTraversalRootState,
  ChatTraversalsService
> {
  constructor(
    urls: ApiUrls,
    moreEffects?: ForkEffect<never>[],
    tokenFactory?: () => Promise<string | null>
  ) {
    const traversalService = new ChatTraversalsServiceSagas(
      urls.engine,
      tokenFactory
    );
    super(traversalService, chatRootReducersMapObject, urls, moreEffects);
  }
}
