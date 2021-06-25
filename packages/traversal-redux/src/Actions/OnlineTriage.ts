import { Action } from 'redux';
import { AlgoSearchModel } from '../../../traversal-core/lib';

export const OT_SET_BASE_URL = 'OT_SET_BASE_URL';
export interface OnlineTriageSetBaseUrl extends Action<typeof OT_SET_BASE_URL> {
  baseUrl: string;
}
export const onlineTriageSetBaseUrl = (
  baseUrl: string
): OnlineTriageSetBaseUrl => ({
  type: OT_SET_BASE_URL,
  baseUrl,
});

export const ALGO_SEARCH_DATA_GET_REQUEST = 'ALGO_SEARCH_DATA_GET_REQUEST';

export interface AlgoSearchDataGetRequest
  extends Action<typeof ALGO_SEARCH_DATA_GET_REQUEST> {
  answerId: string;
}

export const algoSearchDataGetRequest = (
  answerId: string
): AlgoSearchDataGetRequest => ({
  type: ALGO_SEARCH_DATA_GET_REQUEST,
  answerId,
});

export const ALGO_SEARCH_DATA_GET_RESPONSE = 'ALGO_SEARCH_DATA_GET_RESPONSE';

export interface AlgoSearchDataGetResponse
  extends Action<typeof ALGO_SEARCH_DATA_GET_RESPONSE> {
  answerId: string;
  algos: AlgoSearchModel[];
}

export const algoSearchDataGetResponse = (
  answerId: string,
  algos: AlgoSearchModel[]
): AlgoSearchDataGetResponse => ({
  type: ALGO_SEARCH_DATA_GET_RESPONSE,
  answerId,
  algos,
});
