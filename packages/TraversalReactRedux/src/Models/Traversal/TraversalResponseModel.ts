export interface TraversalResponseModel {
  traversalId: string;
  responses: TraversalResponseAnswer[] | null;
}

export interface TraversalResponseAnswer {
  nodeId: number;
  questionId: number;
  answerId: number;
  value: string;
}
