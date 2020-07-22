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
   * @param controllerBase - The service's [[controllerBase]]
   * @param tokenFactory - Optional factory to set [[options]]'s token before [[fetch]] calls.'
   */
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'ChatTraversals', tokenFactory);
  }

  /**
   * Create a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_CreateAsync
   * @param body - The post body.
   */
  public create = async (body: ChatTraversalsCreate) =>
    await this.fetch<ChatTraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  /**
   * Respond to a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_RespondAsync
   * @param traversalId - The traversal Id.
   * @param body - The post body.
   */
  public respond = async (traversalId: string, body: ChatTraversalsRespond[]) =>
    await this.fetch<ChatTraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/respond`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  /**
   * Revisit a point in a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_RevisitAsync
   * @param traversalId - The traversal Id.
   * @param body - The post body.
   */
  public revisit = async (traversalId: string, body: ChatTraversalsRevisit) =>
    await this.fetch<ChatTraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/revisit`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  /**
   * Get a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/ChatTraversals_GetAsync
   * @param traversalId - The traversal Id.
   */
  public get = async (traversalId: string) =>
    await this.fetch<ChatTraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}`
    );
}
