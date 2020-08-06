import {
  TraversalsBaseCreate,
  TraversalsBaseRespond,
  TraversalsBaseRevisit,
  ControlType,
} from '../traversalsBase';

/**
 * Request Body for Traversals POST method.
 */
export type TraversalsCreate = TraversalsBaseCreate;

/**
 * Request Body for Traversals respond POST method.
 */
export type TraversalsRespond = TraversalsBaseRespond;

/**
 * Request Body for Traversals revisit POST method.
 */
export type TraversalsRevisit = TraversalsBaseRevisit;

/**
 * Traversal Response Answer.
 */
export interface TraversalsResponseAnswer {
  nodeId: number;
  questionId: number;
  answerId: number;
  controlType: ControlType;
  controlValue?: string;
  controlChecked: boolean;
  displayText: string;
  explanation?: string;
  data?: any;
}

/**
 * Traversal Response Question.
 */
export interface TraversalsResponseQuestion {
  nodeId: number;
  questionId: number;
  displayText: string;
  title: string;
  explanation: string | null;
  data?: any;
  answers: TraversalsResponseAnswer[];
}

/**
 * Traversal Response Error.
 */
export interface TraversalsResponseError {
  questionId: number;
  text: string;
}

/**
 * Traversal Response Node.
 */
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

/**
 * Traversal Response.
 */
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
