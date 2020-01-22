import { put, select } from 'redux-saga/effects';
import defaultStateSelector from '../../../Selectors/traversal';
import * as actions from '../../../Actions';

export default (stateSelector = defaultStateSelector) => function* autoForward() {
    const traversalState = yield select(stateSelector);
    yield put(actions.traversalNext(traversalState))
}