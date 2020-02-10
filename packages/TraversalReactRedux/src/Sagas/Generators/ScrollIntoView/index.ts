import { call } from 'redux-saga/effects';

export default (elementId: string) =>
  function* scrollIntoView() {
    let currentQuestion = yield call(document.getElementById, elementId);
    if (!currentQuestion) return;
    yield call(currentQuestion.scrollIntoView, { behavior: 'smooth' });
  };
