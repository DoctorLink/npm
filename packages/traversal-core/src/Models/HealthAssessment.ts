import { Conclusion } from './Conclusion';

export interface HealthAssessmentModel {
  riskSummary: HealthRisksModel;
  healthAge: HealthAgeModel;
  wellness: WellnessModel;
  checkedConclusions: number[];
  comparisonReport: HealthComparisonModel | null;
}

export interface HealthRisksModel {
  loaded?: boolean;
  age: number;
  risks: HealthRiskModel[];
  checkableConclusions: number[];
}

export interface HealthAgeModel {
  loaded?: boolean;
  age: number;
  healthAge: number;
  minimumHealthAge: number;
  checkableConclusions: number[];
}

export interface WellnessModel {
  loaded?: boolean;
  scores: WellnessScore[];
  checkableConclusions: number[];
}

export interface HealthComparisonModel {
  loaded?: boolean;
  summary: HealthComparisonSummary | null;
  currentSnapshot: HealthComparisonSnapshot | null;
  previousSnapshot: HealthComparisonSnapshot | null;
}

export interface HealthRiskModel {
  name: string;
  time: number;
  current: number;
  minimum: number;
}

export interface WellnessScore {
  name: string;
  score: number;
}

export interface HealthComparisonSummary {
  risk: Record<string, string>;
  wellness: Record<string, string>;
  myNumbers: Record<string, string>;
}

export interface HealthComparisonSnapshot {
  id: number;
  traversalId: string;
  memberRef: string | null;
  clientId: string | null;
  riskOutput: {
    age: number;
    healthAge: number;
    risks: HealthRiskModel[];
  };
  wellnessOutput: { scores: WellnessScore[] };
  myNumbers: Conclusion[];
  createdDate: string;
}
