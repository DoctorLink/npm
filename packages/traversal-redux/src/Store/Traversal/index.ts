import { ForkEffect } from 'redux-saga/effects';
import {
  TraversalRootState,
  TraversalsService,
} from '@doctorlink/traversal-core';
import { traversalRootReducersMapObject } from '../../Reducers/root';
import { TraversalsServiceSagas } from '../../Sagas/Traversals';
import { TraversalBaseStore } from '../../Store/TraversalBaseStore';
import { ApiUrls } from '../ApiUrls';

export class TraversalStore extends TraversalBaseStore<
  TraversalRootState,
  TraversalsService
> {
  constructor(
    urls: ApiUrls,
    moreEffects?: ForkEffect<never>[],
    tokenFactory?: () => Promise<string | null>
  ) {
    const traversalSagas = new TraversalsServiceSagas(
      urls.engine,
      tokenFactory
    );
    super(
      traversalSagas,
      traversalRootReducersMapObject,
      urls,
      moreEffects,
      tokenFactory
    );
  }
}
