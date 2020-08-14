import { Action } from 'redux';
import {
  HealthAgeModel,
  HealthRisksModel,
  WellnessModel,
  HealthComparisonModel,
} from '@doctorlink/traversal-core';

export const HEALTH_RISKS_GET_REQUEST = 'HEALTH_RISKS_GET_REQUEST';
export interface HealthRisksGetRequest
  extends Action<typeof HEALTH_RISKS_GET_REQUEST> {
  traversalId: string;
  ages: number[];
  conclusions: number[];
}
export const healthRisksGetRequest = (
  traversalId: string,
  ages: number[],
  conclusions: number[]
): HraAction => ({
  type: HEALTH_RISKS_GET_REQUEST,
  traversalId,
  ages,
  conclusions,
});

export const HEALTH_RISKS_GET_RESPONSE = 'HEALTH_RISKS_GET_RESPONSE';
export interface HealthRisksGetResponse
  extends Action<typeof HEALTH_RISKS_GET_RESPONSE> {
  healthRisks: HealthRisksModel;
}
export const healthRisksGetResponse = (
  healthRisks: HealthRisksModel
): HraAction => ({
  type: HEALTH_RISKS_GET_RESPONSE,
  healthRisks,
});

export const HEALTH_AGE_GET_REQUEST = 'HEALTH_AGE_GET_REQUEST';
export interface HealthAgeGetRequest
  extends Action<typeof HEALTH_AGE_GET_REQUEST> {
  traversalId: string;
  conclusions: number[];
}
export const healthAgeGetRequest = (
  traversalId: string,
  conclusions: number[]
): HealthAgeGetRequest => ({
  type: HEALTH_AGE_GET_REQUEST,
  traversalId,
  conclusions,
});

export const HEALTH_AGE_GET_RESPONSE = 'HEALTH_AGE_GET_RESPONSE';
export interface HealthAgeGetResponse
  extends Action<typeof HEALTH_AGE_GET_RESPONSE> {
  healthAge: HealthAgeModel;
}
export const healthAgeGetResponse = (
  healthAge: HealthAgeModel
): HealthAgeGetResponse => ({
  type: HEALTH_AGE_GET_RESPONSE,
  healthAge,
});

export const WELLNESS_GET_REQUEST = 'WELLNESS_GET_REQUEST';
export interface WellnessGetRequest
  extends Action<typeof WELLNESS_GET_REQUEST> {
  traversalId: string;
  conclusions: number[];
}
export const wellnessGetRequest = (
  traversalId: string,
  conclusions: number[]
): WellnessGetRequest => ({
  type: WELLNESS_GET_REQUEST,
  traversalId,
  conclusions,
});

export const WELLNESS_GET_RESPONSE = 'WELLNESS_GET_RESPONSE';
export interface WellnessGetResponse
  extends Action<typeof WELLNESS_GET_RESPONSE> {
  wellness: WellnessModel;
}
export const wellnessGetResponse = (
  wellness: WellnessModel
): WellnessGetResponse => ({
  type: WELLNESS_GET_RESPONSE,
  wellness,
});

export const HRA_COMPARISONREPORT_GET_REQUEST =
  'HRA_COMPARISONREPORT_GET_REQUEST';
export interface HraComparisonReportGetRequest
  extends Action<typeof HRA_COMPARISONREPORT_GET_REQUEST> {
  currentTraversal: string;
  pastTraversal: string;
  riskAtAge: number;
}
export const hraComparisonReportGetRequest = (
  currentTraversal: string,
  pastTraversal: string,
  riskAtAge: number
): HraComparisonReportGetRequest => ({
  type: HRA_COMPARISONREPORT_GET_REQUEST,
  currentTraversal,
  pastTraversal,
  riskAtAge,
});

export const HRA_COMPARISONREPORT_GET_RESPONSE =
  'HRA_COMPARISONREPORT_GET_RESPONSE';
export interface HraComparisonReportGetResponse
  extends Action<typeof HRA_COMPARISONREPORT_GET_RESPONSE> {
  comparisonOutcome: HealthComparisonModel | null;
}
export const hraComparisonReportGetResponse = (
  comparisonOutcome: HealthComparisonModel | null
): HraComparisonReportGetResponse => ({
  type: HRA_COMPARISONREPORT_GET_RESPONSE,
  comparisonOutcome,
});

export const HRA_CONCLUSION_CHECK = 'HRA_CONCLUSION_CHECK';
export interface HraConclusionCheck
  extends Action<typeof HRA_CONCLUSION_CHECK> {
  id: number;
}
export const hraConclusionCheck = (id: number): HraConclusionCheck => ({
  type: HRA_CONCLUSION_CHECK,
  id,
});

export const HRA_CONCLUSION_UNCHECK = 'HRA_CONCLUSION_UNCHECK';
export interface HraConclusionUncheck
  extends Action<typeof HRA_CONCLUSION_UNCHECK> {
  id: number;
}
export const hraConclusionUncheck = (id: number): HraConclusionUncheck => ({
  type: HRA_CONCLUSION_UNCHECK,
  id,
});

export type HraAction =
  | HealthRisksGetRequest
  | HealthRisksGetResponse
  | HealthAgeGetRequest
  | HealthAgeGetResponse
  | WellnessGetRequest
  | WellnessGetResponse
  | HraComparisonReportGetRequest
  | HraComparisonReportGetResponse
  | HraConclusionCheck
  | HraConclusionUncheck;
