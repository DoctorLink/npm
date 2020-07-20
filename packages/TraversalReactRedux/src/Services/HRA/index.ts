import { BaseService } from '../BaseService';

export class HealthRiskAssessmentService extends BaseService {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'Reports', tokenFactory);
  }

  public getSnapShot = (traversalId: string) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/previous`,
      this.options
    );

  public getComparison = (
    traversalId: string,
    compareTraversalId: string,
    riskAtAge: number
  ) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/compare/${compareTraversalId}/${riskAtAge}`,
      this.options
    );

  public getWellness = (traversalId: string, conclusions: number[]) => {
    const qs = conclusions.map(conc => `conclusions=${conc}`).join('&');
    return this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/wellness?${qs}`,
      this.options
    );
  };

  public getHealthRisk = (
    traversalId: string,
    ages: number[],
    conclusions: number[]
  ) => {
    const qs = ages
      .map(age => `ages=${age}`)
      .concat(conclusions.map(conc => `conclusions=${conc}`))
      .join('&');
    return this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/risks?${qs}`,
      this.options
    );
  };
}
