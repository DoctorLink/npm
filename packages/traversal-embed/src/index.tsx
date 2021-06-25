import React from 'react';
import ReactDOM from 'react-dom';
import {
  defaultTheme,
  RootTheme,
  ThemeCreator,
  TraversalApp,
} from '@doctorlink/styled-components';
import { TraversalsBaseCreate } from '@doctorlink/traversal-core';
import {
  traversalPostRequest,
  traversalGetRequest,
  TraversalStore,
  ApiUrls,
} from '@doctorlink/traversal-redux';

export { createTheme } from '@doctorlink/styled-components';

export interface Config {
  elementId: string;
  urls: ApiUrls;
  theme?: RootTheme | ThemeCreator;
  tokenFactory?: () => Promise<string | null>;
}

export function create(config: Config, body: TraversalsBaseCreate): void {
  const theme = config.theme ? config.theme : defaultTheme;
  const traversalStore = new TraversalStore(
    config.urls,
    undefined,
    config.tokenFactory
  );
  traversalStore.store.dispatch(traversalPostRequest(body));
  ReactDOM.render(
    <TraversalApp theme={theme} store={traversalStore.store} />,
    document.getElementById(config.elementId)
  );
}

export function get(config: Config, traversalId: string): void {
  const theme = config.theme ? config.theme : defaultTheme;
  const traversalStore = new TraversalStore(
    config.urls,
    undefined,
    config.tokenFactory
  );
  traversalStore.store.dispatch(traversalGetRequest(traversalId));
  ReactDOM.render(
    <TraversalApp theme={theme} store={traversalStore.store} />,
    document.getElementById(config.elementId)
  );
}
