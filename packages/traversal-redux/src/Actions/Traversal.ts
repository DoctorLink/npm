import { Action } from 'redux';
import {
  TraversalsBaseCreate,
  TraversalsBaseRespond,
  TraversalsRevisit,
  ChatTraversalsRevisit,
  TraversalOrChat,
  SummaryQuestion,
} from '@doctorlink/traversal-core';

export const TRAVERSAL_POST_REQUEST = 'TRAVERSAL_POST_REQUEST';
export interface TraversalPostRequest
  extends Action<typeof TRAVERSAL_POST_REQUEST> {
  body: TraversalsBaseCreate;
}
export const traversalPostRequest = (
  body: TraversalsBaseCreate
): TraversalPostRequest => ({
  type: TRAVERSAL_POST_REQUEST,
  body,
});

export const TRAVERSAL_POST_RESPONSE = 'TRAVERSAL_POST_RESPONSE';
export interface TraversalPostResponse
  extends Action<typeof TRAVERSAL_POST_RESPONSE> {
  traversal: TraversalOrChat;
  receivedAt: Date;
}
export const traversalPostResponse = (
  traversal: TraversalOrChat
): TraversalPostResponse => ({
  type: TRAVERSAL_POST_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_GET_REQUEST = 'TRAVERSAL_GET_REQUEST';
export interface TraversalGetRequest
  extends Action<typeof TRAVERSAL_GET_REQUEST> {
  traversalId: string;
}
export const traversalGetRequest = (
  traversalId: string
): TraversalGetRequest => ({
  type: TRAVERSAL_GET_REQUEST,
  traversalId,
});

export const TRAVERSAL_GET_RESPONSE = 'TRAVERSAL_GET_RESPONSE';
export interface TraversalGetResponse
  extends Action<typeof TRAVERSAL_GET_RESPONSE> {
  traversal: TraversalOrChat;
  receivedAt: Date;
}
export const traversalGetResponse = (
  traversal: TraversalOrChat
): TraversalGetResponse => ({
  type: TRAVERSAL_GET_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_RESPOND_POST_REQUEST = 'TRAVERSAL_RESPOND_POST_REQUEST';
export interface TraversalRespondPostRequest
  extends Action<typeof TRAVERSAL_RESPOND_POST_REQUEST> {
  traversalId: string;
  body: TraversalsBaseRespond[];
}
export const traversalRespondPostRequest = (
  traversalId: string,
  body: TraversalsBaseRespond[]
): TraversalRespondPostRequest => ({
  type: TRAVERSAL_RESPOND_POST_REQUEST,
  traversalId,
  body,
});

export const TRAVERSAL_RESPOND_POST_RESPONSE =
  'TRAVERSAL_RESPOND_POST_RESPONSE';
export interface TraversalRespondPostResponse
  extends Action<typeof TRAVERSAL_RESPOND_POST_RESPONSE> {
  traversal: TraversalOrChat;
  receivedAt: Date;
}
export const traversalRespondPostResponse = (
  traversal: TraversalOrChat
): TraversalRespondPostResponse => ({
  type: TRAVERSAL_RESPOND_POST_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_REVISIT_POST_REQUEST = 'TRAVERSAL_REVISIT_POST_REQUEST';
export interface TraversalRevisitPostRequest
  extends Action<typeof TRAVERSAL_REVISIT_POST_REQUEST> {
  traversalId: string;
  body: TraversalsRevisit | ChatTraversalsRevisit;
}
export const traversalRevisitPostRequest = (
  traversalId: string,
  body: TraversalsRevisit | ChatTraversalsRevisit
): TraversalRevisitPostRequest => ({
  type: TRAVERSAL_REVISIT_POST_REQUEST,
  traversalId,
  body,
});

export const TRAVERSAL_REVISIT_POST_RESPONSE =
  'TRAVERSAL_REVISIT_POST_RESPONSE';
export interface TraversalRevisitPostResponse
  extends Action<typeof TRAVERSAL_REVISIT_POST_RESPONSE> {
  traversal: TraversalOrChat;
  receivedAt: Date;
}
export const traversalRevisitPostResponse = (
  traversal: TraversalOrChat
): TraversalRevisitPostResponse => ({
  type: TRAVERSAL_REVISIT_POST_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_PREVIOUS_POST_REQUEST =
  'TRAVERSAL_PREVIOUS_POST_REQUEST';
export interface TraversalPreviousPostRequest
  extends Action<typeof TRAVERSAL_PREVIOUS_POST_REQUEST> {
  traversalId: string;
}
export const traversalPreviousPostRequest = (
  traversalId: string
): TraversalPreviousPostRequest => ({
  type: TRAVERSAL_PREVIOUS_POST_REQUEST,
  traversalId,
});

export const TRAVERSAL_PREVIOUS_POST_RESPONSE =
  'TRAVERSAL_PREVIOUS_POST_RESPONSE';
export interface TraversalPreviousPostResponse
  extends Action<typeof TRAVERSAL_PREVIOUS_POST_RESPONSE> {
  traversal: TraversalOrChat;
  receivedAt: Date;
}
export const traversalPreviousPostResponse = (
  traversal: TraversalOrChat
): TraversalPreviousPostResponse => ({
  type: TRAVERSAL_PREVIOUS_POST_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const TRAVERSAL_SUMMARY_GET_REQUEST = 'TRAVERSAL_SUMMARY_GET_REQUEST';
export interface TraversalSummaryGetRequest
  extends Action<typeof TRAVERSAL_SUMMARY_GET_REQUEST> {
  traversalId: string;
}
export const traversalSummaryGetRequest = (
  traversalId: string
): TraversalSummaryGetRequest => ({
  type: TRAVERSAL_SUMMARY_GET_REQUEST,
  traversalId,
});

export const TRAVERSAL_SUMMARY_GET_RESPONSE = 'TRAVERSAL_SUMMARY_GET_RESPONSE';
export interface TraversalSummaryGetResponse
  extends Action<typeof TRAVERSAL_SUMMARY_GET_RESPONSE> {
  questions: SummaryQuestion[] | null;
  receivedAt: Date;
}
export const traversalSummaryGetResponse = (
  questions: SummaryQuestion[] | null
): TraversalSummaryGetResponse => ({
  type: TRAVERSAL_SUMMARY_GET_RESPONSE,
  questions,
  receivedAt: new Date(),
});

export const TRAVERSAL_CONCLUSIONS_GET_REQUEST =
  'TRAVERSAL_CONCLUSIONS_GET_REQUEST';
export interface TraversalConclusionsGetRequest
  extends Action<typeof TRAVERSAL_CONCLUSIONS_GET_REQUEST> {
  traversalId: string;
}
export const traversalConclusionsGetRequest = (
  traversalId: string
): TraversalConclusionsGetRequest => ({
  type: TRAVERSAL_CONCLUSIONS_GET_REQUEST,
  traversalId,
});

export const TRAVERSAL_CONCLUSIONS_GET_RESPONSE =
  'TRAVERSAL_CONCLUSIONS_GET_RESPONSE';
export interface TraversalConclusionsGetResponse
  extends Action<typeof TRAVERSAL_CONCLUSIONS_GET_RESPONSE> {
  conclusions: Array<any>;
  receivedAt: Date;
}
export const traversalConclusionsGetResponse = (
  conclusions: Array<any>
): TraversalConclusionsGetResponse => ({
  type: TRAVERSAL_CONCLUSIONS_GET_RESPONSE,
  conclusions,
  receivedAt: new Date(),
});

export const TRAVERSAL_CONCLUSION_REPORT_GET_REQUEST =
  'TRAVERSAL_CONCLUSION_REPORT_GET_REQUEST';
export interface TraversalConclusionReportGetRequest
  extends Action<typeof TRAVERSAL_CONCLUSION_REPORT_GET_REQUEST> {
  traversalId: string;
}
export const traversalConclusionReportGetRequest = (
  traversalId: string
): TraversalConclusionReportGetRequest => ({
  type: TRAVERSAL_CONCLUSION_REPORT_GET_REQUEST,
  traversalId,
});

export const TRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE =
  'TRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE';
export interface TraversalConclusionReportGetResponse
  extends Action<typeof TRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE> {
  report: any;
  receivedAt: Date;
}
export const traversalConclusionReportGetResponse = (
  report: any
): TraversalConclusionReportGetResponse => ({
  type: TRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE,
  report,
  receivedAt: new Date(),
});

export const TRAVERSAL_RADIO_TOGGLE = 'TRAVERSAL_RADIO_TOGGLE';
export interface TraversalRadioToggle
  extends Action<typeof TRAVERSAL_RADIO_TOGGLE> {
  id: string;
  answerIds: string[];
  checked?: boolean;
}
export const traversalRadioToggle = (
  id: string,
  answerIds: string[],
  checked?: boolean
): TraversalRadioToggle => ({
  type: TRAVERSAL_RADIO_TOGGLE,
  id,
  answerIds,
  checked,
});

export const TRAVERSAL_CHECKBOX_TOGGLE = 'TRAVERSAL_CHECKBOX_TOGGLE';
export interface TraversalCheckboxToggle
  extends Action<typeof TRAVERSAL_CHECKBOX_TOGGLE> {
  id: string;
  answerIds: string[];
}
export const traversalCheckboxToggle = (
  id: string,
  answerIds: string[]
): TraversalCheckboxToggle => ({
  type: TRAVERSAL_CHECKBOX_TOGGLE,
  id,
  answerIds,
});

export const TRAVERSAL_VALUE_CHANGE = 'TRAVERSAL_VALUE_CHANGE';
export interface TraversalValueChange
  extends Action<typeof TRAVERSAL_VALUE_CHANGE> {
  id: string;
  answerIds: string[];
  value: string;
}
export const traversalValueChange = (
  id: string,
  answerIds: string[],
  value: string
): TraversalAction => ({
  type: TRAVERSAL_VALUE_CHANGE,
  id,
  answerIds,
  value,
});

export type TraversalAction =
  | TraversalRadioToggle
  | TraversalCheckboxToggle
  | TraversalValueChange
  | TraversalPostRequest
  | TraversalPostResponse
  | TraversalGetRequest
  | TraversalGetResponse
  | TraversalRespondPostRequest
  | TraversalRespondPostResponse
  | TraversalRevisitPostRequest
  | TraversalRevisitPostResponse
  | TraversalPreviousPostRequest
  | TraversalPreviousPostResponse
  | TraversalSummaryGetRequest
  | TraversalSummaryGetResponse
  | TraversalConclusionsGetRequest
  | TraversalConclusionsGetResponse
  | TraversalConclusionReportGetRequest
  | TraversalConclusionReportGetResponse;
