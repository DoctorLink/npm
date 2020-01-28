import { combineReducers } from 'redux';

import traversalReducer from './Traversal';
import chatReducer from './Chat';
import conclusionReducer from './Conclusion';
import summaryReducer from './Summary';
import modalReducer from './Modal';
import healthAssessmentReducer from './HealthAssessment';
import clientProductsReducer from './Products';
import labelsReducer from './Labels';

const reducers = {
    traversal: traversalReducer, 
    summary: summaryReducer,
    conclusion: conclusionReducer,
    modal: modalReducer,
    healthAssessment: healthAssessmentReducer,
    clientProducts: clientProductsReducer,
    labels: labelsReducer,
}

export const rootTraversalReducer = combineReducers(reducers)

export const rootChatReducer = combineReducers({
    ...reducers,
    traversal: chatReducer
})