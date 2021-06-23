import { Reducer } from 'redux';
import {
  ChatModel,
  TraversalQuestion,
  TraversalAnswer,
  ChatTraversalState,
} from '@doctorlink/traversal-core';
import {
  ChatTraversalAction,
  CHATTRAVERSAL_RADIO_TOGGLE,
  CHATTRAVERSAL_CHECKBOX_TOGGLE,
  CHATTRAVERSAL_VALUE_CHANGE,
  CHATTRAVERSAL_RESPOND_POST_REQUEST,
  CHATTRAVERSAL_REVISIT_POST_REQUEST,
  CHATTRAVERSAL_POST_RESPONSE,
  CHATTRAVERSAL_GET_RESPONSE,
  CHATTRAVERSAL_RESPOND_POST_RESPONSE,
  CHATTRAVERSAL_REVISIT_POST_RESPONSE,
  CHATTRAVERSAL_GET_REQUEST,
  CHATTRAVERSAL_POST_REQUEST,
  SERVICE_SAGA_ERROR,
  ALGO_SEARCH_DATA_GET_RESPONSE,
} from '../../Actions';
import { chatAnswersReducer } from '../Answers';

export type ChatReducer = Reducer<ChatTraversalState, ChatTraversalAction>;

export const chatReducer: ChatReducer = (
  state = {} as ChatTraversalState,
  action
) => {
  switch (action.type) {
    case CHATTRAVERSAL_RADIO_TOGGLE:
    case CHATTRAVERSAL_CHECKBOX_TOGGLE:
    case CHATTRAVERSAL_VALUE_CHANGE:
      if (
        !action.id.startsWith(state.questionIds[state.questionIds.length - 1])
      )
        return state;
      return { ...state, answers: chatAnswersReducer(state.answers, action) };
    case CHATTRAVERSAL_RESPOND_POST_REQUEST:
    case CHATTRAVERSAL_REVISIT_POST_REQUEST:
    case CHATTRAVERSAL_GET_REQUEST:
    case CHATTRAVERSAL_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHATTRAVERSAL_RESPOND_POST_RESPONSE: {
      let nextQuestionIds = state.questionIds;
      let nextQuestions = state.questions;
      let nextAnswers = state.answers;
      const chat = action.traversal as ChatModel;
      if (action.traversal.questions) {
        nextQuestionIds = [
          ...state.questionIds.concat(
            chat.questionIds.filter((x) => !state.questionIds.includes(x))
          ),
        ];
        nextQuestions = Object.assign({}, state.questions, chat.questions);
        nextAnswers = chatAnswersReducer(
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
    }
    case CHATTRAVERSAL_REVISIT_POST_RESPONSE: {
      const chat = action.traversal as ChatModel;
      const ids = [...state.questionIds];
      ids.length = ids.indexOf(chat.questionIds[0]) + 1;
      const questions: Record<string, TraversalQuestion> = {};
      const newAnswers: Record<string, TraversalAnswer> = {};
      ids.forEach((qid: string) => {
        questions[qid] =
          qid in chat.questions ? chat.questions[qid] : state.questions[qid];
        questions[qid].answers.forEach((aid) => {
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
        answers: chatAnswersReducer(newAnswers, action),
        completed: chat.completed,
        errors: chat.errors,
        algoId: chat.algoId,
        assessmentType: chat.assessmentType,
        loading: false,
      };
    }
    case CHATTRAVERSAL_POST_RESPONSE:
    case CHATTRAVERSAL_GET_RESPONSE:
      return {
        ...(action.traversal as ChatModel),
        minHeight: 0,
        loading: false,
        answers: chatAnswersReducer(action.traversal.answers, action),
      };
    case ALGO_SEARCH_DATA_GET_RESPONSE:
      if (!state.answers || !state.answers[action.answerId]) {
        return state;
      }
      return {
        ...state,
        answers: chatAnswersReducer(state.answers, action),
      };
    case SERVICE_SAGA_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const chatReducerMapObject = {
  chatTraversal: chatReducer,
};
