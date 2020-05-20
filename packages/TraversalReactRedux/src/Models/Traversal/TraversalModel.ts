interface TraversalBaseModel {
  traversalId: string;
  algoId: number;
  assessmentType: AssessmentType;
  questions: Record<string, TraversalQuestion>;
  answers: Record<string, TraversalAnswer>;
  errors: Record<string, TraversalError>;
}

export interface TraversalModel extends TraversalBaseModel {
  algoName: string;
  collectionErrors: Array<string>;
  previousDisabled: boolean;
  nextDisabled: boolean;
  language: string;
  nodeIds: Array<number>;
  nodes: Record<string, TraversalNode>;
}

export interface ChatModel extends TraversalBaseModel {
  completed: boolean;
  questionIds: Array<string>;
}

export type TraversalOrChat = TraversalModel | ChatModel;

export interface TraversalNode {
  nodeId: number;
  assetId: number;
  displayText: string;
  questions: Array<string>;
}

export interface TraversalQuestion {
  nodeId: number;
  questionId: number;
  displayText: string;
  title: string | null;
  explanation: string | null;
  data: Record<string, any>;
  answers: Array<string>;
}

export interface TraversalAnswer {
  nodeId: number;
  questionId: number;
  answerId: number;
  displayText: string;
  explanation?: string | null;
  controlType?: ControlType;
  controlValue?: string | null;
  controlChecked?: boolean;
}

export type ControlType = 'Checkbox' | 'Radio' | 'Number' | 'Date' | 'Text';

export interface TraversalError {
  questionId: number;
  text: string;
}

export enum AssessmentType {
  SymptomChecker = 1,
  HealthAssessment = 2,
}
