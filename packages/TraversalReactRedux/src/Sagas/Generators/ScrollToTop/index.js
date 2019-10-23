import { call } from 'redux-saga/effects'

export default () => function* scrollToTop() {
    yield call(window.scroll, 0, 0)
}