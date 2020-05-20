import {
  HealthAgeModel,
  HealthRisksModel,
  WellnessModel,
  HealthComparisonModel,
} from '../Models';

export const HEALTH_RISKS_GET = 'HEALTH_RISKS_GET';
export const healthRisksGet = (
  traversalId: string,
  ages: number[],
  conclusions: string[]
): HraAction => ({ type: HEALTH_RISKS_GET, traversalId, ages, conclusions });

export const HEALTH_RISKS_SET = 'HEALTH_RISKS_SET';
export const healthRisksSet = (healthRisks: HealthRisksModel): HraAction => ({
  type: HEALTH_RISKS_SET,
  healthRisks,
});

export const HEALTH_AGE_GET = 'HEALTH_AGE_GET';
export const healthAgeGet = (
  traversalId: string,
  conclusions: string[]
): HraAction => ({
  type: HEALTH_AGE_GET,
  traversalId,
  conclusions,
});

export const HEALTH_AGE_SET = 'HEALTH_AGE_SET';
export const healthAgeSet = (healthAge: HealthAgeModel): HraAction => ({
  type: HEALTH_AGE_SET,
  healthAge,
});

export const HRA_WELLNESS_GET = 'HRA_WELLNESS_GET';
export const hraWellnessGet = (
  traversalId: string,
  conclusions: string[]
): HraAction => ({
  type: HRA_WELLNESS_GET,
  traversalId,
  conclusions,
});

export const HRA_WELLNESS_SET = 'HRA_WELLNESS_SET';
export const hraWellnessSet = (wellness: WellnessModel): HraAction => ({
  type: HRA_WELLNESS_SET,
  wellness,
});

export const HRA_CHECK_CONCLUSION = 'HRA_CHECK_CONCLUSION';
export const checkConclusion = (id: string): HraAction => ({
  type: HRA_CHECK_CONCLUSION,
  id,
});

export const HRA_UNCHECK_CONCLUSION = 'HRA_UNCHECK_CONCLUSION';
export const uncheckConclusion = (id: string): HraAction => ({
  type: HRA_UNCHECK_CONCLUSION,
  id,
});

export const HRA_COMPARISONREPORT_GET = 'HRA_COMPARISONREPORT_GET';
export const hraComparisonReportGet = (
  currentTraversal: string,
  pastTraversal: string,
  riskAtAge: number
): HraAction => ({
  type: HRA_COMPARISONREPORT_GET,
  currentTraversal,
  pastTraversal,
  riskAtAge,
});

export const HRA_COMPARISONREPORT_SET = 'HRA_COMPARISONREPORT_SET';
export const hraComparisonReportSet = (comparisonOutcome: any): HraAction => ({
  type: HRA_COMPARISONREPORT_SET,
  comparisonOutcome,
});

export type HraAction =
  | {
      type: typeof HEALTH_RISKS_GET;
      traversalId: string;
      ages: number[];
      conclusions: string[];
    }
  | { type: typeof HEALTH_RISKS_SET; healthRisks: HealthRisksModel }
  | { type: typeof HEALTH_AGE_GET; traversalId: string; conclusions: string[] }
  | { type: typeof HEALTH_AGE_SET; healthAge: HealthAgeModel }
  | {
      type: typeof HRA_WELLNESS_GET;
      traversalId: string;
      conclusions: string[];
    }
  | { type: typeof HRA_WELLNESS_SET; wellness: WellnessModel }
  | { type: typeof HRA_CHECK_CONCLUSION; id: string }
  | { type: typeof HRA_UNCHECK_CONCLUSION; id: string }
  | {
      type: typeof HRA_COMPARISONREPORT_GET;
      currentTraversal: string;
      pastTraversal: string;
      riskAtAge: number;
    }
  | {
      type: typeof HRA_COMPARISONREPORT_SET;
      comparisonOutcome: HealthComparisonModel;
    };
