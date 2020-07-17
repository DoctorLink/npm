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

  public create = (body: TraversalsCreate) =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public respond = (traversalId: string, body: TraversalsRespond[]) =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/respond`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public revisit = (traversalId: string, body: TraversalsRevisit) =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/revisit`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public previous = (traversalId: string) =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/previous`,
      {
        ...this.options,
        method: 'POST',
      }
    );

  public get = (traversalId: string) =>
    this.fetch<TraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}`,
      this.options
    );
}
