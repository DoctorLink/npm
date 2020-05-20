import {
  TRAVERSAL_SUMMARY_SET,
  TRAVERSAL_START,
  TRAVERSAL_CONTINUE,
  TRAVERSAL_PREVIOUS,
  TRAVERSAL_NEXT,
  TraversalAction,
} from '../../Actions';
import { SummaryState } from 'Models';

const summary = (
  state: SummaryState = null,
  action: TraversalAction
): SummaryState => {
  switch (action.type) {
    case TRAVERSAL_START:
    case TRAVERSAL_CONTINUE:
    case TRAVERSAL_PREVIOUS:
    case TRAVERSAL_NEXT:
      return null;
    case TRAVERSAL_SUMMARY_SET:
      return action.summary;
    default:
      return state;
  }
};

export default summary;
