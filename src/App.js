import React from "react";
import { FlamegraphRenderer } from "@pyroscope/flamegraph";
import "@pyroscope/flamegraph/dist/index.css";
import { pyroscopeCPU } from "./TestData";
import { pyroscopeDiffCPU } from "./TestDiffData";

function App() {
  return (
    <div>
      <h1>Pyroscope Flamegraph</h1>
      <FlamegraphRenderer
        profile={pyroscopeCPU}
        viewType="single"
        onlyDisplay="flamegraph"
        showToolbar={true}
      />
      <h1>Pyroscope Diff Flamegraph</h1>
      <FlamegraphRenderer
        profile={pyroscopeDiffCPU}
        viewType="single"
        onlyDisplay="flamegraph"
        showToolbar={true}
      />
    </div>
  );
}

export default App;
