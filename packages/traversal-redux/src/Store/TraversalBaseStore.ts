import { ReducersMapObject } from 'redux';
import { ForkEffect } from 'redux-saga/effects';
import {
  TraversalBaseRootState,
  TraversalsBaseService,
  HealthRiskAssessmentService,
  OnlineTriageService,
} from '@doctorlink/traversal-core';
import { BaseStore } from './BaseStore';
import { TraversalsBaseServiceSagas } from '../Sagas/TraversalsBaseServiceSagas';
import { HealthRiskAssessmentServiceSagas } from '../Sagas/HRA';
import { OnlineTriageServiceSagas } from '../Sagas/OnlineTriageSagas';
import { ApiUrls } from './ApiUrls';

export class TraversalBaseStore<
  TState extends TraversalBaseRootState,
  TService extends TraversalsBaseService
> extends BaseStore<TState> {
  constructor(
    traversalServiceSagas: TraversalsBaseServiceSagas<TService>,
    reducersObject: ReducersMapObject<TState>,
    urls: ApiUrls,
    moreEffects: ForkEffect<never>[] = [],
    tokenFactory?: () => Promise<string | null>
  ) {
    let hraServiceSagas: HealthRiskAssessmentServiceSagas | undefined;
    let otServiceSagas: OnlineTriageServiceSagas | undefined;
    let effects = [...moreEffects, ...traversalServiceSagas.effects];
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
    super(effects, reducersObject);
    this.traversalService = traversalServiceSagas.service;
    this.hraService = hraServiceSagas?.service;
    this.otService = otServiceSagas?.service;

    this.setToken = (token: string | null) => {
      this.hraService?.setToken(token);
      this.otService?.setToken(token);
      this.traversalService.setToken(token);
    };
  }

  public setToken: (token: string | null) => void;

  public traversalService: TService;
  public hraService: HealthRiskAssessmentService | undefined;
  public otService: OnlineTriageService | undefined;
}
