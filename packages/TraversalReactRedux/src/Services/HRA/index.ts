import { BaseService } from '../BaseService';

/**
 * A class for the Health Risk Assessment Report Controller.\
 * https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#tag/Report
 */
export class HealthRiskAssessmentService extends BaseService {
  /**
   * Sets the [[controllerName]] to 'Reports'.
   * @param controllerBase - The service's [[controllerBase]]
   * @param tokenFactory - Optional factory to set [[options]]'s token before [[fetch]] calls.'
   */
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'Reports', tokenFactory);
  }

  /**
   * Get previous snapshots for a member.\
   * https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#operation/Report_PreviousSnapshots
   * @param body - The post body.
   */
  public getSnapShot = (traversalId: string) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/previous`
    );

  /**
   * Compare HRA traversals at a certain age.\
   * https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#operation/Report_Compare
   * @param body - The post body.
   */
  public getComparison = (
    traversalId: string,
    compareTraversalId: string,
    riskAtAge: number
  ) =>
    this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/compare/${compareTraversalId}/${riskAtAge}`
    );

  /**
   * Gets wellness results.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_CreateAsync
   * @param traversalId - The HRA traversal id.
   * @param conclusions - Asset IDs of any selected conclusions.
   */
  public getWellness = (traversalId: string, conclusions: number[]) => {
    const qs = conclusions.map(conc => `conclusions=${conc}`).join('&');
    return this.fetch<any>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/wellness?${qs}`
    );
  };

  /**
   * Gets health risks.\
   * https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#operation/Report_GetRisks
   * @param traversalId - The HRA traversal id.
   * @param ages - Ages for which to calculate the risks.
   * @param conclusions - Asset IDs of any selected conclusions.
   */
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
      `${this.controllerBase}/${this.controllerName}/${traversalId}/risks?${qs}`
    );
  };
}
