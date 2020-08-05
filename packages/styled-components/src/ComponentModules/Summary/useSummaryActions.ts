import { useDispatch } from 'react-redux';
import { SummaryCallbacks } from './SummaryCallbacks';
import { SummaryState } from '@doctorlink/traversal-core';
import {
  traversalSummaryGetResponse,
  traversalRevisitPostRequest,
} from '@doctorlink/traversal-redux';

export const useSummaryActions = (summary: SummaryState): SummaryCallbacks => {
  const dispatch = useDispatch();
  return {
    close: () => dispatch(traversalSummaryGetResponse(null)),
    jump: (algoId: number, nodeId: number) =>
      dispatch(
        traversalRevisitPostRequest(summary?.traversalId || '', {
          algoId,
          nodeId,
        })
      ),
  };
};
