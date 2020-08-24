export interface Conclusion {
  assetId: number;
  silent: boolean;
  displayText: string;
  clinicalText: string;
  category1: string;
  category2: string;
  subCategory: string;
  explanation: string;
  moreDetail: string;
  bullets: ConclusionBullet[];
}

export interface NumberConclusion extends Conclusion {
  value: string; // string not number because it could be '?' if unknown.
  color: string;
}

export interface ConclusionBullet {
  bulletId: number;
  bulletUniqueId: number;
  displayText: string;
}

export interface ConclusionModel {
  traversalId?: string;
  conclusions?: Array<Conclusion>;
  symptomReport?: any;
}
