import { AxiosResponse } from 'axios';
import { TraversalsBaseService } from '../TraversalsBaseService';
import {
  TraversalsCreate,
  TraversalsRespond,
  TraversalsRevisit,
  TraversalsResponse,
} from '../../Models/Traversals';

/**
 * A class for the Traversal Engine ChatTraversal Controller.\
 * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/Traversals
 */
export class TraversalsService extends TraversalsBaseService {
  /**
   * Sets the [[controllerName]] to 'Traversals'.
   * @param baseURL - The service's [[baseURL]]
   * @param tokenFactory - Optional factory to set [[axios | axios instance]]'s token before http calls.
   */
  constructor(baseURL: string, tokenFactory?: () => Promise<string | null>) {
    super(baseURL, 'Traversals', tokenFactory);
  }

  /**
   * Create a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_CreateAsync
   * @param body - The post body.
   */
  public create = (
    body: TraversalsCreate
  ): Promise<AxiosResponse<TraversalsResponse>> =>
    this.axios.post<TraversalsResponse>(`/`, body);

  /**
   * Respond to a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_RespondAsync
   * @param traversalId - The traversal Id.
   * @param body - The post body.
   */
  public respond = (
    traversalId: string,
    body: TraversalsRespond[]
  ): Promise<AxiosResponse<TraversalsResponse>> =>
    this.axios.post<TraversalsResponse>(`/${traversalId}/respond`, body);

  /**
   * Revisit a point in a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_RevisitAsync
   * @param traversalId - The traversal Id.
   * @param body - The post body.
   */
  public revisit = (
    traversalId: string,
    body: TraversalsRevisit | undefined
  ): Promise<AxiosResponse<TraversalsResponse>> =>
    this.axios.post<TraversalsResponse>(`/${traversalId}/revisit`, body);

  /**
   * Revisit the previous node in a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_PreviousAsync
   * @param traversalId - The traversal Id.
   */
  public previous = (
    traversalId: string
  ): Promise<AxiosResponse<TraversalsResponse>> =>
    this.axios.post<TraversalsResponse>(`/${traversalId}/previous`);

  /**
   * Get a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_GetAsync
   * @param traversalId - The traversal Id.
   */
  public get = (
    traversalId: string
  ): Promise<AxiosResponse<TraversalsResponse>> =>
    this.axios.get<TraversalsResponse>(`/${traversalId}`);
}
