import {
  TraversalsBaseCreate,
  TraversalsBaseRespond,
  TraversalsBaseRevisit,
} from '../traversalsBase';

export type TraversalsCreate = TraversalsBaseCreate;
export type TraversalsRespond = TraversalsBaseRespond;
export type TraversalsRevisit = TraversalsBaseRevisit;

export interface TraversalsResponseAnswer {
  nodeId: number;
  questionId: number;
  answerId: number;
  controlType: string;
  controlValue?: string;
  controlChecked: boolean;
  displayText: string;
  explanation?: string;
  data?: any;
}

export interface TraversalsResponseQuestion {
  nodeId: number;
  questionId: number;
  displayText: string;
  title: string;
  explanation: string | null;
  data?: any;
  answers: TraversalsResponseAnswer[];
}

export interface TraversalsResponseError {
  questionId: number;
  text: string;
}

export interface TraversalsResponseNode {
  nodeId: number;
  assetId: number;
  displayText: string;
  title: string;
  explanation: string | null;
  data?: any;
  isTable: boolean;
  errors: TraversalsResponseError[];
  questions: TraversalsResponseQuestion[];
}

export interface TraversalsResponse {
  traversalId: string;
  algoId: number;
  assessmentType: number;
  algoName: string;
  language: string;
  previousDisabled: boolean;
  nextDisabled: boolean;
  errors: string[];
  nodes: TraversalsResponseNode[];
}
