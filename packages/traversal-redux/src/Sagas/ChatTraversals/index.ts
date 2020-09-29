import { call, ForkEffect, takeLatest } from 'redux-saga/effects';
import {
  ChatTraversalsService,
  ChatTraversalsResponse,
  flattenChatTraversal as flatten,
} from '@doctorlink/traversal-core';
import { TraversalsBaseServiceSagas } from '../TraversalsBaseServiceSagas';
import {
  CHATTRAVERSAL_SET_BASE_URL,
  CHATTRAVERSAL_POST_REQUEST,
  CHATTRAVERSAL_RESPOND_POST_REQUEST,
  CHATTRAVERSAL_REVISIT_POST_REQUEST,
  CHATTRAVERSAL_GET_REQUEST,
  chatTraversalRespondPostResponse,
  chatTraversalPostResponse,
  chatTraversalRevisitPostResponse,
  chatTraversalGetResponse,
  ChatTraversalSetBaseUrl,
  ChatTraversalPostRequest,
  ChatTraversalGetRequest,
  ChatTraversalRespondPostRequest,
  ChatTraversalRevisitPostRequest,
} from '../../Actions/ChatTraversal';

export class ChatTraversalsServiceSagas extends TraversalsBaseServiceSagas<
  ChatTraversalsService
> {
  constructor(
    controllerBase: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    const service = new ChatTraversalsService(controllerBase, tokenFactory);
    super(service, true);

    this.create = this.effect(
      CHATTRAVERSAL_POST_REQUEST,
      service.create,
      (action: ChatTraversalPostRequest) => [action.body],
      (data: ChatTraversalsResponse) => chatTraversalPostResponse(flatten(data))
    );

    this.respond = this.effect(
      CHATTRAVERSAL_RESPOND_POST_REQUEST,
      service.respond,
      (action: ChatTraversalRespondPostRequest) => [
        action.traversalId,
        action.body,
      ],
      (data: ChatTraversalsResponse) =>
        chatTraversalRespondPostResponse(flatten(data))
    );

    this.revisit = this.effect(
      CHATTRAVERSAL_REVISIT_POST_REQUEST,
      service.revisit,
      (action: ChatTraversalRevisitPostRequest) => [
        action.traversalId,
        action.body,
      ],
      (data: ChatTraversalsResponse) =>
        chatTraversalRevisitPostResponse(flatten(data))
    );

    this.get = this.effect(
      CHATTRAVERSAL_GET_REQUEST,
      service.get,
      (action: ChatTraversalGetRequest) => [action.traversalId],
      (data: ChatTraversalsResponse) => chatTraversalGetResponse(flatten(data))
    );

    this.setBaseUrl = takeLatest(CHATTRAVERSAL_SET_BASE_URL, function* (
      action: ChatTraversalSetBaseUrl
    ) {
      yield call(service.setBaseUrl, action.baseUrl);
    });

    this.effects = [
      this.create,
      this.respond,
      this.revisit,
      this.get,
      this.getQuestions,
      this.getConclusions,
      this.getConclusionReport,
      this.setBaseUrl,
    ];

    this.service = service;
  }
  public service: ChatTraversalsService;

  public create: ForkEffect<never>;
  public respond: ForkEffect<never>;
  public revisit: ForkEffect<never>;
  public get: ForkEffect<never>;
  public setBaseUrl: ForkEffect<never>;
}
