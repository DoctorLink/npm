import * as actions from '../../Actions'

const answers = (state = null, action) => {
    switch (action.type) {
        case actions.TOGGLE_RADIO:
            action.answerIds.forEach((answerId) => {
                if (answerId === action.id)
                    state[answerId] = { ...state[answerId], controlChecked: !state[answerId].controlChecked };
                else 
                    state[answerId] = { ...state[answerId], controlChecked: false, controlValue: null };
            })
            return state;
        case actions.TOGGLE_CHECKBOX:
            action.answerIds.forEach((answerId) => {
                if (answerId === action.id)
                    state[answerId] = { ...state[answerId], controlChecked: !state[answerId].controlChecked };
                else if (state[answerId].controlType !== "Checkbox") 
                    state[answerId] = { ...state[answerId], controlChecked: false, controlValue: null };
            })
            return state;
        case actions.UPDATE_TEXT:
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
        case actions.TOGGLE_RADIO:
        case actions.TOGGLE_CHECKBOX:
        case actions.UPDATE_TEXT:
            return { 
                ...state, 
                answers: answers(state.answers, action)
            }
        case actions.TRAVERSAL_CONTINUE:
        case actions.TRAVERSAL_NEXT:
        case actions.TRAVERSAL_PREVIOUS:
            if (state === null ) return state;
            return { 
                ...state, 
                loading: true 
            }
        case actions.TRAVERSAL_DIRECTION:
            if (state === null ) return state;
            return { 
                ...state, 
                previous: action.previous 
            }
        case actions.SET_TRAVERSAL:
            return { 
                ...action.traversal, 
                previous: (state == null) ? false : state.previous, 
                loading: false,
                answers: answers(action.traversal.answers, action)
            }
        default:
            return state
    }
}

export default traversal
