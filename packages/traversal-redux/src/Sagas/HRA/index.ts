import { ForkEffect } from 'redux-saga/effects';
import {
  HealthRiskAssessmentService,
  HealthComparisonModel,
  WellnessModel,
  HealthAgeModel,
  HealthRisksModel,
} from '@doctorlink/traversal-core';
import { BaseServiceSagas } from '../BaseServiceSagas';
import {
  HRA_COMPARISONREPORT_GET_REQUEST,
  HEALTH_AGE_GET_REQUEST,
  WELLNESS_GET_REQUEST,
  HEALTH_RISKS_GET_REQUEST,
  HraComparisonReportGetRequest,
  WellnessGetRequest,
  HealthAgeGetRequest,
  HealthRisksGetRequest,
  hraComparisonReportGetResponse,
  wellnessGetResponse,
  healthRisksGetResponse,
  healthAgeGetResponse,
} from '../../Actions/HealthAssessment';

export class HealthRiskAssessmentServiceSagas extends BaseServiceSagas {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super();
    const service = new HealthRiskAssessmentService(
      controllerBase,
      tokenFactory
    );

    this.getComparison = this.effect(
      HRA_COMPARISONREPORT_GET_REQUEST,
      service.getComparison,
      (action: HraComparisonReportGetRequest) => [
        action.currentTraversal,
        action.pastTraversal,
        action.riskAtAge,
      ],
      (data: HealthComparisonModel) => hraComparisonReportGetResponse(data)
    );

    this.getWellness = this.effect(
      WELLNESS_GET_REQUEST,
      service.getWellness,
      (action: WellnessGetRequest) => [action.traversalId, action.conclusions],
      (data: WellnessModel) => wellnessGetResponse(data)
    );

    this.getHealthAge = this.effect(
      HEALTH_AGE_GET_REQUEST,
      service.getHealthRisk,
      (action: HealthAgeGetRequest) => [
        action.traversalId,
        [],
        action.conclusions,
      ],
      ({
        age,
        healthAge,
        minimumHealthAge,
        checkableConclusions,
      }: HealthAgeModel) =>
        healthAgeGetResponse({
          age,
          healthAge,
          minimumHealthAge,
          checkableConclusions,
        })
    );

    this.getHealthRisk = this.effect(
      HEALTH_RISKS_GET_REQUEST,
      service.getHealthRisk,
      (action: HealthRisksGetRequest) => [
        action.traversalId,
        action.ages,
        action.conclusions,
      ],
      (data: HealthRisksModel) => healthRisksGetResponse(data)
    );

    this.effects = [
      this.getHealthAge,
      this.getComparison,
      this.getWellness,
      this.getHealthRisk,
    ];

    this.service = service;
  }
  public service: HealthRiskAssessmentService;

  public getHealthAge: ForkEffect<never>;
  public getComparison: ForkEffect<never>;
  public getWellness: ForkEffect<never>;
  public getHealthRisk: ForkEffect<never>;
}
