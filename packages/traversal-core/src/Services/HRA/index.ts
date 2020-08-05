import { AxiosResponse } from 'axios';
import { BaseService } from '../BaseService';

/**
 * A class for the Health Risk Assessment Report Controller.\
 * https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#tag/Report
 */
export class HealthRiskAssessmentService extends BaseService {
  /**
   * Sets the [[controllerName]] to 'Reports'.
   * @param baseURL - The service's [[baseURL]]
   * @param tokenFactory - Optional factory to set [[axios | axios instance]]'s token before http calls.
   */
  constructor(baseURL: string, tokenFactory?: () => Promise<string | null>) {
    super(baseURL, 'Reports', tokenFactory);
  }

  /**
   * Get previous snapshots for a member.\
   * https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#operation/Report_PreviousSnapshots
   * @param body - The post body.
   */
  public getSnapShot = (traversalId: string): Promise<AxiosResponse<any>> =>
    this.axios.get<any>(`/${traversalId}/previous`);

  /**
   * Compare HRA traversals at a certain age.\
   * https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#operation/Report_Compare
   * @param body - The post body.
   */
  public getComparison = (
    traversalId: string,
    compareTraversalId: string,
    riskAtAge: number
  ): Promise<AxiosResponse<any>> =>
    this.axios.get<any>(
      `/${traversalId}/compare/${compareTraversalId}/${riskAtAge}`
    );

  /**
   * Gets wellness results.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_CreateAsync
   * @param traversalId - The HRA traversal id.
   * @param conclusions - Asset IDs of any selected conclusions.
   */
  public getWellness = (
    traversalId: string,
    conclusions: number[]
  ): Promise<AxiosResponse<any>> => {
    const qs = conclusions.map((conc) => `conclusions=${conc}`).join('&');
    return this.axios.get<any>(`/${traversalId}/wellness?${qs}`);
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
  ): Promise<AxiosResponse<any>> => {
    const qs = ages
      .map((age) => `ages=${age}`)
      .concat(conclusions.map((conc) => `conclusions=${conc}`))
      .join('&');
    return this.axios.get<any>(`/${traversalId}/risks?${qs}`);
  };
}
