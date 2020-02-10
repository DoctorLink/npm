import { takeLatest } from 'redux-saga/effects';
import { WEB_API_NOT_OK, WEB_API_ERROR } from '../../../Actions';
import createWebApiNotOkGenerator from '../../Generators/WebApiNotOk';
import createWebApiErrorGenerator from '../../Generators/WebApiError';

export default () => [
  takeLatest<any>(WEB_API_NOT_OK, createWebApiNotOkGenerator()),
  takeLatest<any>(WEB_API_ERROR, createWebApiErrorGenerator()),
];
