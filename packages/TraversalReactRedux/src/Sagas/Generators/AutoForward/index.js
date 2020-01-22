import { put, select } from 'redux-saga/effects';
import defaultStateSelector from '../../../Selectors/traversal';
import * as actions from '../../../Actions';

export default (stateSelector = defaultStateSelector) => function* autoForward() {
    const traversalState = yield select(stateSelector);
    let forward = true;
    let answeredRadioQuestions = []
    Object.entries(traversalState.answers).forEach(answerId => {
        const answer = answerId[1]
        if (answer.controlChecked === true) 
            answeredRadioQuestions.push(`${answer.nodeId}_${answer.questionId}`)
    })
    Object.keys(traversalState.questions).forEach(question => {
        if (!answeredRadioQuestions.includes(question))
            forward = false;
    });
    if (forward)
        yield put(actions.traversalNext(traversalState))
}