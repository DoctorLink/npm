import { takeLatest } from 'redux-saga/effects'
import { TRAVERSAL_START_SET } from '../../../Actions'
import createHistoryPushGenerator from '../../Generators/HistoryPush'

export default history => ([
    takeLatest(TRAVERSAL_START_SET, createHistoryPushGenerator(history))
])