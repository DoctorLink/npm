import {
  TraversalsBaseCreate,
  TraversalsBaseRespond,
  TraversalsBaseRevisit,
} from '../traversalsBase';

export interface ChatTraversalsCreate extends TraversalsBaseCreate {}
export interface ChatTraversalsRespond extends TraversalsBaseRespond {}
export interface ChatTraversalsRevisit extends TraversalsBaseRevisit {
  assetId: number;
}

export interface ChatTraversalsResponseError {
  text: string;
  questionId: number;
}

export interface ChatTraversalsResponseAnswer {
  nodeId: number;
  questionId: number;
  answerId: number;
  controlType: string;
  controlValue: string;
  controlChecked: boolean;
  displayText: string;
  explanation: string;
  data: any;
}

export interface ChatTraversalsResponseQuestion {
  algoId: number;
  nodeId: number;
  questionId: number;
  displayText: string;
  title: string;
  explanation: string;
  data: any;
  answers: ChatTraversalsResponseAnswer[];
}

export interface ChatTraversalsResponse {
  traversalId: string;
  algoId: number;
  nodeId: number;
  assessmentType: number;
  completed: boolean;
  answerId: number;
  questions: ChatTraversalsResponseQuestion[];
  errors: ChatTraversalsResponseError[];
}
