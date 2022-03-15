# Flamegraph-renderer-example


# Testing
There are a couple ways of testing the `FlamegraphRenderer` component:

## 1. mocking the entire component
See [./src/App.mock.spec.jsx](./src/App.mock.spec.jsx)

## 2. Supporting canvas
In this method you actually render the entire tree. 

For that you need to:

1. Install `canvas`
2. Install `jest-canvas-mock`
3. Add `jest-canvas-mock` to your jest setup ([./src/setupTests.js](./src/setupTests.js))
4. Update your jest config to not reset mocks ([./jest.config.ts](./jest.config.ts))

An example test is available at [./src/App.spec.jsx](./src/App.spec.jsx)
