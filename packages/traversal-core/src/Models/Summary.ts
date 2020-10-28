export interface TraversalSummaryModel {
  traversalId: string;
  questions: SummaryQuestion[] | null;
}

export interface SummaryQuestion {
  algoId: number;
  nodeId: number;
  assetId: number;
  groupId: number;
  displayText: string;
  summaryText: string;
  clinicalText: string;
  nodeType: string;
  nodeTypeId: number;
  answers: SummaryAnswer[];
}

export interface SummaryAnswer {
  id: string;
  traversalId: string;
  algoId: number;
  groupId: number;
  nodeId: number;
  assetId: number;
  nodeType: string;
  nodeTypeId: number;
  answerId: number;
  nextNodeId: number;
  value: string | null;
  counter: number;
  previousCounter: number;
  createdDateTime: string;
  displayText: string;
  summaryText: string;
  clinicalText: string;
  isAnswered: boolean;
}
