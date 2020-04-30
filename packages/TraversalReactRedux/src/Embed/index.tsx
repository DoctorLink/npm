import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { actionCreators } from '../Actions';
import { createTraversalWebApi, createHealthAssessmentWebApi } from '../WebApi';
import {
  traversalReducer,
  summaryReducer,
  conclusionReducer,
  modalReducer,
  healthAssessmentReducer,
} from '../Reducers';
import {
  createTraversalClassicEffects,
  createSummaryEffects,
  createSymptomAssessmentEffects,
  createHealthRiskAssessmentEffects,
} from '../Sagas/Effects';
import { defaultTheme } from '../Theme';
import { ThemeProvider, Button } from '../Components';
import { Traversal, BuildTraversalActions } from '../ComponentModules';
import {
  ModalConnected as Modal,
  SummaryConnected as Summary,
  ConclusionReportConnected as Conclusions,
} from '../Containers';

const buildStore = (endpoint: string) => {
  const rootReducer = combineReducers({
    traversal: traversalReducer,
    summary: summaryReducer,
    conclusion: conclusionReducer,
    modal: modalReducer,
    healthAssessment: healthAssessmentReducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  const traversalApi = createTraversalWebApi(`${endpoint}/engine`);
  const healthAssessmentApi = createHealthAssessmentWebApi(`${endpoint}/hra`);

  const rootSaga = function* rootSaga() {
    yield all([
      ...createTraversalClassicEffects(traversalApi),
      ...createSummaryEffects(traversalApi),
      ...createSymptomAssessmentEffects(traversalApi),
      ...createHealthRiskAssessmentEffects(healthAssessmentApi),
    ]);
  };

  sagaMiddleware.run(rootSaga);

  return store;
};

const TraversalStart: React.FC<{ id: string; startOptions: StartOptions }> = ({
  id,
  startOptions,
}) => {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const traversal = useSelector((state: any) => state.traversal);
  const traversalActions = BuildTraversalActions(traversal, containerRef);

  useEffect(() => {
    dispatch(
      actionCreators.traversalStart(
        startOptions.algoId ?? id,
        startOptions.release,
        startOptions.lang,
        startOptions.nodeId,
        startOptions.injection,
        startOptions.memberReference
      )
    );
  }, [dispatch, id, startOptions]);

  if (!traversal) return null;

  if (traversal.nodeIds.length === 0) {
    return (
      <Conclusions
        traversalId={traversal.traversalId}
        assessmentType={traversal.assessmentType}
      />
    );
  }

  return (
    <>
      <Traversal
        traversal={traversal}
        containerRef={containerRef}
        actions={traversalActions}
      />
      <Summary containerRef={containerRef} />
    </>
  );
};

const TraversalButton: React.FC<{ id: string; startOptions: StartOptions }> = ({
  id,
  startOptions,
}) => {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const traversal = useSelector((state: any) => state.traversal);
  const traversalActions = BuildTraversalActions(traversal, containerRef);

  if (!traversal) {
    return (
      <Button
        onClick={() =>
          dispatch(
            actionCreators.traversalStart(
              startOptions.algoId ?? id,
              startOptions.release,
              startOptions.lang,
              startOptions.nodeId,
              startOptions.injection,
              startOptions.memberReference
            )
          )
        }
      >
        Begin
      </Button>
    );
  }

  if (traversal.nodeIds.length === 0) {
    return (
      <Conclusions
        traversalId={traversal.traversalId}
        assessmentType={traversal.assessmentType}
      />
    );
  }

  return (
    <>
      <Traversal
        traversal={traversal}
        containerRef={containerRef}
        actions={traversalActions}
      />
      <Summary containerRef={containerRef} />
    </>
  );
};

interface StartOptions {
  algoId: any;
  release: any;
  lang: any;
  nodeId: any;
  injection: any;
  memberReference: any;
}

interface EmbedOptions {
  theme: any;
  url: string;
  startOptions: StartOptions;
}

const getOptions = (userOptions?: EmbedOptions) => ({
  theme: userOptions?.theme ?? defaultTheme,
  url: userOptions?.url ?? 'https://localhost:7001',
  startOptions: userOptions?.startOptions ?? ({} as StartOptions),
});

export function embedStart(
  element: string,
  id: string,
  userOptions?: EmbedOptions
) {
  const options = getOptions(userOptions);
  const store = buildStore(options.url);
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider Theme={options.theme}>
        <TraversalStart id={id} startOptions={options.startOptions} />
        <Modal />
      </ThemeProvider>
    </Provider>,
    document.getElementById(element)
  );
}

export function embedStartButton(
  element: string,
  id: string,
  userOptions?: EmbedOptions
) {
  const options = getOptions(userOptions);
  const store = buildStore(options.url);
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider Theme={options.theme}>
        <TraversalButton id={id} startOptions={options.startOptions} />
        <Modal />
      </ThemeProvider>
    </Provider>,
    document.getElementById(element)
  );
}
