import { ForkEffect } from 'redux-saga/effects';
import {
  DualTraversalRootState,
  HealthRiskAssessmentService,
  TraversalsService,
  ChatTraversalsService,
} from '@doctorlink/traversal-core';
import { BaseStore } from '../BaseStore';
import { HealthRiskAssessmentServiceSagas } from '../../Sagas/HRA';
import {
  ChatTraversalsServiceSagas,
  TraversalsServiceSagas,
} from '../../Sagas';
import { dualRootReducersMapObject } from '../../Reducers/root';

export class DualTraversalStore extends BaseStore<DualTraversalRootState> {
  constructor(
    engineBase: string,
    hraBase?: string,
    moreEffects: ForkEffect<never>[] = [],
    tokenFactory?: () => Promise<string | null>
  ) {
    const traversalServiceSagas = new TraversalsServiceSagas(
      engineBase,
      tokenFactory
    );
    const chatTraversalServiceSags = new ChatTraversalsServiceSagas(
      engineBase,
      tokenFactory
    );
    let hraServiceSagas: HealthRiskAssessmentServiceSagas | undefined;
    let effects = [
      ...moreEffects,
      ...traversalServiceSagas.effects,
      ...chatTraversalServiceSags.effects,
    ];
    if (hraBase) {
      hraServiceSagas = new HealthRiskAssessmentServiceSagas(
        hraBase,
        tokenFactory
      );
      effects = [...effects, ...hraServiceSagas.effects];
    }
    super(effects, dualRootReducersMapObject);

    this.hraService = hraServiceSagas?.service;
    this.traversalService = traversalServiceSagas.service;
    this.chatTraversalService = chatTraversalServiceSags.service;

    this.setBaseUrl = (controllerBase: string) => {
      this.hraService?.setBaseUrl(controllerBase);
      this.traversalService.setBaseUrl(controllerBase);
      this.chatTraversalService.setBaseUrl(controllerBase);
    };

    this.setToken = (token: string | null) => {
      this.hraService?.setToken(token);
      this.traversalService.setToken(token);
      this.chatTraversalService.setToken(token);
    };
  }

  public setBaseUrl: (controllerBase: string) => void;
  public setToken: (token: string | null) => void;

  public traversalService: TraversalsService;
  public chatTraversalService: ChatTraversalsService;
  public hraService: HealthRiskAssessmentService | undefined;
}
