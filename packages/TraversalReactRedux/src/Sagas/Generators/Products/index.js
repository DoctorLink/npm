import { call, put } from 'redux-saga/effects';
import constructApiGenerator from '../apiGenerator';
import * as actions from '../../../Actions';

const getApiCall = (api) => call(api.getProducts);

const getOnSuccess = (response) => function* onSuccess() {
    const json = yield response.json();
    yield put(actions.clientProductsSet(json));
}

export default (api) => constructApiGenerator(api, "Products", getApiCall, getOnSuccess);