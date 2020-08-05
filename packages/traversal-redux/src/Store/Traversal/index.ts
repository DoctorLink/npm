import { ForkEffect } from 'redux-saga/effects';
import {
  TraversalRootState,
  TraversalsService,
} from '@doctorlink/traversal-core';
import { traversalRootReducersMapObject } from '../../Reducers/root';
import { TraversalsServiceSagas } from '../../Sagas/Traversals';
import { TraversalBaseStore } from '../../Store/TraversalBaseStore';

export class TraversalStore extends TraversalBaseStore<
  TraversalRootState,
  TraversalsService
> {
  constructor(
    engineBase: string,
    hraBase?: string,
    moreEffects?: ForkEffect<never>[],
    tokenFactory?: () => Promise<string | null>
  ) {
    const traversalSagas = new TraversalsServiceSagas(engineBase, tokenFactory);
    super(
      traversalSagas,
      traversalRootReducersMapObject,
      hraBase,
      moreEffects,
      tokenFactory
    );
  }
}
