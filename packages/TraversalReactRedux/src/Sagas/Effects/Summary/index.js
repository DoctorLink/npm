import { takeLatest } from 'redux-saga/effects'
import { TRAVERSAL_SUMMARY_GET } from '../../../Actions'
import createSummaryGenerator from '../../Generators/Summary'

export default traversalApi => ([
    takeLatest(TRAVERSAL_SUMMARY_GET, createSummaryGenerator(traversalApi))
])