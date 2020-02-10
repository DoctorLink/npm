import { select, call } from 'redux-saga/effects';
import defaultStateSelector from '../../../Selectors/traversal';

export default (history: any[], stateSelector: any = defaultStateSelector) =>
  function* pushHistory() {
    const traversalState = yield select(stateSelector);
    yield call(history.push, '/traversal/' + traversalState.traversalId);
  };
