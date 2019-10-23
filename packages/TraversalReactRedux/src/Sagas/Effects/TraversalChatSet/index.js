import { takeLatest } from 'redux-saga/effects'
import * as actions from '../../../Actions'
import * as generators from '../../Generators'

export default () => ([
    takeLatest(actions.TRAVERSAL_START_SET, generators.createScrollToTopGenerator()),
    takeLatest([actions.TRAVERSAL_CONTINUE_SET, actions.TRAVERSAL_NEXT_SET], generators.createScrollToCurrentGenerator()),
    takeLatest(actions.TRAVERSAL_PREVIOUS_SET, generators.createScrollToCurrentGenerator(true)),
])