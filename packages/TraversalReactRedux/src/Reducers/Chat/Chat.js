import { TOGGLE_RADIO, TOGGLE_CHECKBOX, UPDATE_TEXT, SET_TRAVERSAL } from '../../Actions'

const answers = (state = null, action) => {
    switch (action.type) {
        case TOGGLE_RADIO:
            action.answerIds.forEach((answerId) => {
                if (answerId === action.id)
                    state[answerId] = { ...state[answerId], controlChecked: !state[answerId].controlChecked };
                else 
                    state[answerId] = { ...state[answerId], controlChecked: false, controlValue: null };
            })
            return state;
        case TOGGLE_CHECKBOX:
            action.answerIds.forEach((answerId) => {
                if (answerId === action.id)
                    state[answerId] = { ...state[answerId], controlChecked: !state[answerId].controlChecked };
                else if (state[answerId].controlType !== "Checkbox") 
                    state[answerId] = { ...state[answerId], controlChecked: false, controlValue: null };
            })
            return state;
        case UPDATE_TEXT:
            action.answerIds.forEach((answerId) => {
                if (answerId === action.id)
                    state[answerId] = { ...state[answerId], controlChecked: action.value && action.Value !== "", controlValue: action.value };
                else if (state[answerId].controlType !== "Text") 
                    state[answerId] = { ...state[answerId], controlChecked: false, controlValue: null };
            })
            return state;
        default:
            return state;
    }
}

const questions = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_RADIO:
        case TOGGLE_CHECKBOX:
        case UPDATE_TEXT:
            const totalQuestions = state.length;
            return state.map((question, index) => { 
                if (totalQuestions === index + 1) {
                    return ({ ...question, answers: answers(question.answers, action)} )
                } else {
                    return question;
                }
            })
        case SET_TRAVERSAL:
            return state.map((question) => ({ ...question, answers: answers(question.answers, action)} ))
        default:
            return state;
    }
}

const traversal = (state = null, action) => {
    switch (action.type) {
        case TOGGLE_RADIO:
        case TOGGLE_CHECKBOX:
        case UPDATE_TEXT:
            return { 
                ...state, 
                questions: questions(state.questions, action)
            }
        case SET_TRAVERSAL:
            return { 
                traversalId: action.traversal.traversalId, 
                questions: questions(action.traversal.entities, action)
            }
        default:
            return state
    }
}

export default traversal
