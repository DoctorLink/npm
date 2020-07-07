import { takeLatest, call } from 'redux-saga/effects';
import { SERVICE_SAGA_ERROR, ServiceSagaError } from '../Actions/Service';

export const serviceSagaErrorHandler = takeLatest(
  SERVICE_SAGA_ERROR,
  function* webApiError(action: ServiceSagaError) {
    const { response, error } = action.serviceResponse;
    const url = response ? response.url : error.response.url;
    yield call(console.log, 'There was an error on api call ' + url);
    yield call(alert, 'There was an error on api call ' + url);
    if (response) console.log(response);
    if (error) console.log(error);
  }
);
