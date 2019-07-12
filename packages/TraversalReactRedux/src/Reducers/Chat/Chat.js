import { TOGGLE_RADIO, TOGGLE_CHECKBOX, UPDATE_TEXT, SET_TRAVERSAL, NEXT_TRAVERSAL_QUESTION, PREVIOUS_TRAVERSAL_QUESTION, TRAVERSAL_DIRECTION } from '../../Actions'
import answers from '../Answers'

const chat = (state = null, action) => {
    switch (action.type) {
        case TOGGLE_RADIO:
        case TOGGLE_CHECKBOX:
        case UPDATE_TEXT:
            if (!action.id.startsWith(state.questionIds[state.questionIds.length-1])) return state;
            return { ...state, answers: answers(state.answers, action)}
        case TRAVERSAL_DIRECTION:
            if (state === null ) return state;
            return { ...state, previous: action.previous }
        case NEXT_TRAVERSAL_QUESTION:
            if (!action.traversal.questions)
                return {
                    ...state,
                    previous: (state == null) ? false : state.previous,
                    questionIds: undefined, 
                    errors: action.traversal.errors,
                    algoId: action.traversal.algoId,
                    assessmentType: action.traversal.assessmentType
                }
            return { 
                ...state, 
                previous: (state == null) ? false : state.previous,
                questionIds: [ ...state.questionIds.concat(action.traversal.questionIds.filter(x=>!state.questionIds.includes(x))) ], 
                questions: Object.assign({}, state.questions, action.traversal.questions),
                answers: answers(Object.assign({}, state.answers, action.traversal.answers), action),
                errors: action.traversal.errors,
                algoId: action.traversal.algoId,
                assessmentType: action.traversal.assessmentType
            }
        case PREVIOUS_TRAVERSAL_QUESTION:
            var ids = [ ...state.questionIds ];
            ids.length = ids.indexOf(action.traversal.questionIds[0]) + 1;
            var questions = {};
            var newAnswers = {};
            ids.forEach(qid=> { 
                questions[qid] = (qid in action.traversal.questions) ? action.traversal.questions[qid] : state.questions[qid];
                questions[qid].answers.forEach(aid => {
                    newAnswers[aid] = (aid in action.traversal.answers) ? action.traversal.answers[aid] : state.answers[aid];
                })
            });
            return { 
                ...state, 
                previous: (state == null) ? false : state.previous,
                questionIds: ids, 
                questions: questions,
                answers: answers(newAnswers, action),
                errors: action.traversal.errors,
                algoId: action.traversal.algoId,
                assessmentType: action.traversal.assessmentType
            }
        case SET_TRAVERSAL:
            return { 
                ...action.traversal,
                previous: (state == null) ? false : state.previous, 
                minHeight: 0, 
                answers: answers(action.traversal.answers, action)
            }
        default:
            return state
    }
}

export default chat
