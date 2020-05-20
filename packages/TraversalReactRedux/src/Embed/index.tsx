import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { traversalStart, traversalContinue } from '../Actions';
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
import { TraversalStartProduct } from '../Models/Traversal';

const Container = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
`;

Container.defaultProps = {
  theme: defaultTheme,
};

export const buildEmbedStore = (endpoint: string) => {
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

export const EmbedTraversalAndConclusion: React.FC<{
  traversal: any;
  containerRef: any;
  traversalActions: any;
}> = ({ traversal, containerRef, traversalActions }) => {
  if (traversal.nodeIds.length === 0) {
    return (
      <Conclusions
        traversalId={traversal.traversalId}
        assessmentType={traversal.assessmentType}
        noRouter={true}
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

export const EmbedTraversalContinue: React.FC<{ traversalId: string }> = ({
  traversalId,
}) => {
  const dispatch = useDispatch();
  const containerRef = useRef<any>();
  const traversal = useSelector((state: any) => state.traversal);
  const traversalActions = BuildTraversalActions(traversal, containerRef);

  useEffect(() => {
    dispatch(traversalContinue(traversalId, containerRef));
  }, [dispatch, traversalId, containerRef]);

  if (!traversal) return null;

  return (
    <EmbedTraversalAndConclusion
      traversal={traversal}
      containerRef={containerRef}
      traversalActions={traversalActions}
    />
  );
};

export const EmbedTraversalStart: React.FC<{
  startOptions: TraversalStartProduct;
}> = ({ startOptions }) => {
  const dispatch = useDispatch();
  const containerRef = useRef<any>();
  const traversal = useSelector((state: any) => state.traversal);
  const traversalActions = BuildTraversalActions(traversal, containerRef);

  useEffect(() => {
    dispatch(
      traversalStart(
        startOptions.productId,
        startOptions.language,
        startOptions.release,
        startOptions.algoId,
        startOptions.nodeId,
        startOptions.injection,
        startOptions.memberReference
      )
    );
  }, [dispatch, startOptions]);

  if (!traversal) return null;

  return (
    <EmbedTraversalAndConclusion
      traversal={traversal}
      containerRef={containerRef}
      traversalActions={traversalActions}
    />
  );
};

export const EmbedTraversalButton: React.FC<{
  startOptions: TraversalStartProduct;
}> = ({ startOptions }) => {
  const dispatch = useDispatch();
  const containerRef = useRef<any>();
  const traversal = useSelector((state: any) => state.traversal);
  const traversalActions = BuildTraversalActions(traversal, containerRef);

  if (!traversal) {
    return (
      <Button
        onClick={() =>
          dispatch(
            traversalStart(
              startOptions.productId,
              startOptions.language,
              startOptions.release,
              startOptions.algoId,
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

  return (
    <EmbedTraversalAndConclusion
      traversal={traversal}
      containerRef={containerRef}
      traversalActions={traversalActions}
    />
  );
};

interface StartEmbedOptions {
  theme: any;
  url: string;
  startOptions: TraversalStartProduct;
}

interface ContinueEmbedOptions {
  theme: any;
  url: string;
  traversalId: string;
}

const getStartOptions = (userOptions?: StartEmbedOptions) => ({
  theme: userOptions?.theme ?? defaultTheme,
  url: userOptions?.url ?? 'https://localhost:7001',
  startOptions: userOptions?.startOptions ?? ({} as TraversalStartProduct),
});

const getContinueOptions = (userOptions: ContinueEmbedOptions) => ({
  theme: userOptions?.theme ?? defaultTheme,
  url: userOptions?.url ?? 'https://localhost:7001',
  traversalId: userOptions.traversalId,
});

export function embedStart(element: string, userOptions?: StartEmbedOptions) {
  const options = getStartOptions(userOptions);
  const store = buildEmbedStore(options.url);
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider Theme={options.theme}>
        <Container>
          <EmbedTraversalStart startOptions={options.startOptions} />
          <Modal />
        </Container>
      </ThemeProvider>
    </Provider>,
    document.getElementById(element)
  );
}

export function embedContinue(
  element: string,
  userOptions: ContinueEmbedOptions
) {
  const options = getContinueOptions(userOptions);
  const store = buildEmbedStore(options.url);
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider Theme={options.theme}>
        <Container>
          <EmbedTraversalContinue traversalId={options.traversalId} />
          <Modal />
        </Container>
      </ThemeProvider>
    </Provider>,
    document.getElementById(element)
  );
}

export function embedStartButton(
  element: string,
  userOptions?: StartEmbedOptions
) {
  const options = getStartOptions(userOptions);
  const store = buildEmbedStore(options.url);
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider Theme={options.theme}>
        <Container>
          <EmbedTraversalButton startOptions={options.startOptions} />
          <Modal />
        </Container>
      </ThemeProvider>
    </Provider>,
    document.getElementById(element)
  );
}
