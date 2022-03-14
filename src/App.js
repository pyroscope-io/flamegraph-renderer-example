import React from "react";
import { FlamegraphRenderer } from "@pyroscope/flamegraph";
import "@pyroscope/flamegraph/dist/index.css";
import { pyroscopeCPU } from "./TestData";

function App() {
  return (
    <div>
      <FlamegraphRenderer
        profile={pyroscopeCPU}
        viewType="single"
        display="flamegraph"
        showToolbar={false}
      />
    </div>
  );
}

export default App;
