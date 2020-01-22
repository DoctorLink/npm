
import { select, call } from 'redux-saga/effects';
import defaultStateSelector from '../../../Selectors/traversal';

export default (history, stateSelector = defaultStateSelector) => function* pushHistory() {
    const traversalState = yield select(stateSelector);
    yield call(history.push, "/traversal/" + traversalState.traversalId);
}