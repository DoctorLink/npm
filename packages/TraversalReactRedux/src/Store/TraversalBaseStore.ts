import { ReducersMapObject } from 'redux';
import { ForkEffect } from 'redux-saga/effects';
import { BaseStore } from './BaseStore';
import { TraversalBaseRootState } from '../Models/State';
import { TraversalsBaseServiceSagas } from '../Sagas/TraversalsBaseServiceSagas';
import { TraversalsBaseService } from '../Services/TraversalsBaseService';
import { HealthRiskAssessmentServiceSagas } from '../Sagas';
import { HealthRiskAssessmentService } from '../Services/HRA';

export class TraversalBaseStore<
  T extends TraversalBaseRootState
> extends BaseStore<T> {
  constructor(
    traversalService: TraversalsBaseServiceSagas,
    reducersObject: ReducersMapObject<T>,
    hraBase?: string,
    moreEffects: ForkEffect<never>[] = [],
    tokenFactory?: () => Promise<string | null>
  ) {
    let hraServiceSagas: HealthRiskAssessmentServiceSagas | undefined;
    let effects = [...moreEffects, ...traversalService.effects];
    if (hraBase) {
      hraServiceSagas = new HealthRiskAssessmentServiceSagas(
        hraBase,
        tokenFactory
      );
      effects = [...effects, ...hraServiceSagas.effects];
    }
    super(effects, reducersObject);
    this.traversalService = traversalService.service;
    this.hraService = hraServiceSagas?.service;

    this.setBaseUrl = (controllerBase: string) => {
      this.hraService?.setBaseUrl(controllerBase);
      this.traversalService.setBaseUrl(controllerBase);
    };

    this.setToken = (token: string | null) => {
      this.hraService?.setToken(token);
      this.traversalService.setToken(token);
    };
  }

  public setBaseUrl: (controllerBase: string) => void;
  public setToken: (token: string | null) => void;

  public traversalService: TraversalsBaseService;
  public hraService: HealthRiskAssessmentService | undefined;
}
