import { Reducer } from 'redux';
import { ControlType, TraversalAnswer } from '@doctorlink/traversal-core';
import {
  TRAVERSAL_RADIO_TOGGLE,
  TRAVERSAL_CHECKBOX_TOGGLE,
  TRAVERSAL_VALUE_CHANGE,
  TraversalRadioToggle,
  TraversalCheckboxToggle,
  TraversalValueChange,
  TraversalAction,
  CHATTRAVERSAL_RADIO_TOGGLE,
  CHATTRAVERSAL_CHECKBOX_TOGGLE,
  CHATTRAVERSAL_VALUE_CHANGE,
  ChatTraversalRadioToggle,
  ChatTraversalCheckboxToggle,
  ChatTraversalValueChange,
  ChatTraversalAction,
} from '../../Actions';

const radio = (
  action: TraversalRadioToggle | ChatTraversalRadioToggle,
  state: Record<string, TraversalAnswer>
) => {
  action.answerIds.forEach((answerId) => {
    if (answerId === action.id)
      state[answerId] = {
        ...state[answerId],
        controlChecked: action.checked ? true : !state[answerId].controlChecked,
      };
    else
      state[answerId] = {
        ...state[answerId],
        controlChecked: false,
        controlValue: null,
      };
  });
  return state;
};

const checkbox = (
  action: TraversalCheckboxToggle | ChatTraversalCheckboxToggle,
  state: Record<string, TraversalAnswer>
) => {
  action.answerIds.forEach((answerId) => {
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
};

const value = (
  action: TraversalValueChange | ChatTraversalValueChange,
  state: Record<string, TraversalAnswer>
) => {
  action.answerIds.forEach((answerId) => {
    if (answerId === action.id)
      state[answerId] = {
        ...state[answerId],
        controlChecked: !!action.value,
        controlValue: action.value,
      };
    else if (
      ['Checkbox', 'Radio'].includes(state[answerId].controlType as ControlType)
    )
      state[answerId] = {
        ...state[answerId],
        controlChecked: false,
        controlValue: null,
      };
  });
  return state;
};

export const answersReducer: Reducer<
  Record<string, TraversalAnswer>,
  TraversalAction
> = (state = {} as Record<string, TraversalAnswer>, action) => {
  switch (action.type) {
    case TRAVERSAL_RADIO_TOGGLE:
      return radio(action, state);
    case TRAVERSAL_CHECKBOX_TOGGLE:
      return checkbox(action, state);
    case TRAVERSAL_VALUE_CHANGE:
      return value(action, state);
    default:
      return state;
  }
};

export const chatAnswersReducer: Reducer<
  Record<string, TraversalAnswer>,
  ChatTraversalAction
> = (state = {} as Record<string, TraversalAnswer>, action) => {
  switch (action.type) {
    case CHATTRAVERSAL_RADIO_TOGGLE:
      return radio(action, state);
    case CHATTRAVERSAL_CHECKBOX_TOGGLE:
      return checkbox(action, state);
    case CHATTRAVERSAL_VALUE_CHANGE:
      return value(action, state);
    default:
      return state;
  }
};
