import { call, put } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default (api) => function* products() {
    try {
        const products = yield call(api.getProducts)
        yield put(actions.clientProductsSet(products))
    } catch (error) {
        console.error("Failed to load products", error)
    }
}