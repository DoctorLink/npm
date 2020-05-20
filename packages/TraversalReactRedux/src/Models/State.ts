import { TraversalModel, ChatModel } from './Traversal';
import { TraversalSummaryModel } from './Summary';
import { ConclusionModel } from './Conclusion';
import { ModalModel } from './Modal';
import { HealthAssessmentModel } from './HealthAssessment';
import { TraversalClientProducts } from './Product';
import { Labels } from './Labels';

export type TraversalState = TraversalModel & {
  loading: boolean;
  previous: boolean;
  minHeight?: number;
};

export type ChatState = ChatModel & {
  loading: boolean;
  minHeight?: number;
};

export type SummaryState = TraversalSummaryModel | null;
export type ConclusionState = ConclusionModel | null;
export type ModalState = ModalModel | null;

export interface BaseRootState {
  summary: SummaryState;
  conclusion: ConclusionState;
  modal: ModalState;
  healthAssessment: HealthAssessmentModel;
  clientProducts: TraversalClientProducts;
  labels: Labels;
  memberReference: string | null;
}

export interface TraversalRootState extends BaseRootState {
  traversal: TraversalState;
}

export interface ChatRootState extends BaseRootState {
  traversal: ChatState;
}

export type RootState = TraversalRootState | ChatRootState;
