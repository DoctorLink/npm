import { Reducer } from 'redux';
import { ConclusionState } from '@doctorlink/traversal-core';
import {
  TraversalAction,
  TRAVERSAL_CONCLUSIONS_GET_RESPONSE,
  TRAVERSAL_POST_REQUEST,
  TRAVERSAL_GET_REQUEST,
  TRAVERSAL_REVISIT_POST_REQUEST,
  TRAVERSAL_RESPOND_POST_REQUEST,
  TRAVERSAL_CONCLUSIONS_GET_REQUEST,
  TRAVERSAL_CONCLUSION_REPORT_GET_REQUEST,
  TRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE,
} from '../../Actions';

export type ConclusionReducer = Reducer<ConclusionState, TraversalAction>;

export const conclusionReducer: ConclusionReducer = (state = null, action) => {
  switch (action.type) {
    case TRAVERSAL_POST_REQUEST:
    case TRAVERSAL_GET_REQUEST:
    case TRAVERSAL_REVISIT_POST_REQUEST:
    case TRAVERSAL_RESPOND_POST_REQUEST:
      return null;
    case TRAVERSAL_CONCLUSION_REPORT_GET_REQUEST:
    case TRAVERSAL_CONCLUSIONS_GET_REQUEST:
      return { traversalId: action.traversalId };
    case TRAVERSAL_CONCLUSIONS_GET_RESPONSE:
      return action.conclusions == null || state == null
        ? null
        : { traversalId: state.traversalId, conclusions: action.conclusions };
    case TRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE:
      return action.report == null || state == null
        ? null
        : { traversalId: state.traversalId, symptomReport: action.report };
    default:
      return state;
  }
};

export const conclusionReducerMapObject = {
  conclusion: conclusionReducer,
};
