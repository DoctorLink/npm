import { BaseServiceSagas } from './BaseServiceSagas';
import {
  AlgoSearchModel,
  OnlineTriageService,
} from '@doctorlink/traversal-core';
import { call, ForkEffect, takeLatest } from 'redux-saga/effects';
import {
  ALGO_SEARCH_DATA_GET_REQUEST,
  AlgoSearchDataGetRequest,
  algoSearchDataGetResponse,
  OnlineTriageSetBaseUrl,
  OT_SET_BASE_URL,
} from '../Actions/OnlineTriage';

export class OnlineTriageServiceSagas extends BaseServiceSagas {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super();
    const service = new OnlineTriageService(controllerBase, tokenFactory);

    this.getAlgos = this.effect(
      ALGO_SEARCH_DATA_GET_REQUEST,
      service.getAlgos,
      () => [],
      (data: AlgoSearchModel[], action: AlgoSearchDataGetRequest) =>
        algoSearchDataGetResponse(action.answerId, data)
    );

    this.setBaseUrl = takeLatest(OT_SET_BASE_URL, function* (
      action: OnlineTriageSetBaseUrl
    ) {
      yield call(service.setBaseUrl, action.baseUrl);
    });

    this.effects = [this.getAlgos, this.setBaseUrl];
    this.service = service;
  }

  public service: OnlineTriageService;

  public getAlgos: ForkEffect<never>;
  public setBaseUrl: ForkEffect<never>;
}
