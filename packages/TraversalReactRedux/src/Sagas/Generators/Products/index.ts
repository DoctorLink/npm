import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api: { getProducts: any }) => call(api.getProducts);

const getOnSuccess = (response: { json: () => any }) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.clientProductsSet(json));
  };

export default (api: any) =>
  constructApiGenerator(api, 'Products', getApiCall, getOnSuccess);
