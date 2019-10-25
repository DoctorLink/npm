import { takeLatest } from 'redux-saga/effects'
import { TRAVERSAL_START_SET } from '../../../Actions'
import createScrollToTopGenerator from '../../Generators/ScrollToTop'

export default () => ([
    takeLatest(TRAVERSAL_START_SET, createScrollToTopGenerator())
])