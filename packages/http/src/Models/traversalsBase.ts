export interface InjectedHistory {
  traversalId?: string;
  assetId: number;
  answerId: number;
  value?: string;
  injectedHistoryType: 'preanswer' | 'prepopulate';
  isAnswered: boolean;
}

export interface TraversalsBaseCreate {
  productId: number;
  language?: string;
  release?: string;
  algoId?: number;
  nodeId?: number;
  memberReference?: string;
  injectedHistory?: InjectedHistory[];
}

export interface TraversalsBaseRespond {
  nodeId: number;
  questionId: number;
  answerId: number;
  value?: string;
}

export interface TraversalsBaseRevisit {
  nodeId: number;
  algoId: number;
}
