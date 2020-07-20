import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { traversalPostResponse } from '../../src/Actions';
import { TraversalApp } from '../../src/Containers';
import { TraversalModel, ServiceResponse } from '../../src/Models';
import { TraversalStore } from '../../src/Store';
import { createTraversalModel } from '../utils';
import { TraversalsService } from '../../src/Services/Traversals';

const mockFetch: () => Promise<ServiceResponse<any>> = () =>
  Promise.resolve({ data: {} });

const mockService = {
  fetch: jest.fn(mockFetch),
  respond: jest.fn(mockFetch),
  previous: jest.fn(mockFetch),
};

jest.mock('../../src/Services/Traversals', () => ({
  TraversalsService: class implements Partial<TraversalsService> {
    fetch = mockService.fetch;
    respond = mockService.respond;
    previous = mockService.previous;
  },
}));

const createStore = () =>
  new TraversalStore('http://engine.test', 'http://hra.test');

describe('TraversalApp', () => {
  let result: RenderResult;

  beforeEach(() => {
    mockService.respond.mockClear();
    mockService.previous.mockClear();
  });

  describe('rendering a question', () => {
    beforeEach(() => {
      const { store } = createStore();
      const traversal = createTraversalModel({
        algoName: 'My Algo',
        nodes: [
          {
            questions: [
              {
                title: 'Question title',
                displayText: 'Question text',
              },
            ],
          },
        ],
      });
      store.dispatch(traversalPostResponse(traversal));

      result = render(<TraversalApp store={store} />);
    });

    test('should render algo name', () =>
      expect(result.queryByText('My Algo')).toBeInTheDocument());

    test('should render question title', () =>
      expect(result.queryByText('Question title')).toBeInTheDocument());

    test('should render question display text', () =>
      expect(result.queryByText('Question text')).toBeInTheDocument());
  });

  describe('radio button question', () => {
    const { store } = createStore();
    let traversal: TraversalModel;

    beforeEach(() => {
      traversal = createTraversalModel({
        traversalId: 'abc',
        nodes: [
          {
            questions: [
              {
                answers: [
                  {
                    answerId: 1,
                    displayText: 'Answer 1',
                    controlType: 'Radio',
                  },
                  {
                    answerId: 2,
                    displayText: 'Answer 2',
                    controlType: 'Radio',
                  },
                ],
              },
            ],
          },
        ],
      });
      store.dispatch(traversalPostResponse(traversal));

      result = render(<TraversalApp store={store} />);
    });

    test('should send response when next button is clicked', () => {
      const nextButton = result.getByText('Next');

      fireEvent.click(nextButton);

      expect(mockService.respond).toHaveBeenCalledTimes(1);
    });

    test('should send response when radio button is selected', () => {
      const answer1 = result.getByLabelText('Answer 1');

      fireEvent.click(answer1, { clientX: 100, clientY: 100 });

      expect(mockService.respond).toHaveBeenCalledTimes(1);
    });

    test('should request previous question when previous button is clicked', () => {
      const previousButton = result.getByText('Previous');

      fireEvent.click(previousButton);

      expect(mockService.previous).toHaveBeenCalledTimes(1);
    });
  });

  describe('question with checkboxes and a radio button', () => {
    const { store } = createStore();
    let traversal: TraversalModel;

    beforeEach(() => {
      spyOn(store, 'dispatch').and.callThrough();
      traversal = createTraversalModel({
        traversalId: 'abc',
        nodes: [
          {
            questions: [
              {
                answers: [
                  {
                    answerId: 1,
                    displayText: 'Answer 1',
                    controlType: 'Checkbox',
                  },
                  {
                    answerId: 2,
                    displayText: 'Answer 2',
                    controlType: 'Checkbox',
                  },
                  {
                    answerId: 3,
                    displayText: 'None of the above',
                    controlType: 'Radio',
                  },
                ],
              },
            ],
          },
        ],
      });
      store.dispatch(traversalPostResponse(traversal));

      result = render(<TraversalApp store={store} />);
    });

    test('selecting checkbox should update state and not send response', () => {
      const answer1 = result.getByLabelText('Answer 1');

      fireEvent.click(answer1, { clientX: 100, clientY: 100 });

      expect(mockService.respond).not.toHaveBeenCalled();
      const answers = Object.values(store.getState().traversal.answers);
      expect(answers[0].controlChecked).toBe(true);
      expect(answers[1].controlChecked).toBe(false);
      expect(answers[2].controlChecked).toBe(false);
    });

    test('should send response when radio button is selected', () => {
      const answerNone = result.getByLabelText('None of the above');

      fireEvent.click(answerNone, { clientX: 100, clientY: 100 });

      expect(mockService.respond).toHaveBeenCalledTimes(1);
    });
  });
});
