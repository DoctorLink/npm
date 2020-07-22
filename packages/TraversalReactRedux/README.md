<p align="center">
  <a href="https://www.doctorlink.com/" rel="noopener" target="_blank"><img width="200" src="/static/logo.png" alt="Doctorlink Traversal Tools"></a></p>
</p>

<h1 align="center">DoctorLink Traversal Client Tools</h1>

<div align="center">

[React](http://facebook.github.io/react/) components and redux tools for use with the Traversal Engine API

</div>

## Installation

DoctorLink's Traversal Client Tools are available as an [npm package](https://www.npmjs.com/package/@doctorlink/traversal-react-redux).

```sh
npm install @doctorlink/traversal-react-redux
```

## Contents

|Section                                     |Description                              |
|--------------------------------------------|-----------------------------------------|
|[Components](src/Components)                |All of the components used in the library|
|[Component Modules](src/ComponentModules)   |Components combined in useful ways       |
|[Theming](src/Theme)                        |Creating custom themes                   |
|[Redux Reducers](src/Reducers)              |Defining/updating the store              |
|[Actions](src/Actions)                      |Actions to be dispatched to the store    |
|[Containers](src/Containers)                |Components bound to state/actions        |
|[Sagas](src/Sagas)                          |Sagas to handle state side-effects       |
|[Services](src/Services)                    |Services for making api calls            |
|[Store](src/Store)                          |Complete Redux-Saga Stores               |
|[Samples](samples)                          |Samples of how this library can be used  |


## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { TraversalStore, TraversalApp } from '@doctorlink/traversal-react-redux';

//Token requested from POST https://prod-platform-identity.doctorlink.engineering/connect/token
const bearerToken = 'TOKEN';
const productId = 1;
const traversalEngineApi = 'https://prod-platform-traversal-engine.doctorlink.engineering';

const traversalStore = new TraversalStore(traversalEngineApi);

traversalStore.store.dispatch(traversalStart({productId}));
traversalStore.setToken(bearerToken)

render(<TraversalApp store={traversalStore.store} />, document.getElementById('root'));
```

## Development

For ease of development, use `npm link` to point your client app to this library. You can then run `npm start` to compile your code on save, and your changes should be picked up immediately by your client app. For example:

```bash
cd TraversalReactRedux
npm link
cd ../TraversalEngineAPI/services/traversalclient/ClientApp/
npm link @doctorlink/traversal-react-redux

# In another console:
cd TraversalReactRedux
npm start
```

If you get an error about duplicate versions of react and/or react-dom (["Hooks can only be called inside the body of a function component"](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react)), try pointing this library to the versions used by your app:

```bash
npm link ../TraversalEngineAPI/services/traversalclient/ClientApp/node_modules/react
npm link ../TraversalEngineAPI/services/traversalclient/ClientApp/node_modules/react-dom
```

Note that react and react-dom are required both as `peerDependencies` and `devDependencies`; the latter is because they are required by the unit tests.

## Publish

To publish the library run the [AZDO publish pipeline](https://dev.azure.com/doctorlink-engineering/ENG/_build?definitionId=45&_a=summary). By default this will publish a patch release and update the latest tag in npm, but both of these options can be overriden in the variables tab.

Version can be one of the following:
  patch | minor | major | prepatch | preminor | premajor | prerelease

Tag can be overriden for other streams:
  latest | beta | next | staging