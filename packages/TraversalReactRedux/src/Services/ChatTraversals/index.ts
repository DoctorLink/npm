import { TraversalsBaseService } from '../TraversalsBaseService';
import {
  ChatTraversalsCreate,
  ChatTraversalsRespond,
  ChatTraversalsRevisit,
  ChatTraversalsResponse,
} from '../../Models/Service/ChatTraversals';

export class ChatTraversalsService extends TraversalsBaseService {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'ChatTraversals', tokenFactory);
  }

  public create = async (body: ChatTraversalsCreate) =>
    await this.fetch<ChatTraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public respond = async (traversalId: string, body: ChatTraversalsRespond[]) =>
    await this.fetch<ChatTraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/respond`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public revisit = async (traversalId: string, body: ChatTraversalsRevisit) =>
    await this.fetch<ChatTraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}/revisit`,
      {
        ...this.options,
        method: 'POST',
        body: JSON.stringify(body),
      }
    );

  public get = async (traversalId: string) =>
    await this.fetch<ChatTraversalsResponse>(
      `${this.controllerBase}/${this.controllerName}/${traversalId}`,
      this.options
    );
}
