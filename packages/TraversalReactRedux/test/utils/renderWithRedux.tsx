import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';

/**
 * Renders a component tree in a Redux Provider.
 * @param ui A React component tree.
 * @param reducer The root reducer.
 * @param [initialState] The initial state. Omit if you just need the state as initialised by the reducer.
 * @return {RenderResult & { store: Store }} A RenderResult with the Redux store as an additional property.
 */
export default function renderWithRedux(
  ui: any,
  reducer: any,
  initialState?: any
) {
  const store = createStore(reducer, initialState);
  store.dispatch({ type: 'arbitrary action to initialise the state' });
  const result = render(<Provider store={store}>{ui}</Provider>);
  return { ...result, store };
}
