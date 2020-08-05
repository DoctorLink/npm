import { TraversalAction } from './Traversal';
import { HraAction } from './HealthAssessment';
import { ModalAction } from './Modal';

export type BaseRootActions = TraversalAction | HraAction | ModalAction;
