import { TOGGLE_RADIO, TOGGLE_CHECKBOX, UPDATE_TEXT, SET_TRAVERSAL, TRAVERSAL_DIRECTION } from '../actions'

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

const traversal = (state = null, action) => {
    switch (action.type) {
        case TOGGLE_RADIO:
        case TOGGLE_CHECKBOX:
        case UPDATE_TEXT:
            return { ...state, answers: answers(state.answers, action)}
        case TRAVERSAL_DIRECTION:
            if (state === null ) return state;
            return { ...state, previous: action.previous }
        case SET_TRAVERSAL:
            return { ...action.traversal, previous: (state == null) ? false : state.previous, answers: answers(action.traversal.answers, action)}
        default:
            return state
    }
}

export default traversal
