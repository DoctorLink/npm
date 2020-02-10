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
} from '../../Actions';
import answers from '../Answers';

const containerHeight = (containerRef: any) =>
  containerRef && containerRef.current && containerRef.current.clientHeight
    ? containerRef.current.clientHeight
    : 0;

interface IDictionary<TValue> {
  [id: string]: TValue;
}

const chat = (state: any = null, action: any) => {
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
      if (state === null) return state;
      return {
        ...state,
        minHeight: containerHeight(action.containerRef),
        loading: true,
      };
    case TRAVERSAL_NEXT_SET:
      let nextQuestionIds = state.questionIds;
      let nextQuestions = state.questions;
      let nextAnswers = state.answers;
      if (action.traversal.questions) {
        nextQuestionIds = [
          ...state.questionIds.concat(
            action.traversal.questionIds.filter(
              (x: any) => !state.questionIds.includes(x)
            )
          ),
        ];
        nextQuestions = Object.assign(
          {},
          state.questions,
          action.traversal.questions
        );
        nextAnswers = answers(
          Object.assign({}, state.answers, action.traversal.answers),
          action
        );
      }
      return {
        ...state,
        questionIds: nextQuestionIds,
        questions: nextQuestions,
        answers: nextAnswers,
        completed: action.traversal.completed,
        errors: action.traversal.errors,
        algoId: action.traversal.algoId,
        assessmentType: action.traversal.assessmentType,
        loading: false,
      };
    case TRAVERSAL_PREVIOUS_SET:
      var ids = [...state.questionIds];
      ids.length = ids.indexOf(action.traversal.questionIds[0]) + 1;
      let questions: IDictionary<any> = {};
      let newAnswers: IDictionary<any> = {};
      ids.forEach((qid: string) => {
        questions[qid] =
          qid in action.traversal.questions
            ? action.traversal.questions[qid]
            : state.questions[qid];
        questions[qid].answers.forEach((aid: any) => {
          newAnswers[aid] =
            action.traversal.answers && aid in action.traversal.answers
              ? action.traversal.answers[aid]
              : state.answers[aid];
        });
      });
      return {
        ...state,
        questionIds: ids,
        questions: questions,
        answers: answers(newAnswers, action),
        completed: action.traversal.completed,
        errors: action.traversal.errors,
        algoId: action.traversal.algoId,
        assessmentType: action.traversal.assessmentType,
        loading: false,
      };
    case TRAVERSAL_START_SET:
    case TRAVERSAL_CONTINUE_SET:
      return {
        ...action.traversal,
        minHeight: 0,
        loading: false,
        answers: answers(action.traversal.answers, action),
      };
    default:
      return state;
  }
};

export default chat;
