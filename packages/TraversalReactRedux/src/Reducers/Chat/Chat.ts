import {
  TOGGLE_RADIO,
  TOGGLE_CHECKBOX,
  UPDATE_TEXT,
  TRAVERSAL_NEXT,
  TRAVERSAL_PREVIOUS,
  TRAVERSAL_START_SET,
  TRAVERSAL_CONTINUE_SET,
  TRAVERSAL_NEXT_SET,
  TRAVERSAL_PREVIOUS_SET,
  TraversalAction,
} from '../../Actions';
import answers from '../Answers';
import {
  ChatModel,
  TraversalQuestion,
  TraversalAnswer,
  ChatState,
} from '../../Models';
import { MutableRefObject } from 'react';

const containerHeight = (containerRef: MutableRefObject<HTMLElement>) =>
  containerRef && containerRef.current && containerRef.current.clientHeight
    ? containerRef.current.clientHeight
    : 0;

const chat = (
  state: ChatState = {} as ChatState,
  action: TraversalAction
): ChatState => {
  switch (action.type) {
    case TOGGLE_RADIO:
    case TOGGLE_CHECKBOX:
    case UPDATE_TEXT:
      if (
        !action.id.startsWith(state.questionIds[state.questionIds.length - 1])
      )
        return state;
      return { ...state, answers: answers(state.answers, action) };
    case TRAVERSAL_NEXT:
    case TRAVERSAL_PREVIOUS:
      return {
        ...state,
        minHeight: containerHeight(action.containerRef),
        loading: true,
      };
    case TRAVERSAL_NEXT_SET:
      let nextQuestionIds = state.questionIds;
      let nextQuestions = state.questions;
      let nextAnswers = state.answers;
      let chat = action.traversal as ChatModel;
      if (action.traversal.questions) {
        nextQuestionIds = [
          ...state.questionIds.concat(
            chat.questionIds.filter((x: any) => !state.questionIds.includes(x))
          ),
        ];
        nextQuestions = Object.assign({}, state.questions, chat.questions);
        nextAnswers = answers(
          Object.assign({}, state.answers, chat.answers),
          action
        );
      }
      return {
        ...state,
        questionIds: nextQuestionIds,
        questions: nextQuestions,
        answers: nextAnswers,
        completed: chat.completed,
        errors: chat.errors,
        algoId: chat.algoId,
        assessmentType: chat.assessmentType,
        loading: false,
      };
    case TRAVERSAL_PREVIOUS_SET:
      chat = action.traversal as ChatModel;
      var ids = [...state.questionIds];
      ids.length = ids.indexOf(chat.questionIds[0]) + 1;
      let questions: Record<string, TraversalQuestion> = {};
      let newAnswers: Record<string, TraversalAnswer> = {};
      ids.forEach((qid: string) => {
        questions[qid] =
          qid in chat.questions ? chat.questions[qid] : state.questions[qid];
        questions[qid].answers.forEach((aid: any) => {
          newAnswers[aid] =
            chat.answers && aid in chat.answers
              ? chat.answers[aid]
              : state.answers[aid];
        });
      });
      return {
        ...state,
        questionIds: ids,
        questions: questions,
        answers: answers(newAnswers, action),
        completed: chat.completed,
        errors: chat.errors,
        algoId: chat.algoId,
        assessmentType: chat.assessmentType,
        loading: false,
      };
    case TRAVERSAL_START_SET:
    case TRAVERSAL_CONTINUE_SET:
      return {
        ...(action.traversal as ChatModel),
        minHeight: 0,
        loading: false,
        answers: answers(action.traversal.answers, action),
      };
    default:
      return state;
  }
};

export default chat;
