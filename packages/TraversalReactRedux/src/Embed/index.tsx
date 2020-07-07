import React from 'react';
import ReactDOM from 'react-dom';
import { traversalPostRequest, traversalGetRequest } from '../Actions';
import { defaultTheme } from '../Theme';
import { Button } from '../Components';
import { TraversalAndConclusionsConnected as TraversalAndConclusions } from '../Containers';
import { TraversalStore } from '../Store/Traversal';
import { TraversalApp, AppWrapper } from '../Containers/App';
import { TraversalsBaseCreate } from '../Models/Service/traversalsBase';

interface StartEmbedOptions {
  theme: any;
  url: string;
  startOptions: TraversalsBaseCreate;
}

interface ContinueEmbedOptions {
  theme: any;
  url: string;
  traversalId: string;
}

const getStartOptions = (userOptions?: StartEmbedOptions) => ({
  theme: userOptions?.theme ?? defaultTheme,
  url: userOptions?.url ?? 'https://localhost:7001',
  startOptions: userOptions?.startOptions ?? ({} as TraversalsBaseCreate),
});

const getContinueOptions = (userOptions: ContinueEmbedOptions) => ({
  theme: userOptions?.theme ?? defaultTheme,
  url: userOptions?.url ?? 'https://localhost:7001',
  traversalId: userOptions.traversalId,
});

export function embedStart(element: string, userOptions?: StartEmbedOptions) {
  const options = getStartOptions(userOptions);
  const traversalStore = new TraversalStore(
    `${options.url}/engine`,
    `${options.url}/hra`
  );
  traversalStore.store.dispatch(traversalPostRequest(options.startOptions));
  ReactDOM.render(
    <TraversalApp theme={options.theme} store={traversalStore.store} />,
    document.getElementById(element)
  );
}

export function embedContinue(
  element: string,
  userOptions: ContinueEmbedOptions
) {
  const options = getContinueOptions(userOptions);
  const traversalStore = new TraversalStore(
    `${options.url}/engine`,
    `${options.url}/hra`
  );
  traversalStore.store.dispatch(traversalGetRequest(options.traversalId));
  ReactDOM.render(
    <TraversalApp theme={options.theme} store={traversalStore.store} />,
    document.getElementById(element)
  );
}

export function embedStartButton(
  element: string,
  userOptions?: StartEmbedOptions
) {
  const options = getStartOptions(userOptions);
  const traversalStore = new TraversalStore(
    `${options.url}/engine`,
    `${options.url}/hra`
  );
  const traversal = traversalStore.store.getState().traversal;
  ReactDOM.render(
    <AppWrapper theme={options.theme} store={traversalStore.store}>
      {!traversal && (
        <Button
          onClick={() =>
            traversalStore.store.dispatch(
              traversalPostRequest(options.startOptions)
            )
          }
        >
          Begin
        </Button>
      )}
      <TraversalAndConclusions />
    </AppWrapper>,
    document.getElementById(element)
  );
}
