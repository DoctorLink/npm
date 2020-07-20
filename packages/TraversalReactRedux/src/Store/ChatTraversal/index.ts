import { ForkEffect } from 'redux-saga/effects';
import { ChatTraversalRootState } from '../../Models';
import { chatRootReducersMapObject } from '../../Reducers/root';
import { ChatTraversalsServiceSagas } from '../../Sagas/ChatTraversals';
import { TraversalBaseStore } from '../TraversalBaseStore';
import { ChatTraversalsService } from 'Services';

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
