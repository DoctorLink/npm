import * as actions from '../../Actions/Traversal';
import answers from '../Answers';
import { MutableRefObject } from 'react';
import { TraversalState } from 'Models';

const containerHeight = (containerRef: MutableRefObject<HTMLElement>): number =>
  containerRef && containerRef.current && containerRef.current.clientHeight
    ? containerRef.current.clientHeight
    : 0;

const traversal = (
  state: TraversalState = {} as TraversalState,
  action: actions.TraversalAction
): TraversalState => {
  switch (action.type) {
    case actions.TRAVERSAL_MIN_HEIGHT:
      return { ...state, minHeight: 0 };
    case actions.TOGGLE_RADIO:
    case actions.TOGGLE_CHECKBOX:
    case actions.UPDATE_TEXT:
      return {
        ...state,
        answers: answers(state.answers, action),
      };
    case actions.TRAVERSAL_START:
    case actions.TRAVERSAL_CONTINUE:
      return {
        ...state,
        loading: true,
      };
    case actions.TRAVERSAL_NEXT:
    case actions.TRAVERSAL_PREVIOUS:
      return {
        ...state,
        loading: true,
        previous: action.type === actions.TRAVERSAL_PREVIOUS,
        minHeight: containerHeight(action.containerRef),
      };
    case actions.TRAVERSAL_START_SET:
    case actions.TRAVERSAL_CONTINUE_SET:
    case actions.TRAVERSAL_NEXT_SET:
    case actions.TRAVERSAL_PREVIOUS_SET:
      return {
        ...state,
        ...action.traversal,
        loading: false,
        answers: answers(action.traversal.answers, action),
      };
    default:
      return state;
  }
};

export default traversal;
