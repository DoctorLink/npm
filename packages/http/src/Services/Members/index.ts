import { AxiosResponse } from 'axios';
import { BaseService } from '../BaseService';
import {
  MembersResponse,
  MembersCreate,
  MembersPermanentHistoryResponse,
} from '../../Models/Members';

/**
 * A class for the Traversal Engine Member Controller.\
 * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/Members
 */
export class MembersService extends BaseService {
  /**
   * Sets the [[controllerName]] to 'Members'.
   * @param baseURL - The service's [[baseURL]]
   * @param tokenFactory - Optional factory to set [[axios | axios instance]]'s token before http calls.
   */
  constructor(baseURL: string, tokenFactory?: () => Promise<string | null>) {
    super(baseURL, 'Members', tokenFactory);
  }

  /**
   * Create a Member.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_CreateAsync
   * @param body - The post body.
   */
  public create = (
    body: MembersCreate
  ): Promise<AxiosResponse<MembersResponse>> =>
    this.axios.post<MembersResponse>('/', body);

  /**
   * Get a Member.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_GetAsync
   * @param memberReference - External Id of the member.
   */
  public get = (
    memberReference: string
  ): Promise<AxiosResponse<MembersResponse>> =>
    this.axios.get<MembersResponse>(`/${memberReference}`);

  /**
   * Get a Member's permanent history.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Members_GetPermanentHistoryAsync
   * @param memberReference - External Id of the member.
   */
  public getQuestions = (
    memberReference: string
  ): Promise<AxiosResponse<MembersPermanentHistoryResponse[]>> =>
    this.axios.get<MembersPermanentHistoryResponse[]>(
      `/${memberReference}/permanent-history`
    );
}
