import { ForkEffect } from 'redux-saga/effects';
import { TraversalRootState } from '../../Models';
import { traversalRootReducersMapObject } from '../../Reducers/root';
import { TraversalsBaseServiceSagas } from '../../Sagas/TraversalsBaseServiceSagas';
import { TraversalsServiceSagas } from '../../Sagas/Traversals';
import { TraversalBaseStore } from '../../Store/TraversalBaseStore';

export class TraversalStore extends TraversalBaseStore<TraversalRootState> {
  constructor(
    engineBase: string,
    hraBase?: string,
    moreEffects?: ForkEffect<never>[],
    tokenFactory?: () => Promise<string | null>
  ) {
    const traversalService: TraversalsBaseServiceSagas = new TraversalsServiceSagas(
      engineBase,
      tokenFactory
    );
    super(
      traversalService,
      traversalRootReducersMapObject,
      hraBase,
      moreEffects
    );
  }
}
