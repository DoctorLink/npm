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
  truncated: string;
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

export interface SymptomReportModel {
  highestPriority: number;
  symptomConclusions: Conclusion[];
  reasonConclusionTitle: string;
  reasonConclusions: Conclusion[];
  otherConclusionTitle: string;
  otherConclusions: Conclusion[];
  informationConclusionTitle: string;
  informationConclusions: Conclusion[];
  contactBulletTitle: string;
  contactBullets: ConclusionBullet[];
  dangerBulletTitle: string;
  dangerBullets: ConclusionBullet[];
  reasonBulletTitle: string;
  reasonBullets: ConclusionBullet[];
  mainBullets: ConclusionBullet[];
  reasonCategory: string;
  reasonSubCat1: string;
  reasonDisposition: string;
  messageTitle: string;
  messageLevel: number;
  messageDescription: string;
  reasonTimeInMinutes: number;
}

export interface ConclusionModel {
  traversalId?: string;
  conclusions?: Array<Conclusion>;
  symptomReport?: SymptomReportModel;
}
