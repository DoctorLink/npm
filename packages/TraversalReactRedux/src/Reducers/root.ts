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

export const rootTraversalReducer = combineReducers(reducers);

export const rootChatReducer = combineReducers({
  ...reducers,
  traversal: chatReducer,
});
