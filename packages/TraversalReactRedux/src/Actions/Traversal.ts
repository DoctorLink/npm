import { MutableRefObject } from 'react';
import {
  TraversalOrChat,
  TraversalResponseModel,
  TraversalSummaryModel,
  ConclusionModel,
} from '../Models';

export const TRAVERSAL_MIN_HEIGHT = 'TRAVERSAL_MIN_HEIGHT';
export const setTraversalMinHeight = (minHeight: number): TraversalAction => ({
  type: TRAVERSAL_MIN_HEIGHT,
  minHeight,
});

export const TRAVERSAL_START = 'TRAVERSAL_START';
export const traversalStart = (
  productId: number,
  language?: string,
  release?: string,
  algoId?: number,
  nodeId?: number,
  injection?: any,
  memberReference?: string
) => ({
  type: TRAVERSAL_START,
  productId,
  language,
  release,
  algoId,
  nodeId,
  injection,
  memberReference,
});

export const TRAVERSAL_START_SET = 'TRAVERSAL_START_SET';
export const traversalStartSet = (
  traversal: TraversalOrChat
): TraversalAction => ({
  type: TRAVERSAL_START_SET,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_CONTINUE = 'TRAVERSAL_CONTINUE';
export const traversalContinue = (
  traversalId: string,
  containerRef?: MutableRefObject<any>
): TraversalAction => ({
  type: TRAVERSAL_CONTINUE,
  traversalId,
  containerRef,
});

export const TRAVERSAL_CONTINUE_SET = 'TRAVERSAL_CONTINUE_SET';
export const traversalContinueSet = (
  traversal: TraversalOrChat
): TraversalAction => ({
  type: TRAVERSAL_CONTINUE_SET,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_NEXT = 'TRAVERSAL_NEXT';
export const traversalNext = (
  traversalResponse: TraversalResponseModel,
  containerRef: MutableRefObject<any>
): TraversalAction => ({
  type: TRAVERSAL_NEXT,
  traversalResponse,
  containerRef,
});

export const TRAVERSAL_NEXT_SET = 'TRAVERSAL_NEXT_SET';
export const traversalNextSet = (
  traversal: TraversalOrChat
): TraversalAction => ({
  type: TRAVERSAL_NEXT_SET,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_PREVIOUS = 'TRAVERSAL_PREVIOUS';
export const traversalPrevious = (
  traversalId: string,
  algoId: string | null,
  nodeId: string | null,
  assetId: string | null,
  containerRef: MutableRefObject<any>
): TraversalAction => ({
  type: TRAVERSAL_PREVIOUS,
  traversalId,
  algoId: algoId,
  nodeId,
  assetId,
  containerRef,
});

export const TRAVERSAL_PREVIOUS_SET = 'TRAVERSAL_PREVIOUS_SET';
export const traversalPreviousSet = (
  traversal: TraversalOrChat
): TraversalAction => ({
  type: TRAVERSAL_PREVIOUS_SET,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_SUMMARY_GET = 'TRAVERSAL_SUMMARY_GET';
export const traversalSummaryGet = (traversalId: string): TraversalAction => ({
  type: TRAVERSAL_SUMMARY_GET,
  traversalId,
});

export const TRAVERSAL_SUMMARY_SET = 'TRAVERSAL_SUMMARY_SET';
export const traversalSummarySet = (
  summary: TraversalSummaryModel | null
): TraversalAction => ({
  type: TRAVERSAL_SUMMARY_SET,
  summary,
  receivedAt: new Date(),
});

export const TRAVERSAL_CONCLUSION_GET = 'TRAVERSAL_CONCLUSION_GET';
export const traversalConclusionGet = (
  traversalId: string
): TraversalAction => ({
  type: TRAVERSAL_CONCLUSION_GET,
  traversalId,
});

export const TRAVERSAL_CONCLUSION_SET = 'TRAVERSAL_CONCLUSION_SET';
export const traversalConclusionSet = (
  conclusion: ConclusionModel
): TraversalAction => ({
  type: TRAVERSAL_CONCLUSION_SET,
  conclusion,
  receivedAt: new Date(),
});

export const TRAVERSAL_SYMPTOM_REPORT_GET = 'TRAVERSAL_SYMPTOM_REPORT_GET';
export const traversalSymptomReportGet = (
  traversalId: string
): TraversalAction => ({
  type: TRAVERSAL_SYMPTOM_REPORT_GET,
  traversalId,
});

export const TOGGLE_RADIO = 'TOGGLE_RADIO';
export const toggleRadio = (
  id: string,
  answerIds: string[],
  checked?: boolean
): TraversalAction => ({ type: TOGGLE_RADIO, id, answerIds, checked });

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const toggleCheckbox = (
  id: string,
  answerIds: string[]
): TraversalAction => ({
  type: TOGGLE_CHECKBOX,
  id,
  answerIds,
});

export const UPDATE_TEXT = 'UPDATE_TEXT';
export const updateText = (
  id: string,
  answerIds: string[],
  value: string
): TraversalAction => ({
  type: UPDATE_TEXT,
  id,
  answerIds,
  value,
});

export type TraversalAction =
  | { type: typeof TRAVERSAL_MIN_HEIGHT; minHeight: number }
  | {
      type: typeof TRAVERSAL_START;
      algoId?: string;
      release?: string;
      lang?: string;
      nodeId?: string;
      injection?: string;
      memberReference?: string;
    }
  | {
      type: typeof TRAVERSAL_START_SET;
      traversal: TraversalOrChat;
      receivedAt: Date;
    }
  | {
      type: typeof TRAVERSAL_CONTINUE;
      traversalId: string;
      containerRef?: MutableRefObject<HTMLElement>;
    }
  | {
      type: typeof TRAVERSAL_CONTINUE_SET;
      traversal: TraversalOrChat;
      receivedAt: Date;
    }
  | {
      type: typeof TRAVERSAL_NEXT;
      traversalResponse: TraversalResponseModel;
      containerRef: MutableRefObject<HTMLElement>;
    }
  | {
      type: typeof TRAVERSAL_NEXT_SET;
      traversal: TraversalOrChat;
      receivedAt: Date;
    }
  | {
      type: typeof TRAVERSAL_PREVIOUS;
      traversalId: string;
      algoId: string | null;
      nodeId: string | null;
      assetId: string | null;
      containerRef: MutableRefObject<HTMLElement>;
    }
  | {
      type: typeof TRAVERSAL_PREVIOUS_SET;
      traversal: TraversalOrChat;
      receivedAt: Date;
    }
  | { type: typeof TRAVERSAL_SUMMARY_GET; traversalId: string }
  | {
      type: typeof TRAVERSAL_SUMMARY_SET;
      summary: TraversalSummaryModel | null;
      receivedAt: Date;
    }
  | { type: typeof TRAVERSAL_CONCLUSION_GET; traversalId: string }
  | {
      type: typeof TRAVERSAL_CONCLUSION_SET;
      conclusion: ConclusionModel;
      receivedAt: Date;
    }
  | { type: typeof TRAVERSAL_SYMPTOM_REPORT_GET; traversalId: string }
  | {
      type: typeof TOGGLE_RADIO;
      id: string;
      answerIds: string[];
      checked?: boolean;
    }
  | { type: typeof TOGGLE_CHECKBOX; id: string; answerIds: string[] }
  | {
      type: typeof UPDATE_TEXT;
      id: string;
      answerIds: string[];
      value: string;
    };
