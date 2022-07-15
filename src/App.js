import React from "react";
import { FlamegraphRenderer, convertJaegerTraceToProfile } from "@pyroscope/flamegraph";
import "@pyroscope/flamegraph/dist/index.css";
import { pyroscopeCPU } from "./TestData";
import { pyroscopeDiffCPU } from "./TestDiffData";
import { jaegerTraceB } from "./TestTraceB";
import { jaegerTraceA } from "./TestTraceA";

let trace = jaegerTraceB.data[0]
let convertedProfile = convertJaegerTraceToProfile(trace);

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
      <FlamegraphRenderer
        profile={convertedProfile}
        viewType="single"
        onlyDisplay="flamegraph"
        showToolbar={true}
      />
    </div>
  );
}

export default App;
