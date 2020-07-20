import { ForkEffect } from 'redux-saga/effects';
import { TraversalsBaseService } from '../Services/TraversalsBaseService';
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
} from '../Actions';
import { SummaryQuestion } from '../Models';

export class TraversalsBaseServiceSagas<
  TService extends TraversalsBaseService
> extends BaseServiceSagas {
  constructor(service: TService) {
    super();

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

    this.service = service;
  }

  public service: TService;

  public getQuestions: ForkEffect<never>;
  public getConclusionReport: ForkEffect<never>;
  public getConclusions: ForkEffect<never>;
}
