import { Reducer } from 'redux';
import { SummaryState } from '@doctorlink/traversal-core';
import {
  TraversalAction,
  TRAVERSAL_SUMMARY_GET_REQUEST,
  TRAVERSAL_SUMMARY_GET_RESPONSE,
  TRAVERSAL_POST_REQUEST,
  TRAVERSAL_GET_REQUEST,
  TRAVERSAL_REVISIT_POST_REQUEST,
  TRAVERSAL_RESPOND_POST_REQUEST,
} from '../../Actions';

export type SummaryReducer = Reducer<SummaryState, TraversalAction>;

export const summaryReducer: SummaryReducer = (state = null, action) => {
  switch (action.type) {
    case TRAVERSAL_POST_REQUEST:
    case TRAVERSAL_GET_REQUEST:
    case TRAVERSAL_REVISIT_POST_REQUEST:
    case TRAVERSAL_RESPOND_POST_REQUEST:
      return null;
    case TRAVERSAL_SUMMARY_GET_REQUEST:
      return { traversalId: action.traversalId, questions: null };
    case TRAVERSAL_SUMMARY_GET_RESPONSE:
      return action.questions == null || state == null
        ? null
        : { traversalId: state.traversalId, questions: action.questions };
    default:
      return state;
  }
};

export const summaryReducerMapObject = {
  summary: summaryReducer,
};
