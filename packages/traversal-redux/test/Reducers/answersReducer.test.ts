import {
  traversalRadioToggle,
  traversalCheckboxToggle,
  traversalValueChange,
  algoSearchDataGetResponse,
} from '../../src/Actions';
import { answersReducer } from '../../src/Reducers';
import { TraversalAnswer } from '@doctorlink/traversal-core';

describe('Answers reducer', () => {
  let state: Record<string, TraversalAnswer>;

  // Shouldn't need to put this in a beforeEach block, because the reducer shouldn't mutate the state... but it does.
  beforeEach(() => {
    state = {
      '1_1_1': {
        nodeId: 1,
        questionId: 2,
        answerId: 1,
        displayText: 'Type something...',
        controlType: 'Text',
        explanation: null,
      },
      '1_1_2': {
        nodeId: 1,
        questionId: 2,
        answerId: 2,
        displayText: '...or select this option',
        controlType: 'Radio',
        explanation: null,
      },
      '2_2_2': {
        nodeId: 2,
        questionId: 2,
        answerId: 2,
        displayText: 'Yes',
        controlType: 'Radio',
        explanation: null,
      },
      '2_2_3': {
        nodeId: 2,
        questionId: 2,
        answerId: 3,
        displayText: 'No',
        controlType: 'Radio',
        explanation: null,
      },
      '3_3_4': {
        nodeId: 3,
        questionId: 3,
        answerId: 4,
        displayText: 'This',
        controlType: 'Checkbox',
        explanation: null,
      },
      '3_3_5': {
        nodeId: 3,
        questionId: 3,
        answerId: 5,
        displayText: 'That',
        controlType: 'Checkbox',
        explanation: null,
      },
      '4_1_1': {
        nodeId: 4,
        questionId: 1,
        answerId: 1,
        displayText: 'Select an option',
        controlType: 'Dropdown',
      },
    };
  });

  describe('traversalValueChange', () => {
    const action = traversalValueChange('1_1_1', ['1_1_1', '1_1_2'], 'A');

    test('should set controlValue and controlChecked', () => {
      const updatedState = answersReducer(state, action);

      expect(updatedState['1_1_1'].controlValue).toBe('A');
      expect(updatedState['1_1_1'].controlChecked).toBe(true);
    });

    test('when an associated radio answer is checked, should uncheck it', () => {
      const radioAction = traversalRadioToggle('1_1_2', ['1_1_1', '1_1_2']);
      let updatedState = answersReducer(state, radioAction);

      updatedState = answersReducer(updatedState, action);

      expect(updatedState['1_1_1'].controlValue).toBe('A');
      expect(updatedState['1_1_1'].controlChecked).toBe(true);
      expect(updatedState['1_1_2'].controlChecked).toBe(false);
    });
  });

  describe('traversalRadioToggle', () => {
    const action = traversalRadioToggle('2_2_2', ['2_2_2', '2_2_3'], true);

    test('when nothing is checked, should check selected answer', () => {
      const updatedState = answersReducer(state, action);

      expect(updatedState['2_2_2'].controlChecked).toBe(true);
      expect(updatedState['2_2_3'].controlChecked).toBe(false);
    });

    test('when an associated radio answer is checked, should uncheck it', () => {
      let updatedState = answersReducer(state, action);

      const action2 = traversalRadioToggle('2_2_3', ['2_2_2', '2_2_3'], true);
      updatedState = answersReducer(updatedState, action2);

      expect(updatedState['2_2_2'].controlChecked).toBe(false);
      expect(updatedState['2_2_3'].controlChecked).toBe(true);
    });

    test('when an associated text answer is checked, should clear it', () => {
      const textAction = traversalValueChange('1_1_1', ['1_1_1', '1_1_2'], 'A');
      let updatedState = answersReducer(state, textAction);

      const radioAction = traversalRadioToggle('1_1_2', ['1_1_1', '1_1_2']);
      updatedState = answersReducer(updatedState, radioAction);

      expect(updatedState['1_1_2'].controlChecked).toBe(true);
      expect(updatedState['1_1_1'].controlChecked).toBe(false);
      expect(updatedState['1_1_1'].controlValue).toBe(null);
    });
  });

  describe('traversalCheckboxToggle', () => {
    const action = traversalCheckboxToggle('3_3_4', ['3_3_4', '3_3_5']);

    test('when checkbox is unchecked, should check it', () => {
      const updatedState = answersReducer(state, action);

      expect(updatedState['3_3_4'].controlChecked).toBe(true);
      expect(updatedState['3_3_5'].controlChecked).toBeFalsy();
    });

    test('when checkbox is checked, should uncheck it', () => {
      let updatedState = answersReducer(state, action);
      updatedState = answersReducer(updatedState, action);

      expect(updatedState['3_3_4'].controlChecked).toBe(false);
      expect(updatedState['3_3_5'].controlChecked).toBeFalsy();
    });

    test('when an associated checkbox is checked, should keep it checked', () => {
      let updatedState = answersReducer(state, action);

      const action2 = traversalCheckboxToggle('3_3_5', ['3_3_4', '3_3_5']);
      updatedState = answersReducer(updatedState, action2);

      expect(updatedState['3_3_4'].controlChecked).toBe(true);
      expect(updatedState['3_3_5'].controlChecked).toBe(true);
    });
  });

  describe('algoSearchDataGetResponse', () => {
    const answerId = '4_1_1';
    const action = algoSearchDataGetResponse(answerId, [
      { assetId: 123, algoName: 'Test Algo', keywords: [] },
    ]);

    test('should populate specified answer with data', () => {
      const updatedState = answersReducer(state, action);

      const answer = updatedState[answerId];
      expect(answer.data).toBeTruthy();
      expect(answer.data.algos).toEqual(action.algos);
    });
  });
});
