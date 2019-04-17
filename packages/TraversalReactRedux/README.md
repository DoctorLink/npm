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

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { createTraversalStore, TraversalApp } from '@doctorlink/traversal-react-redux';

const store = createTraversalStore('www.exmaple.com/api')

render(<TraversalApp store={store} />, document.getElementById('root'));
```