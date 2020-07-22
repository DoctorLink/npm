import { TraversalsBaseService } from '../TraversalsBaseService';
import { ServiceResponse } from '../../Models/Service';
import {
  TraversalsCreate,
  TraversalsRespond,
  TraversalsRevisit,
  TraversalsResponse,
} from '../../Models/Service/Traversals';

/**
 * A class for the Traversal Engine ChatTraversal Controller.\
 * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/Traversals
 */
export class TraversalsService extends TraversalsBaseService {
  /**
   * Sets the [[controllerName]] to 'Traversals'.
   * @param controllerBase - The service's [[controllerBase]]
   * @param tokenFactory - Optional factory to set [[options]]'s token before [[fetch]] calls.'
   */
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'Traversals', tokenFactory);
  }

  /**
   * Create a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_CreateAsync
   * @param body - The post body.
   */
  public create = (
    body: TraversalsCreate
  ): Promise<ServiceResponse<TraversalsResponse>> =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  /**
   * Respond to a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_RespondAsync
   * @param traversalId - The traversal Id.
   * @param body - The post body.
   */
  public respond = (
    traversalId: string,
    body: TraversalsRespond[]
  ): Promise<ServiceResponse<TraversalsResponse>> =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/respond`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  /**
   * Revisit a point in a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_RevisitAsync
   * @param traversalId - The traversal Id.
   * @param body - The post body.
   */
  public revisit = (
    traversalId: string,
    body: TraversalsRevisit | undefined
  ): Promise<ServiceResponse<TraversalsResponse>> =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/revisit`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  /**
   * Revisit the previous node in a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_PreviousAsync
   * @param traversalId - The traversal Id.
   */
  public previous = (
    traversalId: string
  ): Promise<ServiceResponse<TraversalsResponse>> =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/previous`,
      {
        method: 'POST',
      }
    );

  /**
   * Get a Traversal.\
   * https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#operation/Traversals_GetAsync
   * @param traversalId - The traversal Id.
   */
  public get = (
    traversalId: string
  ): Promise<ServiceResponse<TraversalsResponse>> =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}`
    );
}
