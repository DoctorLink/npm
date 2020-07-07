import { TraversalsBaseService } from '../TraversalsBaseService';
import {
  TraversalsCreate,
  TraversalsRespond,
  TraversalsRevisit,
  TraversalsResponse,
} from '../../Models/Service/Traversals';

export class TraversalsService extends TraversalsBaseService {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'Traversals', tokenFactory);
  }

  public create = async (body: TraversalsCreate) =>
    await this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public respond = async (traversalId: string, body: TraversalsRespond[]) =>
    await this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/respond`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public revisit = async (
    traversalId: string,
    body: TraversalsRevisit | undefined
  ) =>
    await this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/revisit`,
      {
        ...this.options,
        method: 'POST',
        body: body ? JSON.stringify(body) : undefined,
      }
    );

  public get = async (traversalId: string) =>
    await this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}`,
      this.options
    );
}
