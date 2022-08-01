import React from "react";
import { FlamegraphRenderer, convertJaegerTraceToProfile, diffTwoProfiles } from "@pyroscope/flamegraph";
import "@pyroscope/flamegraph/dist/index.css";
import { pyroscopeCPU } from "./TestProfileA";
import { pyroscopeDiffCPU } from "./TestDiffData";
import { jaegerTraceCRaw } from "./TestTraceCRaw";
import { jaegerTraceC } from "./TestTraceC";
import { jaegerTraceB } from "./TestTraceB";
import { jaegerTraceA } from "./TestTraceA";
import { slowTrace } from "./slowTrace";
import { fastTrace } from "./fastTrace";

let slowTraceData = slowTrace.data[0]
let fastTraceData = fastTrace.data[0]

let trace = jaegerTraceC.data[0]
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
      <h1>Jaeger Trace</h1>
      <FlamegraphRenderer
        profile={convertedProfile}
        onlyDisplay="flamegraph"
      />
      <h1>Diff Two Jaeger Traces</h1>
      <FlamegraphRenderer
        profile={diffTwoProfiles(convertJaegerTraceToProfile(slowTraceData), convertJaegerTraceToProfile(fastTraceData))}
        onlyDisplay="flamegraph"
      />
    </div>
  );
}

export default App;
