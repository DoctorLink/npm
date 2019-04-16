import { TRAVERSAL_SUMMARY_SET, TRAVERSAL_CONTINUE, TRAVERSAL_START, TRAVERSAL_PREVIOUS, TRAVERSAL_NEXT } from '../../Actions'

const summary = (state = null, action) => {
    switch (action.type) {
        case TRAVERSAL_START:
        case TRAVERSAL_CONTINUE:
        case TRAVERSAL_PREVIOUS:
        case TRAVERSAL_NEXT:
            return null;
        case TRAVERSAL_SUMMARY_SET:
            return action.summary
        default:
            return state
    }
}

export default summary