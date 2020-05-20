import {
  TRAVERSAL_CONCLUSION_SET,
  TRAVERSAL_START,
  TRAVERSAL_CONTINUE,
  TRAVERSAL_PREVIOUS,
  TRAVERSAL_NEXT,
  TraversalAction,
} from '../../Actions';
import { ConclusionState } from 'Models';

const conclusion = (
  state: ConclusionState = null,
  action: TraversalAction
): ConclusionState => {
  switch (action.type) {
    case TRAVERSAL_START:
    case TRAVERSAL_CONTINUE:
    case TRAVERSAL_PREVIOUS:
    case TRAVERSAL_NEXT:
      return null;
    case TRAVERSAL_CONCLUSION_SET:
      return action.conclusion;
    default:
      return state;
  }
};

export default conclusion;
