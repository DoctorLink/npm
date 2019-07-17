import { put, select } from 'redux-saga/effects'
import * as actions from '../../../Actions'

const defaultStateSelector = state => state.traversal;

export default (stateSelector = defaultStateSelector) => function* autoForward() {
    const traversalState = yield select(stateSelector);
    yield put(actions.traversalNext(traversalState))
}