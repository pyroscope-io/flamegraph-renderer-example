import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders the canvas", () => {
  const { container, debug } = render(<App />);
  expect(screen.getByTestId("flamegraph-canvas")).toBeInTheDocument();
  expect(container.querySelector("canvas")).toBeInTheDocument();

  // use this to have a look at what's in the DOM
  // screen.debug();
});
