import { ForkEffect } from 'redux-saga/effects';
import { ChatTraversalsService } from '../../Services/ChatTraversals';
import { TraversalsBaseServiceSagas } from '../TraversalsBaseServiceSagas';
import {
  TRAVERSAL_POST_REQUEST,
  TRAVERSAL_RESPOND_POST_REQUEST,
  TRAVERSAL_REVISIT_POST_REQUEST,
  TRAVERSAL_GET_REQUEST,
  traversalRespondPostResponse,
  traversalPostResponse,
  traversalRevisitPostResponse,
  traversalGetResponse,
  TraversalPostRequest,
  TraversalGetRequest,
  TraversalRespondPostRequest,
  TraversalRevisitPostRequest,
} from '../../Actions/Traversal';
import { ChatTraversalsResponse } from '../../Models/Service/ChatTraversals';
import flatten from '../../Helpers/flattenTraversalChat';

export class ChatTraversalsServiceSagas extends TraversalsBaseServiceSagas {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    const service = new ChatTraversalsService(controllerBase, tokenFactory);
    super(service);

    this.create = this.effect(
      TRAVERSAL_POST_REQUEST,
      service.create,
      (action: TraversalPostRequest) => [action.body],
      (data: ChatTraversalsResponse) => traversalPostResponse(flatten(data))
    );

    this.respond = this.effect(
      TRAVERSAL_RESPOND_POST_REQUEST,
      service.respond,
      (action: TraversalRespondPostRequest) => [
        action.traversalId,
        action.body,
      ],
      (data: ChatTraversalsResponse) =>
        traversalRespondPostResponse(flatten(data))
    );

    this.revisit = this.effect(
      TRAVERSAL_REVISIT_POST_REQUEST,
      service.revisit,
      (action: TraversalRevisitPostRequest) => [
        action.traversalId,
        action.body,
      ],
      (data: ChatTraversalsResponse) =>
        traversalRevisitPostResponse(flatten(data))
    );

    this.get = this.effect(
      TRAVERSAL_GET_REQUEST,
      service.get,
      (action: TraversalGetRequest) => [action.traversalId],
      (data: ChatTraversalsResponse) => traversalGetResponse(flatten(data))
    );

    this.effects = [
      this.create,
      this.respond,
      this.revisit,
      this.get,
      this.getQuestions,
      this.getConclusions,
      this.getConclusionReport,
    ];

    this.service = service;
  }
  public service: ChatTraversalsService;

  public create: ForkEffect<never>;
  public respond: ForkEffect<never>;
  public revisit: ForkEffect<never>;
  public get: ForkEffect<never>;
}
