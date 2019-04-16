import { POPULATE_MODAL, CLOSE_MODAL } from '../../Actions'

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