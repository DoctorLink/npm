import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { traversalRootReducersMapObject } from '../src/Reducers';
import { combineReducers } from 'redux';
import { renderWithRedux } from './utils';
import CheckableConclusions from '../src/Containers/HealthAssessment/Conclusions/CheckableConclusions';

describe('CheckableConclusions component', () => {
  const conclusions: Array<any> = [
    {
      assetId: 1000,
      displayText: 'Lower BP to less than 140/90',
      explanation: '',
    },
    { assetId: 1001, displayText: 'Eat more healthily', explanation: '' },
    {
      assetId: 1002,
      displayText: 'Your Mediterranean Diet Rating is 50 out of 100',
      explanation: '',
    },
    { assetId: 1003, displayText: 'Stop smoking', explanation: '' },
    {
      assetId: 1004,
      displayText: 'Eat more vegetables',
      silent: true,
      explanation: '',
    },
  ];

  const props = {
    traversalId: 'test',
    conclusions,
  };

  const initialState = {
    healthAssessment: { checkedConclusions: [] },
  };

  const rootTraversalReducer = combineReducers(traversalRootReducersMapObject);
  const renderComponent = (props: any) =>
    renderWithRedux(
      <CheckableConclusions {...props} />,
      rootTraversalReducer,
      initialState
    );

  const queryCheckboxByConclusionId = (result: any, assetId: any) =>
    result.queryByLabelText(
      conclusions.find(c => c.assetId === assetId).displayText
    );

  test('Shows all conclusions', () => {
    const result = renderComponent(props);

    expect(queryCheckboxByConclusionId(result, 1000)).toBeTruthy();
    expect(queryCheckboxByConclusionId(result, 1001)).toBeTruthy();
    expect(queryCheckboxByConclusionId(result, 1002)).toBeTruthy();
    expect(queryCheckboxByConclusionId(result, 1003)).toBeTruthy();
    expect(queryCheckboxByConclusionId(result, 1004)).toBeTruthy();
  });

  test('Checking a conclusion updates store', () => {
    const result: any = renderComponent(props);

    const conc1001 = queryCheckboxByConclusionId(result, 1001);
    const conc1003 = queryCheckboxByConclusionId(result, 1003);

    fireEvent.click(conc1001);
    expect(conc1001.checked).toBe(true);
    expect(conc1003.checked).toBe(false);
    expect(
      result.store.getState().healthAssessment.checkedConclusions
    ).toEqual([1001]);

    fireEvent.click(conc1003);
    expect(conc1001.checked).toBe(true);
    expect(conc1003.checked).toBe(true);
    expect(
      result.store.getState().healthAssessment.checkedConclusions
    ).toEqual([1001, 1003]);

    fireEvent.click(conc1001);
    expect(conc1001.checked).toBe(false);
    expect(conc1003.checked).toBe(true);
    expect(
      result.store.getState().healthAssessment.checkedConclusions
    ).toEqual([1003]);
  });

  test('Renders nothing if there are no conclusions to display', () => {
    const result = renderComponent({ ...props, conclusions: [] });

    expect(result.container.innerHTML).toBe('');
  });
});
