import React from "react";
import { FlamegraphRenderer } from "pyroscope";
import "pyroscope/index.css";
import { PyroscopeCpu, PyroscopeCpuDiff } from "./TestData";

function transform(profile) {
  const copy = JSON.parse(JSON.stringify(profile));

  function deltaDiffWrapper(format, levels) {
    const mutableLevels = [...levels];

    function deltaDiff(lvls, start, step) {
      // eslint-disable-next-line no-restricted-syntax
      for (const level of lvls) {
        let prev = 0;
        for (let i = start; i < level.length; i += step) {
          level[i] += prev;
          prev = level[i] + level[i + 1];
        }
      }
    }

    if (format === "double") {
      deltaDiff(mutableLevels, 0, 7);
      deltaDiff(mutableLevels, 3, 7);
    } else {
      deltaDiff(mutableLevels, 0, 4);
    }

    return mutableLevels;
  }

  function decodeFlamebearer(fb) {
    fb.flamebearer.levels = deltaDiffWrapper(
      fb.metadata.format,
      fb.flamebearer.levels
    );
    return fb;
  }

  // mutate the copy
  decodeFlamebearer(copy);

  return {
    ...copy.metadata,
    ...copy.flamebearer,
    leftTicks: copy.leftTicks,
    rightTicks: copy.rightTicks,
  };
}

const diffCpuProfile = transform(PyroscopeCpuDiff);
const cpuProfile = transform(PyroscopeCpu);

function App() {
  return (
    <FlamegraphRenderer
      flamebearer={cpuProfile}
      viewType="single"
      display="flamegraph"
      showToolbar={false}
    />
  );
}

export default App;
