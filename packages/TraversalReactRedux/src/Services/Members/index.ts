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

  public create = (body: MembersCreate) =>
    this.fetch<MembersResponse>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public get = (memberReference: string) =>
    this.fetch<MembersResponse>(
      `${this.controllerBase}/${this.controllerName}/${memberReference}`,
      this.options
    );

  public getQuestions = (memberReference: string) =>
    this.fetch<MembersPermanentHistoryResponse[]>(
      `${this.controllerBase}/${this.controllerName}/${memberReference}/permanent-history`,
      this.options
    );
}
