import { ForkEffect } from 'redux-saga/effects';
import {
  TraversalsBaseService,
  SummaryQuestion,
} from '@doctorlink/traversal-core';
import { BaseServiceSagas } from './BaseServiceSagas';
import {
  TRAVERSAL_SUMMARY_GET_REQUEST,
  TRAVERSAL_CONCLUSIONS_GET_REQUEST,
  TRAVERSAL_CONCLUSION_REPORT_GET_REQUEST,
  traversalSummaryGetResponse,
  traversalConclusionsGetResponse,
  traversalConclusionReportGetResponse,
  TraversalSummaryGetRequest,
  TraversalConclusionReportGetRequest,
  TraversalConclusionsGetRequest,
  CHATTRAVERSAL_SUMMARY_GET_REQUEST,
  CHATTRAVERSAL_CONCLUSIONS_GET_REQUEST,
  CHATTRAVERSAL_CONCLUSION_REPORT_GET_REQUEST,
  chatTraversalSummaryGetResponse,
  chatTraversalConclusionsGetResponse,
  chatTraversalConclusionReportGetResponse,
  ChatTraversalSummaryGetRequest,
  ChatTraversalConclusionReportGetRequest,
  ChatTraversalConclusionsGetRequest,
} from '../Actions';

export class TraversalsBaseServiceSagas<
  TService extends TraversalsBaseService
> extends BaseServiceSagas {
  constructor(service: TService, chat: boolean) {
    super();
    if (chat) {
      this.getQuestions = this.effect(
        CHATTRAVERSAL_SUMMARY_GET_REQUEST,
        service.getQuestions,
        (action: ChatTraversalSummaryGetRequest) => [action.traversalId],
        (data: SummaryQuestion[]) => chatTraversalSummaryGetResponse(data)
      );

      this.getConclusionReport = this.effect(
        CHATTRAVERSAL_CONCLUSION_REPORT_GET_REQUEST,
        service.getConclusionReport,
        (action: ChatTraversalConclusionReportGetRequest) => [
          action.traversalId,
        ],
        (data: any) => chatTraversalConclusionReportGetResponse(data)
      );

      this.getConclusions = this.effect(
        CHATTRAVERSAL_CONCLUSIONS_GET_REQUEST,
        service.getConclusions,
        (action: ChatTraversalConclusionsGetRequest) => [action.traversalId],
        (data: Array<any>) => chatTraversalConclusionsGetResponse(data)
      );
    } else {
      this.getQuestions = this.effect(
        TRAVERSAL_SUMMARY_GET_REQUEST,
        service.getQuestions,
        (action: TraversalSummaryGetRequest) => [action.traversalId],
        (data: SummaryQuestion[]) => traversalSummaryGetResponse(data)
      );

      this.getConclusionReport = this.effect(
        TRAVERSAL_CONCLUSION_REPORT_GET_REQUEST,
        service.getConclusionReport,
        (action: TraversalConclusionReportGetRequest) => [action.traversalId],
        (data: any) => traversalConclusionReportGetResponse(data)
      );

      this.getConclusions = this.effect(
        TRAVERSAL_CONCLUSIONS_GET_REQUEST,
        service.getConclusions,
        (action: TraversalConclusionsGetRequest) => [action.traversalId],
        (data: Array<any>) => traversalConclusionsGetResponse(data)
      );
    }

    this.service = service;
  }

  public service: TService;

  public getQuestions: ForkEffect<never>;
  public getConclusionReport: ForkEffect<never>;
  public getConclusions: ForkEffect<never>;
}
