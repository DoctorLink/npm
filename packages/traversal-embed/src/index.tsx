import React from 'react';
import ReactDOM from 'react-dom';
import { defaultTheme, TraversalApp } from '@doctorlink/styled-components';
import { TraversalsBaseCreate } from '@doctorlink/traversal-core';
import {
  traversalPostRequest,
  traversalGetRequest,
  TraversalStore,
} from '@doctorlink/traversal-redux';

export interface EmbedOptions {
  theme?: any;
  urls: { engine: string; hra: string };
  tokenFactory?: () => Promise<string | null>;
}

export interface CreateEmbedOptions extends EmbedOptions {
  createOptions: TraversalsBaseCreate;
}

export interface GetEmbedOptions extends EmbedOptions {
  traversalId: string;
}

const getStartOptions = (
  userOptions: CreateEmbedOptions
): CreateEmbedOptions => ({
  theme: defaultTheme,
  ...userOptions,
});

const getContinueOptions = (userOptions: GetEmbedOptions): GetEmbedOptions => ({
  theme: defaultTheme,
  ...userOptions,
});

export function create(element: string, userOptions: CreateEmbedOptions) {
  const options = getStartOptions(userOptions);
  const traversalStore = new TraversalStore(
    options.urls.engine,
    options.urls.hra,
    undefined,
    options.tokenFactory
  );
  traversalStore.store.dispatch(traversalPostRequest(options.createOptions));
  ReactDOM.render(
    <TraversalApp theme={options.theme} store={traversalStore.store} />,
    document.getElementById(element)
  );
}

export function get(element: string, userOptions: GetEmbedOptions) {
  const options = getContinueOptions(userOptions);
  const traversalStore = new TraversalStore(
    options.urls.engine,
    options.urls.hra,
    undefined,
    options.tokenFactory
  );
  traversalStore.store.dispatch(traversalGetRequest(options.traversalId));
  ReactDOM.render(
    <TraversalApp theme={options.theme} store={traversalStore.store} />,
    document.getElementById(element)
  );
}
