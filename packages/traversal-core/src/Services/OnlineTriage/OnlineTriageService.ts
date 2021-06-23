import { AxiosResponse } from 'axios';
import { AlgoSearchModel } from '../../Models';
import { BaseService } from '../BaseService';

export class OnlineTriageService extends BaseService {
  constructor(baseUrl: string, tokenFactory?: () => Promise<string | null>) {
    super(baseUrl, 'Algos', tokenFactory);
  }

  /**
   * Gets a list of Online Triage algos with keywords.\
   * https://platform-traversal-ot.doctorlink.com/api-docs/v1/index.html#operation/Algos_GetListAsync
   */
  public getAlgos = (): Promise<AxiosResponse<AlgoSearchModel[]>> =>
    this.axios.get<AlgoSearchModel[]>('/');
}
