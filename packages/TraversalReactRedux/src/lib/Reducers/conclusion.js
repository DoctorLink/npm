import { TRAVERSAL_CONCLUSION_SET, TRAVERSAL_CONTINUE, TRAVERSAL_START, TRAVERSAL_PREVIOUS, TRAVERSAL_NEXT } from '../actions'

const conclusion = (state = null, action) => {
    switch (action.type) {
        case TRAVERSAL_START:
        case TRAVERSAL_CONTINUE:
        case TRAVERSAL_PREVIOUS:
        case TRAVERSAL_NEXT:
            return null;
        case TRAVERSAL_CONCLUSION_SET:
            return action.conclusion
        default:
            return state
    }
}

export default conclusion