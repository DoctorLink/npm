import { BaseService } from '../BaseService';
import {
  MembersResponse,
  MembersCreate,
  MembersPermanentHistoryResponse,
} from '../../Models/Service/Members';

export class MembersService extends BaseService {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'Members', tokenFactory);
  }

  public create = async (body: MembersCreate) =>
    await this.fetch<MembersResponse>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public get = async (memberReference: string) =>
    await this.fetch<MembersResponse>(
      `${this.controllerBase}/${this.controllerName}/${memberReference}`,
      this.options
    );

  public getQuestions = async (memberReference: string) =>
    await this.fetch<MembersPermanentHistoryResponse[]>(
      `${this.controllerBase}/${this.controllerName}/${memberReference}/permanent-history`,
      this.options
    );
}
