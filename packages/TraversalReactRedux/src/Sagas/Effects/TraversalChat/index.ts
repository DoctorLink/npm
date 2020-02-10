import { takeLatest } from 'redux-saga/effects';
import * as actions from '../../../Actions';
import * as generators from '../../Generators';

export default (traversalApi: any) => [
  takeLatest(
    actions.TRAVERSAL_START,
    generators.createStartChatGenerator(traversalApi)
  ),
  takeLatest(
    actions.TRAVERSAL_CONTINUE,
    generators.createContinueChatGenerator(traversalApi)
  ),
  takeLatest(
    actions.TRAVERSAL_NEXT,
    generators.createNextChatGenerator(traversalApi)
  ),
  takeLatest(
    actions.TRAVERSAL_PREVIOUS,
    generators.createPreviousChatGenerator(traversalApi)
  ),
  takeLatest(
    actions.TRAVERSAL_CONCLUSION_GET,
    generators.createConclusionsGenerator(traversalApi)
  ),
];
