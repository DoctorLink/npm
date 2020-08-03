import { Reducer } from 'redux';
import {
  TraversalAction,
  TRAVERSAL_RADIO_TOGGLE,
  TRAVERSAL_CHECKBOX_TOGGLE,
  TRAVERSAL_VALUE_CHANGE,
  TRAVERSAL_RESPOND_POST_REQUEST,
  TRAVERSAL_REVISIT_POST_REQUEST,
  TRAVERSAL_POST_RESPONSE,
  TRAVERSAL_GET_RESPONSE,
  TRAVERSAL_RESPOND_POST_RESPONSE,
  TRAVERSAL_REVISIT_POST_RESPONSE,
} from '../../Actions';
import {
  ChatModel,
  TraversalQuestion,
  TraversalAnswer,
  ChatTraversalState,
} from '../../Models';
import { answersReducer } from '../Answers';

export type ChatReducer = Reducer<ChatTraversalState, TraversalAction>;

export const chatReducer: ChatReducer = (
  state = {} as ChatTraversalState,
  action
) => {
  switch (action.type) {
    case TRAVERSAL_RADIO_TOGGLE:
    case TRAVERSAL_CHECKBOX_TOGGLE:
    case TRAVERSAL_VALUE_CHANGE:
      if (
        !action.id.startsWith(state.questionIds[state.questionIds.length - 1])
      )
        return state;
      return { ...state, answers: answersReducer(state.answers, action) };
    case TRAVERSAL_RESPOND_POST_REQUEST:
    case TRAVERSAL_REVISIT_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TRAVERSAL_RESPOND_POST_RESPONSE:
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
        nextAnswers = answersReducer(
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
    case TRAVERSAL_REVISIT_POST_RESPONSE:
      chat = action.traversal as ChatModel;
      const ids = [...state.questionIds];
      ids.length = ids.indexOf(chat.questionIds[0]) + 1;
      const questions: Record<string, TraversalQuestion> = {};
      const newAnswers: Record<string, TraversalAnswer> = {};
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
        answers: answersReducer(newAnswers, action),
        completed: chat.completed,
        errors: chat.errors,
        algoId: chat.algoId,
        assessmentType: chat.assessmentType,
        loading: false,
      };
    case TRAVERSAL_POST_RESPONSE:
    case TRAVERSAL_GET_RESPONSE:
      return {
        ...(action.traversal as ChatModel),
        minHeight: 0,
        loading: false,
        answers: answersReducer(action.traversal.answers, action),
      };
    default:
      return state;
  }
};

export const chatReducerMapObject = {
  traversal: chatReducer,
};
