import { Action } from 'redux';
import {
  ChatTraversalsCreate,
  ChatTraversalsRespond,
  ChatTraversalsRevisit,
  ChatModel,
  SummaryQuestion,
} from '@doctorlink/traversal-core';

export const CHATTRAVERSAL_SET_BASE_URL = 'CHATTRAVERSAL_SET_BASE_URL';
export interface ChatTraversalSetBaseUrl
  extends Action<typeof CHATTRAVERSAL_SET_BASE_URL> {
  baseUrl: string;
}
export const chatTraversalSetBaseUrl = (
  baseUrl: string
): ChatTraversalSetBaseUrl => ({
  type: CHATTRAVERSAL_SET_BASE_URL,
  baseUrl,
});

export const CHATTRAVERSAL_POST_REQUEST = 'CHATTRAVERSAL_POST_REQUEST';
export interface ChatTraversalPostRequest
  extends Action<typeof CHATTRAVERSAL_POST_REQUEST> {
  body: ChatTraversalsCreate;
}
export const chatTraversalPostRequest = (
  body: ChatTraversalsCreate
): ChatTraversalPostRequest => ({
  type: CHATTRAVERSAL_POST_REQUEST,
  body,
});

export const CHATTRAVERSAL_POST_RESPONSE = 'CHATTRAVERSAL_POST_RESPONSE';
export interface ChatTraversalPostResponse
  extends Action<typeof CHATTRAVERSAL_POST_RESPONSE> {
  traversal: ChatModel;
  receivedAt: Date;
}
export const chatTraversalPostResponse = (
  traversal: ChatModel
): ChatTraversalPostResponse => ({
  type: CHATTRAVERSAL_POST_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const CHATTRAVERSAL_GET_REQUEST = 'CHATTRAVERSAL_GET_REQUEST';
export interface ChatTraversalGetRequest
  extends Action<typeof CHATTRAVERSAL_GET_REQUEST> {
  traversalId: string;
}
export const chatTraversalGetRequest = (
  traversalId: string
): ChatTraversalGetRequest => ({
  type: CHATTRAVERSAL_GET_REQUEST,
  traversalId,
});

export const CHATTRAVERSAL_GET_RESPONSE = 'CHATTRAVERSAL_GET_RESPONSE';
export interface ChatTraversalGetResponse
  extends Action<typeof CHATTRAVERSAL_GET_RESPONSE> {
  traversal: ChatModel;
  receivedAt: Date;
}
export const chatTraversalGetResponse = (
  traversal: ChatModel
): ChatTraversalGetResponse => ({
  type: CHATTRAVERSAL_GET_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const CHATTRAVERSAL_RESPOND_POST_REQUEST =
  'CHATTRAVERSAL_RESPOND_POST_REQUEST';
export interface ChatTraversalRespondPostRequest
  extends Action<typeof CHATTRAVERSAL_RESPOND_POST_REQUEST> {
  traversalId: string;
  body: ChatTraversalsRespond[];
}
export const chatTraversalRespondPostRequest = (
  traversalId: string,
  body: ChatTraversalsRespond[]
): ChatTraversalRespondPostRequest => ({
  type: CHATTRAVERSAL_RESPOND_POST_REQUEST,
  traversalId,
  body,
});

export const CHATTRAVERSAL_RESPOND_POST_RESPONSE =
  'CHATTRAVERSAL_RESPOND_POST_RESPONSE';
export interface ChatTraversalRespondPostResponse
  extends Action<typeof CHATTRAVERSAL_RESPOND_POST_RESPONSE> {
  traversal: ChatModel;
  receivedAt: Date;
}
export const chatTraversalRespondPostResponse = (
  traversal: ChatModel
): ChatTraversalRespondPostResponse => ({
  type: CHATTRAVERSAL_RESPOND_POST_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const CHATTRAVERSAL_REVISIT_POST_REQUEST =
  'CHATTRAVERSAL_REVISIT_POST_REQUEST';
export interface ChatTraversalRevisitPostRequest
  extends Action<typeof CHATTRAVERSAL_REVISIT_POST_REQUEST> {
  traversalId: string;
  body: ChatTraversalsRevisit;
}
export const chatTraversalRevisitPostRequest = (
  traversalId: string,
  body: ChatTraversalsRevisit
): ChatTraversalRevisitPostRequest => ({
  type: CHATTRAVERSAL_REVISIT_POST_REQUEST,
  traversalId,
  body,
});

export const CHATTRAVERSAL_REVISIT_POST_RESPONSE =
  'CHATTRAVERSAL_REVISIT_POST_RESPONSE';
export interface ChatTraversalRevisitPostResponse
  extends Action<typeof CHATTRAVERSAL_REVISIT_POST_RESPONSE> {
  traversal: ChatModel;
  receivedAt: Date;
}
export const chatTraversalRevisitPostResponse = (
  traversal: ChatModel
): ChatTraversalRevisitPostResponse => ({
  type: CHATTRAVERSAL_REVISIT_POST_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const CHATTRAVERSAL_PREVIOUS_POST_REQUEST =
  'CHATTRAVERSAL_PREVIOUS_POST_REQUEST';
export interface ChatTraversalPreviousPostRequest
  extends Action<typeof CHATTRAVERSAL_PREVIOUS_POST_REQUEST> {
  traversalId: string;
}
export const chatTraversalPreviousPostRequest = (
  traversalId: string
): ChatTraversalPreviousPostRequest => ({
  type: CHATTRAVERSAL_PREVIOUS_POST_REQUEST,
  traversalId,
});

export const CHATTRAVERSAL_PREVIOUS_POST_RESPONSE =
  'CHATTRAVERSAL_PREVIOUS_POST_RESPONSE';
export interface ChatTraversalPreviousPostResponse
  extends Action<typeof CHATTRAVERSAL_PREVIOUS_POST_RESPONSE> {
  traversal: ChatModel;
  receivedAt: Date;
}
export const chatTraversalPreviousPostResponse = (
  traversal: ChatModel
): ChatTraversalPreviousPostResponse => ({
  type: CHATTRAVERSAL_PREVIOUS_POST_RESPONSE,
  traversal,
  receivedAt: new Date(),
});

export const CHATTRAVERSAL_SUMMARY_GET_REQUEST =
  'CHATTRAVERSAL_SUMMARY_GET_REQUEST';
export interface ChatTraversalSummaryGetRequest
  extends Action<typeof CHATTRAVERSAL_SUMMARY_GET_REQUEST> {
  traversalId: string;
}
export const chatTraversalSummaryGetRequest = (
  traversalId: string
): ChatTraversalSummaryGetRequest => ({
  type: CHATTRAVERSAL_SUMMARY_GET_REQUEST,
  traversalId,
});

export const CHATTRAVERSAL_SUMMARY_GET_RESPONSE =
  'CHATTRAVERSAL_SUMMARY_GET_RESPONSE';
export interface ChatTraversalSummaryGetResponse
  extends Action<typeof CHATTRAVERSAL_SUMMARY_GET_RESPONSE> {
  questions: SummaryQuestion[] | null;
  receivedAt: Date;
}
export const chatTraversalSummaryGetResponse = (
  questions: SummaryQuestion[] | null
): ChatTraversalSummaryGetResponse => ({
  type: CHATTRAVERSAL_SUMMARY_GET_RESPONSE,
  questions,
  receivedAt: new Date(),
});

export const CHATTRAVERSAL_CONCLUSIONS_GET_REQUEST =
  'CHATTRAVERSAL_CONCLUSIONS_GET_REQUEST';
export interface ChatTraversalConclusionsGetRequest
  extends Action<typeof CHATTRAVERSAL_CONCLUSIONS_GET_REQUEST> {
  traversalId: string;
}
export const chatTraversalConclusionsGetRequest = (
  traversalId: string
): ChatTraversalConclusionsGetRequest => ({
  type: CHATTRAVERSAL_CONCLUSIONS_GET_REQUEST,
  traversalId,
});

export const CHATTRAVERSAL_CONCLUSIONS_GET_RESPONSE =
  'CHATTRAVERSAL_CONCLUSIONS_GET_RESPONSE';
export interface ChatTraversalConclusionsGetResponse
  extends Action<typeof CHATTRAVERSAL_CONCLUSIONS_GET_RESPONSE> {
  conclusions: Array<any>;
  receivedAt: Date;
}
export const chatTraversalConclusionsGetResponse = (
  conclusions: Array<any>
): ChatTraversalConclusionsGetResponse => ({
  type: CHATTRAVERSAL_CONCLUSIONS_GET_RESPONSE,
  conclusions,
  receivedAt: new Date(),
});

export const CHATTRAVERSAL_CONCLUSION_REPORT_GET_REQUEST =
  'CHATTRAVERSAL_CONCLUSION_REPORT_GET_REQUEST';
export interface ChatTraversalConclusionReportGetRequest
  extends Action<typeof CHATTRAVERSAL_CONCLUSION_REPORT_GET_REQUEST> {
  traversalId: string;
}
export const chatTraversalConclusionReportGetRequest = (
  traversalId: string
): ChatTraversalConclusionReportGetRequest => ({
  type: CHATTRAVERSAL_CONCLUSION_REPORT_GET_REQUEST,
  traversalId,
});

export const CHATTRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE =
  'CHATTRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE';
export interface ChatTraversalConclusionReportGetResponse
  extends Action<typeof CHATTRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE> {
  report: any;
  receivedAt: Date;
}
export const chatTraversalConclusionReportGetResponse = (
  report: any
): ChatTraversalConclusionReportGetResponse => ({
  type: CHATTRAVERSAL_CONCLUSION_REPORT_GET_RESPONSE,
  report,
  receivedAt: new Date(),
});

export const CHATTRAVERSAL_RADIO_TOGGLE = 'CHATTRAVERSAL_RADIO_TOGGLE';
export interface ChatTraversalRadioToggle
  extends Action<typeof CHATTRAVERSAL_RADIO_TOGGLE> {
  id: string;
  answerIds: string[];
  checked?: boolean;
}
export const chatTraversalRadioToggle = (
  id: string,
  answerIds: string[],
  checked?: boolean
): ChatTraversalRadioToggle => ({
  type: CHATTRAVERSAL_RADIO_TOGGLE,
  id,
  answerIds,
  checked,
});

export const CHATTRAVERSAL_CHECKBOX_TOGGLE = 'CHATTRAVERSAL_CHECKBOX_TOGGLE';
export interface ChatTraversalCheckboxToggle
  extends Action<typeof CHATTRAVERSAL_CHECKBOX_TOGGLE> {
  id: string;
  answerIds: string[];
}
export const chatTraversalCheckboxToggle = (
  id: string,
  answerIds: string[]
): ChatTraversalCheckboxToggle => ({
  type: CHATTRAVERSAL_CHECKBOX_TOGGLE,
  id,
  answerIds,
});

export const CHATTRAVERSAL_VALUE_CHANGE = 'CHATTRAVERSAL_VALUE_CHANGE';
export interface ChatTraversalValueChange
  extends Action<typeof CHATTRAVERSAL_VALUE_CHANGE> {
  id: string;
  answerIds: string[];
  value: string;
}
export const chatTraversalValueChange = (
  id: string,
  answerIds: string[],
  value: string
): ChatTraversalAction => ({
  type: CHATTRAVERSAL_VALUE_CHANGE,
  id,
  answerIds,
  value,
});

export type ChatTraversalAction =
  | ChatTraversalRadioToggle
  | ChatTraversalCheckboxToggle
  | ChatTraversalValueChange
  | ChatTraversalPostRequest
  | ChatTraversalPostResponse
  | ChatTraversalGetRequest
  | ChatTraversalGetResponse
  | ChatTraversalRespondPostRequest
  | ChatTraversalRespondPostResponse
  | ChatTraversalRevisitPostRequest
  | ChatTraversalRevisitPostResponse
  | ChatTraversalPreviousPostRequest
  | ChatTraversalPreviousPostResponse
  | ChatTraversalSummaryGetRequest
  | ChatTraversalSummaryGetResponse
  | ChatTraversalConclusionsGetRequest
  | ChatTraversalConclusionsGetResponse
  | ChatTraversalConclusionReportGetRequest
  | ChatTraversalConclusionReportGetResponse;
