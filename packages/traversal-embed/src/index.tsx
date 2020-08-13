import React from 'react';
import ReactDOM from 'react-dom';
import { defaultTheme, TraversalApp } from '@doctorlink/styled-components';
import { TraversalsBaseCreate } from '@doctorlink/traversal-core';
import {
  traversalPostRequest,
  traversalGetRequest,
  TraversalStore,
} from '@doctorlink/traversal-redux';

export { createTheme } from '@doctorlink/styled-components';

export interface Config {
  elementId: string;
  urls: { engine: string; hra: string };
  theme?: any;
  tokenFactory?: () => Promise<string | null>;
}

export function create(config: Config, body: TraversalsBaseCreate) {
  const theme = config.theme ? config.theme : defaultTheme;
  const traversalStore = new TraversalStore(
    config.urls.engine,
    config.urls.hra,
    undefined,
    config.tokenFactory
  );
  traversalStore.store.dispatch(traversalPostRequest(body));
  ReactDOM.render(
    <TraversalApp theme={theme} store={traversalStore.store} />,
    document.getElementById(config.elementId)
  );
}

export function get(config: Config, traversalId: string) {
  const theme = config.theme ? config.theme : defaultTheme;
  const traversalStore = new TraversalStore(
    config.urls.engine,
    config.urls.hra,
    undefined,
    config.tokenFactory
  );
  traversalStore.store.dispatch(traversalGetRequest(traversalId));
  ReactDOM.render(
    <TraversalApp theme={theme} store={traversalStore.store} />,
    document.getElementById(config.elementId)
  );
}
