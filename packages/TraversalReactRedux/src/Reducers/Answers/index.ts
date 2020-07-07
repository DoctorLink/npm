import { Reducer } from 'redux';
import {
  TraversalAction,
  TRAVERSAL_RADIO_TOGGLE,
  TRAVERSAL_CHECKBOX_TOGGLE,
  TRAVERSAL_VALUE_CHANGE,
} from '../../Actions';
import { TraversalAnswer } from '.../../Models';

export const answersReducer: Reducer<
  Record<string, TraversalAnswer>,
  TraversalAction
> = (state = {} as Record<string, TraversalAnswer>, action) => {
  switch (action.type) {
    case TRAVERSAL_RADIO_TOGGLE:
      action.answerIds.forEach(answerId => {
        if (answerId === action.id)
          state[answerId] = {
            ...state[answerId],
            controlChecked: action.checked
              ? true
              : !state[answerId].controlChecked,
          };
        else
          state[answerId] = {
            ...state[answerId],
            controlChecked: false,
            controlValue: null,
          };
      });
      return state;
    case TRAVERSAL_CHECKBOX_TOGGLE:
      action.answerIds.forEach(answerId => {
        if (answerId === action.id)
          state[answerId] = {
            ...state[answerId],
            controlChecked: !state[answerId].controlChecked,
          };
        else if (state[answerId].controlType !== 'Checkbox')
          state[answerId] = {
            ...state[answerId],
            controlChecked: false,
            controlValue: null,
          };
      });
      return state;
    case TRAVERSAL_VALUE_CHANGE:
      action.answerIds.forEach(answerId => {
        if (answerId === action.id)
          state[answerId] = {
            ...state[answerId],
            controlChecked: !!action.value,
            controlValue: action.value,
          };
        else if (
          !['Text', 'Number', 'Date'].includes(state[answerId].controlType!)
        )
          state[answerId] = {
            ...state[answerId],
            controlChecked: false,
            controlValue: null,
          };
      });
      return state;
    default:
      return state;
  }
};
