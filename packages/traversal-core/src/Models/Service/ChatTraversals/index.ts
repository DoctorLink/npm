import {
  TraversalsBaseCreate,
  TraversalsBaseRespond,
  TraversalsBaseRevisit,
  ControlType,
} from '../traversalsBase';

/**
 * Request Body for ChatTraversals POST method.
 */
export type ChatTraversalsCreate = TraversalsBaseCreate;

/**
 * Request Body for ChatTraversals respond POST method.
 */
export type ChatTraversalsRespond = TraversalsBaseRespond;

/**
 * Request Body for ChatTraversals revisit POST method.
 */
export interface ChatTraversalsRevisit extends TraversalsBaseRevisit {
  /**
   * The Asset ID to revisit.
   */
  assetId: number;
}

/**
 * ChatTraversal Response Error.
 */
export interface ChatTraversalsResponseError {
  text: string;
  questionId: number;
}

/**
 * ChatTraversal Response Answer.
 */
export interface ChatTraversalsResponseAnswer {
  nodeId: number;
  questionId: number;
  answerId: number;
  controlType: ControlType;
  controlValue: string;
  controlChecked: boolean;
  displayText: string;
  explanation: string;
  data: any;
}

/**
 * ChatTraversal Response Question.
 */
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

/**
 * ChatTraversal Response.
 */
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
