import React from "react";
import { FlamegraphRenderer } from "pyroscope";
import "pyroscope/index.css";

const SimpleTree = {
  topLevel: 0,
  rangeMin: 0,
  format: "single",
  numTicks: 988,
  sampleRate: 100,
  names: [
    "total",
    "runtime.main",
    "main.slowFunction",
    "main.work",
    "main.main",
    "main.fastFunction",
  ],
  levels: [
    [0, 988, 0, 0],
    [0, 988, 0, 1],
    [0, 214, 0, 5, 214, 3, 2, 4, 217, 771, 0, 2],
    [0, 214, 214, 3, 216, 1, 1, 5, 217, 771, 771, 3],
  ],

  rangeMax: 1,
  units: "samples",
  fitMode: "HEAD",

  spyName: "gospy",
};

function App() {
  return (
    <FlamegraphRenderer
      flamebearer={SimpleTree}
      viewType="single"
      display="flamegraph"
      showToolbar={false}
    />
  );
}

export default App;
