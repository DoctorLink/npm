import * as actions from '../../Actions';
import answers from '../Answers';

const containerHeight = (containerRef: any) =>
  containerRef && containerRef.current && containerRef.current.clientHeight
    ? containerRef.current.clientHeight
    : 0;

const traversal = (state: any = null, action: any) => {
  switch (action.type) {
    case actions.TRAVERSAL_MIN_HEIGHT:
      if (state === null) return state;
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
    case actions.TRAVERSAL_NEXT:
    case actions.TRAVERSAL_PREVIOUS:
      if (state === null) return state;
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
        ...action.traversal,
        previous: state == null ? false : state.previous,
        loading: false,
        answers: answers(action.traversal.answers, action),
      };
    default:
      return state;
  }
};

export default traversal;
