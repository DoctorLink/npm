import { TOGGLE_RADIO, TOGGLE_CHECKBOX, UPDATE_TEXT } from '../../Actions'

const answers = (state = null, action) => {
    switch (action.type) {
        case TOGGLE_RADIO:
            action.answerIds.forEach((answerId) => {
                if (answerId === action.id)
                    state[answerId] = { ...state[answerId], controlChecked: action.checked ? true  : !state[answerId].controlChecked };
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
                else if (!["Text", "Number", "Date"].includes(state[answerId].controlType)) 
                    state[answerId] = { ...state[answerId], controlChecked: false, controlValue: null };
            })
            return state;
        default:
            return state;
    }
}

export default answers