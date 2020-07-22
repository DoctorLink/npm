import { BaseService } from './BaseService';
import { ServiceResponse } from '../Models/Service';

/**
 * A base class for the Traversals and ChatTraversals controllers.
 * These Services have common endpoints.
 */
export class TraversalsBaseService extends BaseService {
  /**
   * Get a Traversal's presented questions.
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_QuestionsAsync
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_QuestionsAsync
   * @param traversalId - The traversal Id.
   */
  public getQuestions = (traversalId: string): Promise<ServiceResponse<any>> =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/questions`
    );

  /**
   * Get a Traversal's conclusion report.
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_ConclusionReportAsync
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_ConclusionReportAsync
   * @param traversalId - The traversal Id.
   */
  public getConclusionReport = (
    traversalId: string
  ): Promise<ServiceResponse<any>> =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/conclusion-report`
    );

  /**
   * Get a Traversal's conclusions.
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_ConclusionsAsync
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_ConclusionsAsync
   * @param traversalId - The traversal Id.
   */
  public getConclusions = (
    traversalId: string
  ): Promise<ServiceResponse<any>> =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/conclusions`
    );

  /**
   * Get a Traversal's track file.
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_GetTrackFile
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_GetTrackFile
   * @param traversalId - The traversal Id.
   */
  public getTrackfile = (traversalId: string): Promise<ServiceResponse<any>> =>
    this.fetch<string>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/track-file`
    );

  /**
   * Get a Traversal's history lines.
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_GetHistoryAsync
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_GetHistoryAsync
   * @param traversalId - The traversal Id.
   */
  public getHistoryLines = (
    traversalId: string
  ): Promise<ServiceResponse<any>> =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/history-lines`
    );

  /**
   * Get a Traversal's summary.
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_GetFullSummaryAsync
   *
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_GetFullSummaryAsync
   * @param traversalId - The traversal Id.
   */
  public getSummary = (traversalId: string): Promise<ServiceResponse<any>> =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/summary`
    );
}
