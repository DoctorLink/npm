import { POPULATE_MODAL, CLOSE_MODAL } from '../actions'

const modal = (state = null, action) => {
    switch (action.type) {
        case POPULATE_MODAL:
            return action.content;
        case CLOSE_MODAL:
            return null;
        default:
            return state
    }
}
export default modal