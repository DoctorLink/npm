
import { select, call } from 'redux-saga/effects'

const defaultStateSelector = state => state.traversal;

export default (history, stateSelector = defaultStateSelector) => function* pushHistory() {
    const traversalState = yield select(stateSelector);
    yield call(history.push, "/traversal/" + traversalState.traversalId)
}