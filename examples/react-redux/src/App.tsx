import React, { FC, useEffect, useRef } from "react";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch, Provider } from "react-redux";
import { Link, Route, Router, useParams } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { all, takeLatest } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { TraversalState } from "@doctorlink/traversal-core";

import {
  traversalPostRequest,
  traversalGetRequest,
  TRAVERSAL_POST_RESPONSE,
  TraversalPostResponse,
  TraversalsServiceSagas,
  HealthRiskAssessmentServiceSagas,
  traversalReducer,
  summaryReducer,
  conclusionReducer,
  healthAssessmentReducer,
  modalReducer,
} from "@doctorlink/traversal-redux";

import {
  SummaryConnected as Summary,
  TraversalForm,
  useTraversalActions,
  createTheme,
  ThemeProvider,
  ModalConnected,
} from "@doctorlink/styled-components";

import HealthAssessmentResults from "@doctorlink/styled-components/lib/Containers/HealthAssessment/HealthAssessmentStatic";

const TraversalPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const traversal = useSelector(
    (state: { traversal: TraversalState }) => state.traversal
  );
  const dispatch = useDispatch();

  const loadTraversal = !traversal || !traversal.traversalId;

  useEffect(() => {
    if (loadTraversal) dispatch(traversalGetRequest(id));
  }, [loadTraversal]);

  // If no traversal in store render nothing.
  if (loadTraversal) {
    return <h1>None</h1>;
  }

  // If traversal has reached end, render conclusions.
  if (traversal.nodeIds.length === 0) {
    return <HealthAssessmentResults traversalId={traversal.traversalId} />;
  }

  // Render Traversal Questions
  return (
    <>
      <CustomTraversal />
      <Summary />
    </>
  );
};

const CustomRadio = ({ ...props }) => (
  <input type="radio" className="custom-class" {...props} />
);

const CustomTraversal: React.FC<{}> = () => {
  const ref = useRef();
  const traversal = useSelector(
    (state: { traversal: TraversalState }) => state.traversal
  );
  const actions = useTraversalActions(traversal);

  return (
    <div>
      <TraversalForm
        traversal={traversal}
        containerRef={ref}
        actions={actions}
        components={{
          Radio: CustomRadio,
          QuestionTitle: undefined,
        }}
      />
      <button
        type="button"
        disabled={traversal.loading || traversal.previousDisabled}
        onClick={actions.previous}
      >
        previous
      </button>
      <button
        type="button"
        disabled={traversal.loading || traversal.nextDisabled}
        onClick={actions.next}
      >
        next
      </button>
      <button type="button" onClick={actions.showSummary}>
        summary
      </button>
    </div>
  );
};

const theme = createTheme({
  colors: {
    brand50: "#edecec",
    brand100: "#B8A34A",
    brand200: "#B8A34A",
    lightBlue100: "#ecad00",
  },
  typography: {
    fontFamily: "'Abel', sans-serif",
    regular: {
      size: 16,
    },
  },
  spacing: {
    vertical: 20,
  },
});

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const productId = 2; // 2 = HRA
  return (
    <div>
      <button onClick={() => dispatch(traversalPostRequest({ productId }))}>
        start
      </button>
    </div>
  );
};

export const App = () => {
  const history = createBrowserHistory();

  const reducers = combineReducers({
    traversal: traversalReducer,
    summary: summaryReducer,
    conclusion: conclusionReducer,
    healthAssessment: healthAssessmentReducer,
    modal: modalReducer,
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  const traversalSagas = new TraversalsServiceSagas("/api/engine/");
  const hraSagas = new HealthRiskAssessmentServiceSagas("/api/hra/");
  const traversalStarted = takeLatest(
    TRAVERSAL_POST_RESPONSE,
    function* webApiError(action: TraversalPostResponse) {
      console.log(action.traversal.traversalId);
      history.push(`/traversal/${action.traversal.traversalId}`);
    }
  );

  sagaMiddleware.run(function* () {
    yield all([
      traversalStarted,
      ...traversalSagas.effects,
      ...hraSagas.effects,
    ]);
  });

  return (
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider Theme={theme}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/traversal/:id">
            <TraversalPage />
            <Link to="/">home</Link>
          </Route>
          <ModalConnected />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};
export default App;
