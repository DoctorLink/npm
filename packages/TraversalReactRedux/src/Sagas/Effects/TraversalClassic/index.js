import { takeLatest } from 'redux-saga/effects'
import * as actions from '../../../Actions'
import * as generators from '../../Generators'

export default traversalApi => ([
    takeLatest(actions.TRAVERSAL_START, generators.createStartGenerator(traversalApi)),
    takeLatest(actions.TRAVERSAL_CONTINUE, generators.createContinueGenerator(traversalApi)),
    takeLatest(actions.TRAVERSAL_NEXT, generators.createNextGenerator(traversalApi)),
    takeLatest(actions.TRAVERSAL_PREVIOUS, generators.createPreviousGenerator(traversalApi)),
    takeLatest(actions.TOGGLE_RADIO, generators.createAutoForwardGenerator()),
    takeLatest(actions.TRAVERSAL_CONCLUSION_GET, generators.createConclusionsGenerator(traversalApi))
])