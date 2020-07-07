import { useDispatch } from 'react-redux';
import * as actions from '../../Actions';
import { SummaryCallbacks } from './SummaryCallbacks';
import { SummaryState } from '../../Models';

export const useSummaryActions = (summary: SummaryState): SummaryCallbacks => {
  const dispatch = useDispatch();
  return {
    close: () => dispatch(actions.traversalSummaryGetResponse(null)),
    jump: (algoId: number, nodeId: number) =>
      dispatch(
        actions.traversalRevisitPostRequest(summary?.traversalId || '', {
          algoId,
          nodeId,
        })
      ),
  };
};
