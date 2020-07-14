import { BaseService } from '../BaseService';

export class HealthRiskAssessmentService extends BaseService {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'Reports', tokenFactory);
  }

  public getSnapShot = async (traversalId: string) =>
    await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/previous`,
      this.options
    );

  public getComparison = async (
    traversalId: string,
    compareTraversalId: string,
    riskAtAge: number
  ) =>
    await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/compare/${compareTraversalId}/${riskAtAge}`,
      this.options
    );

  public getWellness = async (traversalId: string, conclusions: number[]) => {
    const qs = conclusions.map(conc => `conclusions=${conc}`).join('&');
    return await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/wellness?${qs}`,
      this.options
    );
  };

  public getHealthRisk = async (
    traversalId: string,
    ages: number[],
    conclusions: number[]
  ) => {
    const qs = ages
      .map(age => `ages=${age}`)
      .concat(conclusions.map(conc => `conclusions=${conc}`))
      .join('&');
    return await this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/risks?${qs}`,
      this.options
    );
  };
}
