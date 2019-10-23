import { call, put } from 'redux-saga/effects'
import flattenTraversalNodeCollection from '../../../Helpers/flattenTraversalNodeCollection';
import createTraversalResponse from '../../../Helpers/createTraversalResponse';

import * as actions from '../../../Actions'

export default (api) => function* traversalNext(action) {
    yield put(actions.traversalDirection(false))
    try {
        const json = yield call(api.next,  createTraversalResponse(action.traversal))
        yield put(actions.traversalNextSet(flattenTraversalNodeCollection(json)))
    } catch (error) {
        console.log("traversalNext error")
        console.log(error)
        alert("error")
    }
}
