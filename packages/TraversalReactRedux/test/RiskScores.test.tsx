import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { rootTraversalReducer } from '../src/Reducers';
import { renderWithRedux } from './utils';
import RiskScores from '../src/Containers/HealthAssessment/Risks/RiskScores';

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
  };

  const state = {
    healthAssessment: {
      riskSummary,
      checkedConclusions: [],
    },
  };

  // Mock getBoundingClientRect to make UpdateWhenVisible work. The default jsdom implementation returns zero for all properties.
  var defaultGetBoundingClientRect = SVGElement.prototype.getBoundingClientRect;
  beforeEach(
    () =>
      (SVGElement.prototype.getBoundingClientRect = () =>
        ({ top: 0, left: 0, bottom: 100, right: 100 } as any))
  );
  afterEach(
    () =>
      (SVGElement.prototype.getBoundingClientRect = defaultGetBoundingClientRect)
  );

  const renderComponent = () =>
    renderWithRedux(<RiskScores />, rootTraversalReducer, state);

  const getDropdown = (result: any) =>
    result
      .getByText(/Your risks before the age of/)
      .getElementsByTagName('select')[0];

  test("shows the age options that are greater than the user's age", () => {
    const result = renderComponent();
    const options = getDropdown(result).getElementsByTagName('option');
    expect(Array.from(options).map((opt: any) => opt.value)).toEqual([
      '70',
      '80',
      '90',
      '100',
      '110',
    ]);
  });

  test('age defaults to 90', () => {
    const result = renderComponent();
    expect(getDropdown(result)).toHaveValue('90');
  });

  test('shows risks for the selected age', () => {
    const result = renderComponent();
    expect(result.getByText('Heart Disease').parentElement).toHaveTextContent(
      'Current: 0.4%, minimum: 0.3%'
    );
    expect(result.getByText('Lung Cancer').parentElement).toHaveTextContent(
      'Current: 0.4%, minimum: 0.3%'
    );
  });

  test('changing the selected age updates the risks', () => {
    const result = renderComponent();
    const dropdown = getDropdown(result);
    fireEvent.change(dropdown, { target: { value: '70' } });

    expect(result.getByText('Heart Disease').parentElement).toHaveTextContent(
      'Current: 0.2%, minimum: 0.1%'
    );
    expect(result.getByText('Lung Cancer').parentElement).toHaveTextContent(
      'Current: 0.2%, minimum: 0.1%'
    );
  });
});
