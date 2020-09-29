import { useDispatch } from 'react-redux';
import { SummaryCallbacks } from './SummaryCallbacks';
import { SummaryState } from '@doctorlink/traversal-core';
import {
  traversalSummaryGetResponse,
  traversalRevisitPostRequest,
  chatTraversalSummaryGetResponse,
  chatTraversalRevisitPostRequest,
} from '@doctorlink/traversal-redux';

export const useSummaryActions = (
  summary: SummaryState,
  chat = false
): SummaryCallbacks => {
  const getAction = chat
    ? chatTraversalSummaryGetResponse
    : traversalSummaryGetResponse;
  const dispatch = useDispatch();
  return {
    close: () => dispatch(getAction(null)),
    jump: chat
      ? (algoId: number, nodeId: number, assetId: number) =>
          dispatch(
            chatTraversalRevisitPostRequest(summary?.traversalId || '', {
              algoId,
              nodeId,
              assetId,
            })
          )
      : (algoId: number, nodeId: number) =>
          dispatch(
            traversalRevisitPostRequest(summary?.traversalId || '', {
              algoId,
              nodeId,
            })
          ),
  };
};
