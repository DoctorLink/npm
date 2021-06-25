import { ForkEffect } from 'redux-saga/effects';
import {
  DualTraversalRootState,
  HealthRiskAssessmentService,
  TraversalsService,
  ChatTraversalsService,
  OnlineTriageService,
} from '@doctorlink/traversal-core';
import { BaseStore } from '../BaseStore';
import { HealthRiskAssessmentServiceSagas } from '../../Sagas/HRA';
import {
  ChatTraversalsServiceSagas,
  TraversalsServiceSagas,
} from '../../Sagas';
import { dualRootReducersMapObject } from '../../Reducers/root';
import { ApiUrls } from '../ApiUrls';
import { OnlineTriageServiceSagas } from '../../Sagas/OnlineTriageSagas';

export class DualTraversalStore extends BaseStore<DualTraversalRootState> {
  constructor(
    urls: ApiUrls,
    moreEffects: ForkEffect<never>[] = [],
    tokenFactory?: () => Promise<string | null>
  ) {
    const traversalServiceSagas = new TraversalsServiceSagas(
      urls.engine,
      tokenFactory
    );
    const chatTraversalServiceSagas = new ChatTraversalsServiceSagas(
      urls.engine,
      tokenFactory
    );
    let hraServiceSagas: HealthRiskAssessmentServiceSagas | undefined;
    let otServiceSagas: OnlineTriageServiceSagas | undefined;
    let effects = [
      ...moreEffects,
      ...traversalServiceSagas.effects,
      ...chatTraversalServiceSagas.effects,
    ];
    if (urls.hra) {
      hraServiceSagas = new HealthRiskAssessmentServiceSagas(
        urls.hra,
        tokenFactory
      );
      effects = [...effects, ...hraServiceSagas.effects];
    }
    if (urls.onlineTriage) {
      otServiceSagas = new OnlineTriageServiceSagas(
        urls.onlineTriage,
        tokenFactory
      );
      effects = [...effects, ...otServiceSagas.effects];
    }
    super(effects, dualRootReducersMapObject);

    this.hraService = hraServiceSagas?.service;
    this.otService = otServiceSagas?.service;
    this.traversalService = traversalServiceSagas.service;
    this.chatTraversalService = chatTraversalServiceSagas.service;

    this.setToken = (token: string | null) => {
      this.hraService?.setToken(token);
      this.otService?.setToken(token);
      this.traversalService.setToken(token);
      this.chatTraversalService.setToken(token);
    };
  }

  public setToken: (token: string | null) => void;

  public traversalService: TraversalsService;
  public chatTraversalService: ChatTraversalsService;
  public hraService: HealthRiskAssessmentService | undefined;
  public otService: OnlineTriageService | undefined;
}
