import { 
    TOGGLE_RADIO, 
    TOGGLE_CHECKBOX, 
    UPDATE_TEXT, 
    SET_TRAVERSAL, 
    TRAVERSAL_NEXT_SET, 
    TRAVERSAL_PREVIOUS_SET, 
    TRAVERSAL_START_SET, 
    TRAVERSAL_CONTINUE_SET, 
    SET_CHAT_MIN_HEIGHT, 
    TRAVERSAL_CONCLUSION_SET
} from '../../Actions'
import answers from '../Answers'

const chat = (state = null, action) => {
    switch (action.type) {
        case TOGGLE_RADIO:
        case TOGGLE_CHECKBOX:
        case UPDATE_TEXT:
            if (!action.id.startsWith(state.questionIds[state.questionIds.length-1])) return state;
            return { ...state, answers: answers(state.answers, action)}
        case SET_CHAT_MIN_HEIGHT:
            if (state === null ) return state;
            return { ...state, minHeight: action.minHeight, loading: true }
        case TRAVERSAL_NEXT_SET:
            let nextQuestionIds = state.questionIds;
            let nextQuestions = state.questions;
            let nextAnswers = state.answers;
            if (action.traversal.questions) {
                nextQuestionIds = [ ...state.questionIds.concat(action.traversal.questionIds.filter(x=>!state.questionIds.includes(x))) ];
                nextQuestions = Object.assign({}, state.questions, action.traversal.questions);
                nextAnswers = answers(Object.assign({}, state.answers, action.traversal.answers), action);
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
                loading: false
            }
        case TRAVERSAL_PREVIOUS_SET:
            var ids = [ ...state.questionIds ];
            ids.length = ids.indexOf(action.traversal.questionIds[0]) + 1;
            var questions = {};
            var newAnswers = {};
            ids.forEach(qid=> { 
                questions[qid] = (qid in action.traversal.questions) ? action.traversal.questions[qid] : state.questions[qid];
                questions[qid].answers.forEach(aid => {
                    newAnswers[aid] = (action.traversal.answers && aid in action.traversal.answers) ? action.traversal.answers[aid] : state.answers[aid];
                })
            });
            return { 
                ...state, 
                questionIds: ids, 
                questions: questions,
                answers: answers(newAnswers, action),
                completed: action.traversal.completed,
                errors: action.traversal.errors,
                algoId: action.traversal.algoId,
                assessmentType: action.traversal.assessmentType
            }
        case TRAVERSAL_START_SET:
        case TRAVERSAL_CONTINUE_SET:
            return { 
                ...action.traversal,
                minHeight: 0, 
                loading: false,
                answers: answers(action.traversal.answers, action)
            }
        default:
            return state
    }
}

export default chat
