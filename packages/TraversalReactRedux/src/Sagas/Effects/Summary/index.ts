import { takeLatest } from 'redux-saga/effects';
import { TRAVERSAL_SUMMARY_GET } from '../../../Actions';
import createSummaryGenerator from '../../Generators/Summary';

export default (traversalApi: any) => [
  takeLatest(TRAVERSAL_SUMMARY_GET, createSummaryGenerator(traversalApi)),
];
