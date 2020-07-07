import { ForkEffect } from 'redux-saga/effects';
import { ChatTraversalRootState } from '../../Models';
import { chatRootReducersMapObject } from '../../Reducers/root';
import { TraversalsBaseServiceSagas } from '../../Sagas/TraversalsBaseServiceSagas';
import { ChatTraversalsServiceSagas } from '../../Sagas/ChatTraversals';
import { TraversalBaseStore } from '../TraversalBaseStore';

export class ChatTraversalStore extends TraversalBaseStore<
  ChatTraversalRootState
> {
  constructor(
    engineBase: string,
    hraBase?: string,
    moreEffects?: ForkEffect<never>[],
    tokenFactory?: () => Promise<string | null>
  ) {
    const traversalService: TraversalsBaseServiceSagas = new ChatTraversalsServiceSagas(
      engineBase,
      tokenFactory
    );
    super(traversalService, chatRootReducersMapObject, hraBase, moreEffects);
  }
}
