import { TraversalModel, ChatModel } from './Traversal';
import { TraversalSummaryModel } from './Summary';
import { ConclusionModel } from './Conclusion';
import { ModalModel } from './Modal';
import { HealthAssessmentModel } from './HealthAssessment';

export type TraversalState = TraversalModel & {
  loading: boolean;
  previous: boolean;
};

export type ChatTraversalState = ChatModel & {
  loading: boolean;
};

export type SummaryState = TraversalSummaryModel | null;
export type ConclusionState = ConclusionModel | null;
export type ModalState = ModalModel | null;
export type HealthAssessmentState = HealthAssessmentModel;

export interface TraversalBaseRootState {
  summary: SummaryState;
  conclusion: ConclusionState;
  modal: ModalState;
  healthAssessment: HealthAssessmentState;
}

export interface TraversalRootState extends TraversalBaseRootState {
  traversal: TraversalState;
}

export interface ChatTraversalRootState extends TraversalBaseRootState {
  chatTraversal: ChatTraversalState;
}

export interface DualTraversalRootState extends TraversalBaseRootState {
  traversal: TraversalState;
  chatTraversal: ChatTraversalState;
}

export type RootState = TraversalRootState | ChatTraversalRootState;
