import { takeLatest } from 'redux-saga/effects';
import { TRAVERSAL_SYMPTOM_REPORT_GET } from '../../../Actions';
import createSymptomReportGenerator from '../../Generators/SymptomReport';

export default (traversalApi: any) => [
  takeLatest(
    TRAVERSAL_SYMPTOM_REPORT_GET,
    createSymptomReportGenerator(traversalApi)
  ),
];
