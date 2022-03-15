import { render, screen, debug } from "@testing-library/react";
import React from "react";
import App from "./App";

// In this example we mock the flamegraph library
// So that we don't have to support the canvas
jest.mock("@pyroscope/flamegraph", () => {
  return {
    FlamegraphRenderer: () => <div>FlamegraphRenderer</div>,
  };
});

it("renders a mock version", () => {
  render(<App />);
  expect(screen.getByText("FlamegraphRenderer")).toBeInTheDocument();
});
