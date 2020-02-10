import { call } from 'redux-saga/effects';

export default () =>
  function* webApiError(action: { apiCall: string; error: any }) {
    yield call(console.log, 'There was an error on api call ' + action.apiCall);
    yield call(console.log, action.error);
    yield call(alert, 'There was an error on api call ' + action.apiCall);
  };
