<p align="center">
  <a href="https://www.doctorlink.com/" rel="noopener" target="_blank"><img width="200" src="typedoc/theme/assets/images/logo.png" alt="Doctorlink"></a></p>
</p>


test

<h1 align="center">DoctorLink NPM</h1>

<div align="center">
NPM Packages made by <a href="https://www.doctorlink.com/" rel="noopener" target="_blank">Doctorlink</a>
</div>

<div align="center">
View the documentation at <a href="https://npm.doctorlink.com" rel="noopener" target="_blank">npm.doctorlink.com</a>
</div>

<div align="center">
Guides available at <a href="https://developer.doctorlink.com" rel="noopener" target="_blank">developer.doctorlink.com</a>
</div>

<p align="center"><a href="https://lerna.js.org/"><img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna"></a></p>

<p align="center"><a href="https://dev.azure.com/doctorlink-engineering/ENG/_build/latest?definitionId=65&amp;branchName=master"><img src="https://dev.azure.com/doctorlink-engineering/ENG/_apis/build/status/DoctorLink.npm?branchName=master" alt="Build Status"></a></p>


## Contents

|Package                                        |Description                                | NPM                                                                                                           |
|-----------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------|
|[traversal-core](packages/traversal-core)      |Traversal models, helpers and http services|<a href="https://www.npmjs.com/package/@doctorlink/traversal-core" rel="noopener" target="_blank">:link:</a>   |
|[traversal-redux](packages/traversal-redux)    |Traversal redux actions, reducers and sagas|<a href="https://www.npmjs.com/package/@doctorlink/traversal-redux" rel="noopener" target="_blank">:link:</a>  |
|[styled-components](packages/styled-components)|DoctorLink styled components               |<a href="https://www.npmjs.com/package/@doctorlink/styled-components" rel="noopener" target="_blank">:link:</a>|
|[traversal-embed](packages/traversal-embed)    |Embedded Traversal Client                  |<a href="https://www.npmjs.com/package/@doctorlink/traversal-embed" rel="noopener" target="_blank">:link:</a>|

## Development 

When developing locally, make any changes in a branch and submit a pull request. Use `lerna version` to bump the version.

If linking to an app use `npm link /absoulte/path/to/this/repo/packages/package-name` on the package/s you need. 

If you are linking to a package that uses react run this command first:

```bash
npm run prelink
```

This will remove some dev dependencies that cause issues when linking. **Tests will fail because of this**.

When you are finished  run the following:


```bash
npm install
```

This will reinstall the dev dependencies so tests will pass again.

**If you get an error about duplicate types run the command** `npm run bootstrap`
