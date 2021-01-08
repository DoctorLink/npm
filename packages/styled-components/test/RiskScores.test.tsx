import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { traversalRootReducersMapObject } from '@doctorlink/traversal-redux';
import { renderWithRedux } from './utils';
import { RiskScoresConnected } from '../src/Containers/HealthAssessment/Risks/RiskScores';
import { combineReducers } from 'redux';
import {
  HealthRisksModel,
  TraversalRootState,
} from '@doctorlink/traversal-core';

describe('RiskScores component', () => {
  const riskSummary = {
    age: 67,
    risks: [
      { time: 3, name: 'Heart Disease', current: 0.2, minimum: 0.1 },
      { time: 13, name: 'Heart Disease', current: 0.3, minimum: 0.2 },
      { time: 23, name: 'Heart Disease', current: 0.4, minimum: 0.3 },
      { time: 3, name: 'Lung Cancer', current: 0.2, minimum: 0.1 },
      { time: 13, name: 'Lung Cancer', current: 0.3, minimum: 0.2 },
      { time: 23, name: 'Lung Cancer', current: 0.4, minimum: 0.3 },
    ],
  } as HealthRisksModel;

  const state = {
    healthAssessment: {
      riskSummary,
      checkedConclusions: [],
    },
  } as TraversalRootState;

  // Mock getBoundingClientRect to make UpdateWhenVisible work. The default jsdom implementation returns zero for all properties.
  const defaultGetBoundingClientRect =
    SVGElement.prototype.getBoundingClientRect;
  beforeEach(
    () =>
      (SVGElement.prototype.getBoundingClientRect = () =>
        ({ top: 0, left: 0, bottom: 100, right: 100 } as DOMRect))
  );
  afterEach(
    () =>
      (SVGElement.prototype.getBoundingClientRect = defaultGetBoundingClientRect)
  );
  const rootTraversalReducer = combineReducers(traversalRootReducersMapObject);

  const renderComponent = () =>
    renderWithRedux(
      <RiskScoresConnected traversalId="test" />,
      rootTraversalReducer,
      state
    );

  const getDropdown = () =>
    screen
      .getByText(/Your risks before the age of/)
      .parentElement.getElementsByTagName('select')[0];

  test("shows the age options that are greater than the user's age", () => {
    renderComponent();
    const options = getDropdown().getElementsByTagName('option');
    expect(Array.from(options).map((opt) => opt.value)).toEqual([
      '70',
      '80',
      '90',
      '100',
      '110',
    ]);
  });

  test('age defaults to 90', () => {
    renderComponent();
    expect(getDropdown()).toHaveValue('90');
  });

  test('shows risks for the selected age', () => {
    renderComponent();
    expect(screen.getByText('Heart Disease').parentElement).toHaveTextContent(
      'Current: 0.4%, minimum: 0.3%'
    );
    expect(screen.getByText('Lung Cancer').parentElement).toHaveTextContent(
      'Current: 0.4%, minimum: 0.3%'
    );
  });

  test('changing the selected age updates the risks', () => {
    renderComponent();
    const dropdown = getDropdown();
    fireEvent.change(dropdown, { target: { value: '70' } });

    expect(screen.getByText('Heart Disease').parentElement).toHaveTextContent(
      'Current: 0.2%, minimum: 0.1%'
    );
    expect(screen.getByText('Lung Cancer').parentElement).toHaveTextContent(
      'Current: 0.2%, minimum: 0.1%'
    );
  });
});
