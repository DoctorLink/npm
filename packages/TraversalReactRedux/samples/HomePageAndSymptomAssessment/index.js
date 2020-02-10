import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createBrowserHistory } from "history";
import {
    createTraversalWebApi,
    traversalReducer,
    summaryReducer,
    conclusionReducer,
    modalReducer,
    createTraversalClassicEffects,
    createSummaryEffects,
    createSymptomAssessmentEffects,
    createHistoryPushEffects,
    ThemeProvider,
    createTheme,
    ModalConnected,
    TraversalPage
} from '@doctorlink/traversal-react-redux';

const rootReducer = combineReducers({
    traversal: traversalReducer,
    summary: summaryReducer,
    conclusion: conclusionReducer,
    modal: modalReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const traversalApi = createTraversalWebApi("http://localhost:4802/engine");

const history = createBrowserHistory();

const rootSaga = function* rootSaga() {
    yield all([
        ...createTraversalClassicEffects(traversalApi),
        ...createSummaryEffects(traversalApi),
        ...createSymptomAssessmentEffects(traversalApi),
        ...createHistoryPushEffects(history)
    ])
};

sagaMiddleware.run(rootSaga);

const Home = ({dispatch}) => 
    (<button onClick={() => dispatch(actions.traversalStart("1", "2019.2.1", "EN", "", ""))}>Begin</button>)

const HomePage = connect()(Home);

const theme = createTheme({
    colors: {
        brand50: '#edecec',
        brand100: '#32443E',
        brand200: '#708673',
        lightBlue100: '#ecad00',
    },
    typography: {
        fontFamily: 'sans-serif'
    },
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" render={() => <HomePage history={history}></HomePage>} />
            <ThemeProvider Theme={theme}>
                <Route path="/traversal/:id?" component={TraversalPage} />
                <ModalConnected />
            </ThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);