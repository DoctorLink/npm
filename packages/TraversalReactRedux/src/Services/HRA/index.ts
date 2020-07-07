import { BaseService } from '../BaseService';

export class HealthRiskAssessmentService extends BaseService {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'Report', tokenFactory);
  }

  public getSnapShot = async (traversalId: string) =>
    await this.fetch<any>(`Snapshot/Previous/${traversalId}`, this.options);

  public getComparison = async (
    currentTraversal: string,
    pastTraversal: string,
    riskAtAge: number
  ) =>
    await this.fetch<any>(
      `Compare/Compare/${currentTraversal}/${pastTraversal}/${riskAtAge}`,
      this.options
    );

  public getWellness = async (traversalId: string, conclusions: number[]) => {
    const qs = conclusions.map(conc => `conclusions=${conc}`).join('&');
    return await this.fetch<any>(
      `​Wellness​/${traversalId}?${qs}`,
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
      `HealthRisk/${traversalId}?${qs}`,
      this.options
    );
  };
}
