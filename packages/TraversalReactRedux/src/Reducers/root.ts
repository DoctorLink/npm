import { combineReducers } from 'redux';

import traversalReducer from './Traversal';
import chatReducer from './Chat';
import conclusionReducer from './Conclusion';
import summaryReducer from './Summary';
import modalReducer from './Modal';
import healthAssessmentReducer from './HealthAssessment';
import clientProductsReducer from './Products';
import labelsReducer from './Labels';
import memberReferenceReducer from './Member';
import { TraversalRootState, ChatRootState } from 'Models';

const reducers = {
  traversal: traversalReducer,
  summary: summaryReducer,
  conclusion: conclusionReducer,
  modal: modalReducer,
  healthAssessment: healthAssessmentReducer,
  clientProducts: clientProductsReducer,
  labels: labelsReducer,
  memberReference: memberReferenceReducer,
};

export const rootTraversalReducer = combineReducers<TraversalRootState>(
  reducers
);

export const rootChatReducer = combineReducers<ChatRootState>({
  ...reducers,
  traversal: chatReducer,
});
