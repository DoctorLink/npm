import { put, select } from 'redux-saga/effects'
import * as actions from '../../../Actions'

export default () => function* autoForward() {
    const traversalState = yield select(state => state.traversal);
    yield put(actions.traversalNext(traversalState))
}