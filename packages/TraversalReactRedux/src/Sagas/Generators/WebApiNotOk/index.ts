import { call } from 'redux-saga/effects';

export default () =>
  function* webApiNotOk(action: { apiCall: string; response: any }) {
    yield call(console.log, 'There was an error on api call ' + action.apiCall);
    yield call(console.log, action.response);
    // if (action.response.bodyUsed)
    //     console.log(yield action.response.json());
    yield call(alert, 'There was an error on api call ' + action.apiCall);
  };
