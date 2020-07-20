import { BaseService } from './BaseService';

export class TraversalsBaseService extends BaseService {
  public getQuestions = (traversalId: string) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/questions`,
      this.options
    );

  public getConclusionReport = (traversalId: string) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/conclusion-report`,
      this.options
    );

  public getConclusions = (traversalId: string) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/conclusions`,
      this.options
    );

  public getTrackfile = (traversalId: string) =>
    this.fetch<string>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/track-file`,
      this.options
    );

  public getHistoryLines = (traversalId: string) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/history-lines`,
      this.options
    );

  public getSummary = (traversalId: string) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/summary`,
      this.options
    );
}
