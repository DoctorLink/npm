import { Reducer } from 'redux';
import {
  TraversalAction,
  TRAVERSAL_RADIO_TOGGLE,
  TRAVERSAL_CHECKBOX_TOGGLE,
  TRAVERSAL_VALUE_CHANGE,
  TRAVERSAL_POST_REQUEST,
  TRAVERSAL_GET_REQUEST,
  TRAVERSAL_RESPOND_POST_REQUEST,
  TRAVERSAL_REVISIT_POST_REQUEST,
  TRAVERSAL_POST_RESPONSE,
  TRAVERSAL_GET_RESPONSE,
  TRAVERSAL_RESPOND_POST_RESPONSE,
  TRAVERSAL_REVISIT_POST_RESPONSE,
  TRAVERSAL_PREVIOUS_POST_REQUEST,
  TRAVERSAL_PREVIOUS_POST_RESPONSE,
} from '../../Actions/Traversal';
import { TraversalState } from '../../Models';
import { answersReducer } from '../Answers';

export type TraversalReducer = Reducer<TraversalState, TraversalAction>;

export const traversalReducer: TraversalReducer = (
  state = {} as TraversalState,
  action
) => {
  switch (action.type) {
    case TRAVERSAL_RADIO_TOGGLE:
    case TRAVERSAL_CHECKBOX_TOGGLE:
    case TRAVERSAL_VALUE_CHANGE:
      return {
        ...state,
        answers: answersReducer(state.answers, action),
      };
    case TRAVERSAL_POST_REQUEST:
    case TRAVERSAL_GET_REQUEST:
    case TRAVERSAL_RESPOND_POST_REQUEST:
      return {
        ...state,
        loading: true,
        previous: false,
      };
    case TRAVERSAL_REVISIT_POST_REQUEST:
    case TRAVERSAL_PREVIOUS_POST_REQUEST:
      return {
        ...state,
        loading: true,
        previous: true,
      };
    case TRAVERSAL_POST_RESPONSE:
    case TRAVERSAL_GET_RESPONSE:
    case TRAVERSAL_RESPOND_POST_RESPONSE:
    case TRAVERSAL_REVISIT_POST_RESPONSE:
    case TRAVERSAL_PREVIOUS_POST_RESPONSE:
      return {
        ...state,
        ...action.traversal,
        loading: false,
        answers: answersReducer(action.traversal.answers, action),
      };
    default:
      return state;
  }
};

export const traversalReducerMapObject = {
  traversal: traversalReducer,
};
