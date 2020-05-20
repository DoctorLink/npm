export interface HealthAssessmentModel {
  riskSummary: HealthRisksModel;
  healthAge: HealthAgeModel;
  wellness: WellnessModel;
  checkedConclusions: string[];
  comparisonReport: HealthComparisonModel;
}

export interface HealthRisksModel {
  loaded?: boolean;
  age: number | null;
  risks: any[];
  checkableConclusions: string[];
}

export interface HealthAgeModel {
  loaded?: boolean;
  age: number | null;
  healthAge: number | null;
  minimumHealthAge: number | null;
  checkableConclusions: string[];
}

export interface WellnessModel {
  loaded?: boolean;
  scores: any[];
  checkableConclusions: string[];
}

export interface HealthComparisonModel {
  loaded?: boolean;
  summary: any;
  currentSnapshot: any;
  previousSnapshot: any;
}
