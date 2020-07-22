import { BaseService } from '../BaseService';
import {
  MembersResponse,
  MembersCreate,
  MembersPermanentHistoryResponse,
} from '../../Models/Service/Members';

/**
 * A class for the Traversal Engine Member Controller.\
 * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/Members
 */
export class MembersService extends BaseService {
  /**
   * Sets the [[controllerName]] to 'Members'.
   * @param controllerBase - The service's [[controllerBase]]
   * @param tokenFactory - Optional factory to set [[options]]'s token before [[fetch]] calls.'
   */
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'Members', tokenFactory);
  }

  /**
   * Create a Member.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_CreateAsync
   * @param body - The post body.
   */
  public create = (body: MembersCreate) =>
    this.fetch<MembersResponse>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  /**
   * Get a Member.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_GetAsync
   * @param memberReference - External Id of the member.
   */
  public get = (memberReference: string) =>
    this.fetch<MembersResponse>(
      `${this.controllerBase}/${this.controllerName}/${memberReference}`
    );

  /**
   * Get a Member's permanent history.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_GetPermanentHistoryAsync
   * @param memberReference - External Id of the member.
   */
  public getQuestions = (memberReference: string) =>
    this.fetch<MembersPermanentHistoryResponse[]>(
      `${this.controllerBase}/${this.controllerName}/${memberReference}/permanent-history`
    );
}
