import { takeLatest } from 'redux-saga/effects'
import { WEB_API_NOT_OK, WEB_API_ERROR } from '../../../Actions'
import createWebApiNotOkGenerator from '../../Generators/WebApiNotOk'
import createWebApiErrorGenerator from '../../Generators/WebApiError'

export default () => ([
    takeLatest(WEB_API_NOT_OK, createWebApiNotOkGenerator()),
    takeLatest(WEB_API_ERROR, createWebApiErrorGenerator())
])