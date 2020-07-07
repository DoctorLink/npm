import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { traversalRootReducersMapObject } from '../src/Reducers';
import { combineReducers } from 'redux';
import { renderWithRedux } from './utils';
import HealthAssessment from '../src/Containers/HealthAssessment/HealthAssessment';
import {
  healthRisksGetResponse,
  healthAgeGetResponse,
  wellnessGetResponse,
} from '../src/Actions';
import { HealthAgeModel, HealthRisksModel } from 'Models';

describe('HealthAssessment root component', () => {
  // Hacky way to force a re-render after useEffect runs: https://github.com/testing-library/react-testing-library/issues/215#issuecomment-438294336
  beforeEach(() =>
    jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
  );
  afterEach(() => jest.spyOn(React, 'useEffect').mockRestore());

  const renderComponent = () => {
    const rootTraversalReducer = combineReducers(
      traversalRootReducersMapObject
    );
    const history = createMemoryHistory({ initialEntries: ['/traversal/abc'] });
    const result = renderWithRedux(
      <Router history={history}>
        <HealthAssessment traversalId="abc" />
      </Router>,
      rootTraversalReducer
    );
    return { ...result, history };
  };

  test('Initial render: shows nothing', () => {
    const { store, history, ...component } = renderComponent();

    expect(history.location.pathname).toBe('/traversal/abc');
    expect(component.container.innerHTML).toBe('');
  });

  test('Zero health age loaded: still shows nothing', () => {
    const { store, history, ...component } = renderComponent();

    store.dispatch(healthAgeGetResponse({ healthAge: 0 } as HealthAgeModel));

    expect(history.location.pathname).toBe('/traversal/abc');
    expect(component.container.innerHTML).toBe('');
  });

  test('Positive health age loaded: redirects to health age page', () => {
    const { store, history, ...component } = renderComponent();

    store.dispatch(healthAgeGetResponse({ healthAge: 40 } as HealthAgeModel));

    expect(history.location.pathname).toBe('/traversal/abc/health-age');
    expect(component.getByText('Your health age report')).toBeInTheDocument();
  });

  test('Zero health age, non-empty risks loaded: redirects to risks page', () => {
    const { store, history, ...component } = renderComponent();

    store.dispatch(healthAgeGetResponse({ healthAge: 0 } as HealthAgeModel));
    store.dispatch(
      healthRisksGetResponse({
        risks: [{ time: 50, name: 'Heart Disease' }],
      } as HealthRisksModel)
    );

    expect(history.location.pathname).toBe('/traversal/abc/risks');
    expect(
      component.getByText('Your risks before the age of')
    ).toBeInTheDocument();
  });

  test('Non-empty risks loaded, waiting for health age: still shows nothing', () => {
    const { store, history, ...component } = renderComponent();

    store.dispatch(
      healthRisksGetResponse({
        risks: [{ time: 50, name: 'Heart Disease' }],
      } as HealthRisksModel)
    );

    expect(history.location.pathname).toBe('/traversal/abc');
    expect(component.container.innerHTML).toBe('');
  });

  test('Zero health age, empty risks loaded, waiting for wellbeing: still shows nothing', () => {
    const { store, history, ...component } = renderComponent();

    store.dispatch(healthAgeGetResponse({ healthAge: 0 } as HealthAgeModel));
    store.dispatch(
      healthRisksGetResponse({ risks: [] as any[] } as HealthRisksModel)
    );

    expect(history.location.pathname).toBe('/traversal/abc');
    expect(component.container.innerHTML).toBe('');
  });

  test('Zero health age, empty risks, non-empty wellbeing loaded: redirects to wellbeing', () => {
    const { store, history, ...component } = renderComponent();

    store.dispatch(healthAgeGetResponse({ healthAge: 0 } as HealthAgeModel));
    store.dispatch(
      healthRisksGetResponse({ risks: [] as any[] } as HealthRisksModel)
    );
    store.dispatch(
      wellnessGetResponse({
        scores: [{ name: 'Diet', score: 50 }],
        checkableConclusions: [],
      })
    );

    expect(history.location.pathname).toBe('/traversal/abc/wellbeing');
    expect(
      component.getByText('Your lifestyle and wellbeing scores')
    ).toBeInTheDocument();
  });
});
