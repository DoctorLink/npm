import { BaseService } from './BaseService';

export class TraversalsBaseService extends BaseService {
  constructor(
    controllerBase: string,
    controllerName: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, controllerName, tokenFactory);
  }

  public getQuestions = async (traversalId: string) =>
    await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/questions`,
      this.options
    );

  public getConclusionReport = async (traversalId: string) =>
    await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/conclusion-report`,
      this.options
    );

  public getConclusions = async (traversalId: string) =>
    await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/conclusions`,
      this.options
    );

  public getTrackfile = async (traversalId: string) =>
    await this.fetch<string>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/track-file`,
      this.options
    );

  public getHistoryLines = async (traversalId: string) =>
    await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/history-lines`,
      this.options
    );

  public getSummary = async (traversalId: string) =>
    await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/summary`,
      this.options
    );
}
