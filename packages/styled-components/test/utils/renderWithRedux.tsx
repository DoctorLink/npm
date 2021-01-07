import React from 'react';
import { Provider } from 'react-redux';
import { createStore, Reducer, Store, PreloadedState } from 'redux';
import { render, RenderResult } from '@testing-library/react';

/**
 * Renders a component tree in a Redux Provider.
 * @param ui A React component tree.
 * @param reducer The root reducer.
 * @param [initialState] The initial state. Omit if you just need the state as initialised by the reducer.
 * @return A RenderResult with the Redux store as an additional property.
 */
export function renderWithRedux<S>(
  ui: JSX.Element,
  reducer: Reducer<S>,
  initialState?: S
): RenderResult & { store: Store<S> } {
  const store = createStore(reducer, initialState as PreloadedState<S>);
  store.dispatch({ type: 'arbitrary action to initialise the state' });
  const result = render(<Provider store={store}>{ui}</Provider>);
  return { ...result, store };
}
