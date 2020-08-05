import { ReducersMapObject, Reducer, Action } from 'redux';
import { traversalReducer } from './Traversal';
import { chatReducer } from './Chat';
import { conclusionReducer } from './Conclusion';
import { summaryReducer } from './Summary';
import { modalReducer } from './Modal';
import { healthAssessmentReducer } from './HealthAssessment';
import {
  TraversalRootState,
  ChatTraversalRootState,
  HealthAssessmentState,
  TraversalState,
  ConclusionState,
  SummaryState,
  ChatTraversalState,
} from '@doctorlink/traversal-core';

const reducersMapObject = {
  summary: summaryReducer as Reducer<SummaryState, Action<any>>,
  conclusion: conclusionReducer as Reducer<ConclusionState, Action<any>>,
  healthAssessment: healthAssessmentReducer as Reducer<
    HealthAssessmentState,
    Action<any>
  >,
  modal: modalReducer,
};

export const traversalRootReducersMapObject: ReducersMapObject<TraversalRootState> = {
  traversal: traversalReducer as Reducer<TraversalState, Action<any>>,
  ...reducersMapObject,
};

export const chatRootReducersMapObject: ReducersMapObject<ChatTraversalRootState> = {
  traversal: chatReducer as Reducer<ChatTraversalState, Action<any>>,
  ...reducersMapObject,
};
