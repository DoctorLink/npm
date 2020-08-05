import { ForkEffect } from 'redux-saga/effects';
import {
  TraversalsService,
  TraversalsResponse,
  flattenTraversal as flatten,
} from '@doctorlink/traversal-core';
import { TraversalsBaseServiceSagas } from '../TraversalsBaseServiceSagas';
import {
  TRAVERSAL_POST_REQUEST,
  TRAVERSAL_RESPOND_POST_REQUEST,
  TRAVERSAL_REVISIT_POST_REQUEST,
  TRAVERSAL_PREVIOUS_POST_REQUEST,
  TRAVERSAL_GET_REQUEST,
  traversalRespondPostResponse,
  traversalPostResponse,
  traversalRevisitPostResponse,
  traversalPreviousPostResponse,
  traversalGetResponse,
  TraversalPostRequest,
  TraversalGetRequest,
  TraversalRespondPostRequest,
  TraversalRevisitPostRequest,
  TraversalPreviousPostRequest,
} from '../../Actions/Traversal';

export class TraversalsServiceSagas extends TraversalsBaseServiceSagas<
  TraversalsService
> {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    const service = new TraversalsService(controllerBase, tokenFactory);
    super(service);

    this.create = this.effect(
      TRAVERSAL_POST_REQUEST,
      service.create,
      (action: TraversalPostRequest) => [action.body],
      (data: TraversalsResponse) => traversalPostResponse(flatten(data))
    );

    this.respond = this.effect(
      TRAVERSAL_RESPOND_POST_REQUEST,
      service.respond,
      (action: TraversalRespondPostRequest) => [
        action.traversalId,
        action.body,
      ],
      (data: TraversalsResponse) => traversalRespondPostResponse(flatten(data))
    );

    this.revisit = this.effect(
      TRAVERSAL_REVISIT_POST_REQUEST,
      service.revisit,
      (action: TraversalRevisitPostRequest) => [
        action.traversalId,
        action.body,
      ],
      (data: TraversalsResponse) => traversalRevisitPostResponse(flatten(data))
    );

    this.previous = this.effect(
      TRAVERSAL_PREVIOUS_POST_REQUEST,
      service.previous,
      (action: TraversalPreviousPostRequest) => [action.traversalId],
      (data: TraversalsResponse) => traversalPreviousPostResponse(flatten(data))
    );

    this.get = this.effect(
      TRAVERSAL_GET_REQUEST,
      service.get,
      (action: TraversalGetRequest) => [action.traversalId],
      (data: TraversalsResponse) => traversalGetResponse(flatten(data))
    );

    this.effects = [
      this.create,
      this.respond,
      this.revisit,
      this.previous,
      this.get,
      this.getQuestions,
      this.getConclusions,
      this.getConclusionReport,
    ];

    this.service = service;
  }
  public service: TraversalsService;

  public create: ForkEffect<never>;
  public respond: ForkEffect<never>;
  public revisit: ForkEffect<never>;
  public previous: ForkEffect<never>;
  public get: ForkEffect<never>;
}
