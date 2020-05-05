import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';
import { Product } from '../../../Models/Product'

const getApiCall = (api: { getProducts: any }) => call(api.getProducts);

const getOnSuccess = (response: { json: () => Array<Product> }) =>
  function* onSuccess() {
    const json = yield response.json();
    yield put(actions.clientProductsSet(json));
  };

export default (api: any) =>
  constructApiGenerator(api, 'Products', getApiCall, getOnSuccess);
