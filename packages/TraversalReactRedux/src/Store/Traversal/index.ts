import { ForkEffect } from 'redux-saga/effects';
import { TraversalRootState } from '../../Models';
import { traversalRootReducersMapObject } from '../../Reducers/root';
import { TraversalsServiceSagas } from '../../Sagas/Traversals';
import { TraversalBaseStore } from '../../Store/TraversalBaseStore';
import { TraversalsService } from '../../Services';

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
