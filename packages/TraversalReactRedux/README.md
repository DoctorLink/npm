<p align="center">
  <a href="https://www.doctorlink.com/" rel="noopener" target="_blank"><img width="200" src="/static/logo.png" alt="Doctorlink Design System"></a></p>
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
|[Web API](src/WebApi)                       |HTTP requests to the web api             |


## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { createTraversalStore, TraversalApp } from '@doctorlink/traversal-react-redux';

const store = createTraversalStore({
  traversalApi: 'https://api-traversal.doctorlink.engineering',
  hraApi: 'https://api-hra.doctorlink.engineering'
})

render(<TraversalApp store={store} />, document.getElementById('root'));
```

## Development

For ease of development, use `yarn link` (or, equivalently, `npm link`) to point your client app to this library. You can then run `yarn watch` to compile your code on save, and your changes should be picked up immediately by your client app. For example:

```bash
cd TraversalReactRedux
yarn link
cd ../TraversalEngineAPI/services/client
yarn link @doctorlink/traversal-react-redux
yarn start

# In another console:
cd TraversalReactRedux
yarn watch
```

If you get an error about duplicate versions of react and/or react-dom (["Hooks can only be called inside the body of a function component"](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react)), try pointing this library to the versions used by your app:

```bash
yarn link ../TraversalEngineApi/services/client/node_modules/react
yarn link ../TraversalEngineApi/services/client/node_modules/react-dom
```

Note that react and react-dom are required both as `peerDependencies` and `devDependencies`; the latter is because they are required by the unit tests.
