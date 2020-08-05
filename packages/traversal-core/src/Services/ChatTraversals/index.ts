import { AxiosResponse } from 'axios';
import { TraversalsBaseService } from '../TraversalsBaseService';
import {
  ChatTraversalsCreate,
  ChatTraversalsRespond,
  ChatTraversalsRevisit,
  ChatTraversalsResponse,
} from '../../Models/Service/ChatTraversals';

/**
 * A class for the Traversal Engine ChatTraversal Controller.\
 * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/ChatTraversals
 */
export class ChatTraversalsService extends TraversalsBaseService {
  /**
   * Sets the [[controllerName]] to 'ChatTraversals'.
   * @param baseURL - The service's [[baseURL]]
   * @param tokenFactory - Optional factory to set [[axios | axios instance]]'s token before http calls.
   */
  constructor(baseURL: string, tokenFactory?: () => Promise<string | null>) {
    super(baseURL, 'ChatTraversals', tokenFactory);
  }

  /**
   * Create a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_CreateAsync
   * @param body - The post body.
   */
  public create = async (
    body: ChatTraversalsCreate
  ): Promise<AxiosResponse<ChatTraversalsResponse>> =>
    await this.axios.post<ChatTraversalsResponse>(`/`, body);

  /**
   * Respond to a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_RespondAsync
   * @param traversalId - The traversal Id.
   * @param body - The post body.
   */
  public respond = async (
    traversalId: string,
    body: ChatTraversalsRespond[]
  ): Promise<AxiosResponse<ChatTraversalsResponse>> =>
    await this.axios.post<ChatTraversalsResponse>(
      `/${traversalId}/respond`,
      body
    );

  /**
   * Revisit a point in a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_RevisitAsync
   * @param traversalId - The traversal Id.
   * @param body - The post body.
   */
  public revisit = async (
    traversalId: string,
    body: ChatTraversalsRevisit
  ): Promise<AxiosResponse<ChatTraversalsResponse>> =>
    await this.axios.post<ChatTraversalsResponse>(
      `/${traversalId}/revisit`,
      body
    );

  /**
   * Get a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_GetAsync
   * @param traversalId - The traversal Id.
   */
  public get = async (
    traversalId: string
  ): Promise<AxiosResponse<ChatTraversalsResponse>> =>
    await this.axios.get<ChatTraversalsResponse>(`/${traversalId}`);
}
