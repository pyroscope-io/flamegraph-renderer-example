import React from "react";
import { FlamegraphRenderer } from "@pyroscope/flamegraph";
import "@pyroscope/flamegraph/dist/index.css";

// This is the /render output
const pyroscope = {
  version: 1,
  flamebearer: {
    names: [
      "total",
      "runtime.mcall",
      "runtime.park_m",
      "runtime.schedule",
      "runtime.stoplockedm",
      "runtime.mPark",
      "runtime.notesleep",
      "runtime.futexsleep",
      "runtime.futex",
      "runtime.resetspinning",
      "runtime.wakep",
      "runtime.startm",
      "runtime.notewakeup",
      "runtime.futexwakeup",
      "runtime.nanotime",
      "runtime.findrunnable",
      "runtime.write",
      "runtime.write1",
      "runtime.stopm",
      "runtime.acquirep",
      "runtime.stealWork",
      "runtime.checkTimers",
      "runtime.runtimer",
      "runtime.runOneTimer",
      "runtime.bgscavenge.func1",
      "runtime.wakeScavenger",
      "runtime.injectglist.func1",
      "runtime.pidleput",
      "runtime.pidleget",
      "runtime.netpoll",
      "runtime.read",
      "runtime.epollwait",
      "runtime.gosched_m",
      "runtime.unlockWithRank",
      "runtime.unlock2",
      "runtime.lockWithRank",
      "runtime.lock2",
      "runtime.procyield",
      "runtime.goschedImpl",
      "runtime.goexit0",
      "runtime.exitsyscall0",
      "runtime.gcBgMarkWorker",
      "runtime.systemstack",
      "runtime.gcBgMarkWorker.func2",
      "runtime.gcDrain",
      "runtime.spanOfUnchecked",
      "runtime.scanobject",
      "runtime.spanOf",
      "runtime.pageIndexOf",
      "runtime.markBits.isMarked",
      "runtime.greyobject",
      "runtime.findObject",
      "runtime.(*mspan).objIndex",
      "runtime.(*gcWork).putFast",
      "runtime.markroot",
      "runtime.markrootSpans",
      "runtime.heapBitsForAddr",
      "runtime.heapBits.next",
      "runtime.heapBits.bits",
      "runtime.(*gcWork).tryGetFast",
      "runtime.bgsweep",
      "runtime.sweepone",
      "runtime.(*sweepLocked).sweep",
      "runtime.(*spanSet).push",
      "runtime.(*sweepClass).update",
      "runtime.(*mheap).nextSpanForSweep",
      "runtime.(*spanSet).pop",
      "runtime.(*headTailIndex).cas",
      "runtime.bgscavenge",
      "runtime.bgscavenge.func2",
      "runtime.(*pageAlloc).scavenge",
      "runtime.(*pageAlloc).scavengeOne",
      "runtime.(*pageAlloc).scavengeRangeLocked",
      "runtime.sysUnused",
      "runtime.madvise",
      "runtime.(*consistentHeapStats).acquire",
      "runtime.resettimer",
      "runtime.modtimer",
      "runtime.wakeNetPoller",
      "net/http.(*conn).serve",
      "net/http.serverHandler.ServeHTTP",
      "net/http.HandlerFunc.ServeHTTP",
      "github.com/klauspost/compress/gzhttp.NewWrapper.func1.1",
      "github.com/gorilla/mux.(*Router).ServeHTTP",
      "github.com/pyroscope-io/pyroscope/pkg/server.(*Controller).drainMiddleware.func1",
      "github.com/pyroscope-io/pyroscope/pkg/server.ingestHandler.ServeHTTP",
      "github.com/pyroscope-io/pyroscope/pkg/util/varint.Read",
      "encoding/binary.ReadUvarint",
      "bufio.(*Reader).ReadByte",
      "github.com/pyroscope-io/pyroscope/pkg/structs/transporttrie.IterateRaw",
      "io.Copy",
      "io.copyBuffer",
      "runtime.assertI2I2",
      "runtime.getitab",
      "runtime.(*itabTableType).find",
      "bytes.(*Buffer).ReadFrom",
      "io.(*LimitedReader).Read",
      "bufio.(*Reader).Read",
      "net/http.(*body).Read",
      "net/http.(*body).readLocked",
      "net/http.(*connReader).startBackgroundRead",
      "runtime.newproc",
      "runtime.newproc.func1",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.(*Tree).InsertInt",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.(*Tree).Insert",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.(*treeNode).insert",
      "runtime.mallocgc",
      "runtime.(*mcache).nextFree",
      "github.com/pyroscope-io/pyroscope/pkg/storage.(*Storage).Put",
      "github.com/pyroscope-io/pyroscope/pkg/storage/segment.(*Segment).Put",
      "github.com/pyroscope-io/pyroscope/pkg/storage/segment.(*streeNode).put",
      "github.com/pyroscope-io/pyroscope/pkg/storage/segment.(*Segment).Put.func1",
      "github.com/pyroscope-io/pyroscope/pkg/storage.(*Storage).Put.func1",
      "github.com/pyroscope-io/pyroscope/pkg/storage/cache.(*Cache).GetOrCreate",
      "github.com/pyroscope-io/pyroscope/pkg/storage/cache.(*Cache).get",
      "github.com/pyroscope-io/pyroscope/pkg/storage/cache/lfu.(*Cache).GetOrSet",
      "github.com/pyroscope-io/pyroscope/pkg/storage/cache.(*Cache).get.func1",
      "github.com/dgraph-io/badger/v2.(*DB).View",
      "github.com/pyroscope-io/pyroscope/pkg/storage/cache.(*Cache).get.func1.1",
      "github.com/dgraph-io/badger/v2.(*Txn).Get",
      "github.com/dgraph-io/badger/v2.(*DB).get",
      "github.com/dgraph-io/badger/v2/skl.(*Skiplist).Get",
      "github.com/dgraph-io/badger/v2/skl.(*node).key",
      "github.com/pyroscope-io/pyroscope/pkg/agent.(*ProfileSession).takeSnapshots",
      "runtime.mapiterinit",
      "runtime.mapiternext",
      "runtime.makemap_small",
      "runtime.newobject",
      "runtime.memclrNoHeapPointers",
      "github.com/pyroscope-io/pyroscope/pkg/agent/gospy.(*GoSpy).Snapshot",
      "runtime/pprof.writeHeap",
      "runtime/pprof.writeHeapInternal",
      "runtime/pprof.writeHeapProto",
      "runtime/pprof.newProfileBuilder",
      "runtime/pprof.(*profileBuilder).readMapping",
      "os.Open",
      "os.OpenFile",
      "syscall.Open",
      "syscall.openat",
      "syscall.Syscall6",
      "runtime/pprof.(*profileBuilder).appendLocsForStack",
      "runtime.CallersFrames",
      "runtime.(*mcache).refill",
      "runtime.(*consistentHeapStats).release",
      "runtime.GC",
      "runtime.divRoundUp",
      "runtime.newMarkBits",
      "runtime.(*headTailIndex).incTail",
      "github.com/valyala/bytebufferpool.(*ByteBuffer).WriteString",
      "runtime.memmove",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.(*Profile).Get",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.FindFunctionName",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.FindLocation",
      "sort.Search",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.FindLocation.func1",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.FindFunction",
      "github.com/pyroscope-io/pyroscope/pkg/storage/tree.FindFunction.func1",
      "github.com/pyroscope-io/pyroscope/pkg/agent/gospy.(*GoSpy).Snapshot.func3",
      "github.com/pyroscope-io/pyroscope/pkg/agent.(*ProfileSession).takeSnapshots.func1",
      "runtime.mapaccess2_faststr",
      "github.com/pyroscope-io/pyroscope/pkg/structs/transporttrie.(*Trie).Insert",
      "github.com/pyroscope-io/pyroscope/pkg/structs/transporttrie.(*trieNode).findNodeAt",
      "github.com/pyroscope-io/pyroscope/pkg/agent/gospy.getHeapProfile",
      "github.com/pyroscope-io/pyroscope/pkg/convert.ParsePprof",
      "io.ReadAll",
      "compress/gzip.(*Reader).Read",
      "compress/flate.(*decompressor).Read",
      "compress/flate.(*decompressor).huffmanBlock",
      "compress/flate.(*decompressor).huffSym",
      "bytes.(*Reader).ReadByte",
      "google.golang.org/protobuf/proto.Unmarshal",
      "google.golang.org/protobuf/proto.UnmarshalOptions.unmarshal",
      "google.golang.org/protobuf/internal/impl.(*MessageInfo).unmarshal",
      "google.golang.org/protobuf/internal/impl.(*MessageInfo).unmarshalPointer",
      "google.golang.org/protobuf/internal/impl.consumeMessageSliceInfo",
      "google.golang.org/protobuf/internal/impl.consumeUint64Slice",
      "runtime.growslice",
      "runtime.getMCache",
      "github.com/pyroscope-io/pyroscope/pkg/agent.(*ProfileSession).reset",
      "github.com/pyroscope-io/pyroscope/pkg/agent.(*ProfileSession).uploadTries",
      "github.com/pyroscope-io/pyroscope/pkg/structs/transporttrie.(*Trie).Diff",
      "github.com/dgraph-io/badger/v2.(*levelsController).runCompactor",
      "runtime.selectgo",
      "runtime.gopark",
      "github.com/dgraph-io/badger/v2.(*levelsController).pickCompactLevels",
      "github.com/dgraph-io/badger/v2.(*compactStatus).overlapsWith",
      "github.com/dgraph-io/badger/v2.(*levelCompactStatus).overlapsWith",
      "github.com/dgraph-io/badger/v2.(*DB).doWrites.func1",
      "github.com/dgraph-io/badger/v2.(*DB).writeRequests",
      "github.com/dgraph-io/badger/v2.(*valueLog).write",
      "github.com/dgraph-io/badger/v2.(*logFile).encodeEntry",
      "hash/crc32.New",
      "runtime.heapBitsSetType",
      "runtime.newstack",
    ],
    levels: [
      [0, 254, 0, 0],
      [
        0,
        1,
        0,
        187,
        0,
        2,
        0,
        181,
        0,
        30,
        0,
        123,
        0,
        6,
        0,
        79,
        0,
        4,
        0,
        68,
        0,
        8,
        0,
        60,
        0,
        163,
        0,
        41,
        0,
        40,
        0,
        1,
      ],
      [
        0,
        1,
        0,
        188,
        0,
        1,
        0,
        184,
        0,
        1,
        0,
        182,
        0,
        1,
        0,
        178,
        0,
        26,
        1,
        129,
        0,
        2,
        0,
        126,
        0,
        1,
        0,
        124,
        0,
        6,
        0,
        80,
        0,
        2,
        0,
        76,
        0,
        2,
        0,
        42,
        0,
        8,
        3,
        61,
        0,
        163,
        0,
        42,
        0,
        2,
        0,
        40,
        0,
        1,
        0,
        39,
        0,
        13,
        0,
        32,
        0,
        24,
        0,
        2,
      ],
      [
        0,
        1,
        0,
        189,
        0,
        1,
        0,
        185,
        0,
        1,
        1,
        183,
        0,
        1,
        0,
        179,
        1,
        2,
        0,
        162,
        0,
        9,
        0,
        150,
        0,
        1,
        0,
        148,
        0,
        11,
        0,
        144,
        0,
        2,
        0,
        130,
        0,
        2,
        0,
        127,
        0,
        1,
        1,
        125,
        0,
        6,
        0,
        81,
        0,
        2,
        0,
        77,
        0,
        2,
        0,
        69,
        3,
        3,
        1,
        65,
        0,
        1,
        1,
        64,
        0,
        1,
        0,
        62,
        0,
        163,
        0,
        43,
        0,
        2,
        0,
        18,
        0,
        1,
        0,
        3,
        0,
        5,
        0,
        38,
        0,
        7,
        0,
        35,
        0,
        1,
        0,
        33,
        0,
        24,
        0,
        3,
      ],
      [
        0,
        1,
        0,
        190,
        0,
        1,
        1,
        186,
        1,
        1,
        0,
        180,
        1,
        2,
        0,
        163,
        0,
        2,
        0,
        157,
        0,
        7,
        1,
        151,
        0,
        1,
        1,
        149,
        0,
        11,
        5,
        61,
        0,
        2,
        0,
        131,
        0,
        2,
        0,
        106,
        1,
        6,
        0,
        82,
        0,
        2,
        0,
        78,
        0,
        2,
        0,
        70,
        4,
        1,
        1,
        67,
        0,
        1,
        1,
        66,
        1,
        1,
        1,
        63,
        0,
        2,
        2,
        59,
        0,
        161,
        13,
        44,
        0,
        2,
        0,
        5,
        0,
        1,
        0,
        15,
        0,
        5,
        0,
        3,
        0,
        7,
        6,
        36,
        0,
        1,
        1,
        34,
        0,
        19,
        1,
        15,
        0,
        2,
        2,
        14,
        0,
        2,
        0,
        9,
        0,
        1,
        0,
        4,
      ],
      [
        0,
        1,
        0,
        191,
        2,
        1,
        1,
        161,
        1,
        1,
        0,
        170,
        0,
        1,
        0,
        164,
        0,
        2,
        0,
        158,
        1,
        2,
        0,
        155,
        0,
        4,
        0,
        152,
        6,
        3,
        0,
        65,
        0,
        2,
        0,
        62,
        0,
        1,
        1,
        145,
        0,
        2,
        0,
        132,
        0,
        2,
        2,
        128,
        1,
        6,
        0,
        83,
        0,
        2,
        0,
        16,
        0,
        2,
        0,
        71,
        23,
        6,
        6,
        58,
        0,
        6,
        6,
        57,
        0,
        5,
        5,
        56,
        0,
        1,
        0,
        54,
        0,
        127,
        75,
        46,
        0,
        3,
        3,
        45,
        0,
        2,
        0,
        6,
        0,
        1,
        0,
        16,
        0,
        2,
        1,
        15,
        0,
        2,
        0,
        35,
        0,
        1,
        1,
        14,
        6,
        1,
        1,
        37,
        2,
        1,
        0,
        21,
        0,
        1,
        1,
        14,
        0,
        3,
        0,
        29,
        0,
        1,
        1,
        28,
        0,
        1,
        1,
        27,
        0,
        2,
        0,
        20,
        0,
        5,
        0,
        18,
        0,
        4,
        0,
        16,
        2,
        2,
        0,
        10,
        0,
        1,
        0,
        5,
      ],
      [
        0,
        1,
        0,
        127,
        4,
        1,
        0,
        171,
        0,
        1,
        0,
        97,
        0,
        1,
        0,
        160,
        0,
        1,
        1,
        159,
        1,
        2,
        1,
        153,
        0,
        4,
        2,
        153,
        6,
        3,
        3,
        66,
        0,
        1,
        0,
        63,
        0,
        1,
        1,
        146,
        1,
        1,
        0,
        140,
        0,
        1,
        0,
        133,
        3,
        6,
        0,
        81,
        0,
        2,
        2,
        17,
        0,
        2,
        0,
        72,
        40,
        1,
        1,
        55,
        75,
        2,
        2,
        53,
        0,
        1,
        1,
        52,
        0,
        17,
        17,
        51,
        0,
        11,
        11,
        50,
        0,
        6,
        6,
        49,
        0,
        4,
        4,
        48,
        0,
        11,
        11,
        47,
        3,
        2,
        0,
        7,
        0,
        1,
        1,
        17,
        1,
        1,
        1,
        14,
        0,
        2,
        0,
        36,
        10,
        1,
        0,
        22,
        1,
        2,
        2,
        31,
        0,
        1,
        1,
        30,
        2,
        2,
        0,
        21,
        0,
        1,
        1,
        19,
        0,
        4,
        0,
        5,
        0,
        4,
        4,
        17,
        2,
        2,
        0,
        11,
        0,
        1,
        0,
        6,
      ],
      [
        0,
        1,
        0,
        106,
        4,
        1,
        0,
        172,
        0,
        1,
        0,
        165,
        0,
        1,
        0,
        161,
        3,
        1,
        1,
        156,
        2,
        2,
        2,
        154,
        9,
        1,
        1,
        147,
        2,
        1,
        0,
        141,
        0,
        1,
        0,
        134,
        3,
        6,
        0,
        84,
        2,
        1,
        1,
        75,
        0,
        1,
        0,
        73,
        171,
        2,
        2,
        8,
        3,
        2,
        2,
        37,
        10,
        1,
        0,
        23,
        6,
        2,
        0,
        22,
        1,
        4,
        1,
        6,
        6,
        2,
        0,
        12,
        0,
        1,
        0,
        7,
      ],
      [
        0,
        1,
        0,
        192,
        4,
        1,
        0,
        173,
        0,
        1,
        0,
        166,
        0,
        1,
        0,
        127,
        20,
        1,
        0,
        127,
        0,
        1,
        0,
        135,
        3,
        6,
        0,
        85,
        3,
        1,
        1,
        74,
        188,
        1,
        0,
        24,
        6,
        2,
        1,
        23,
        2,
        3,
        1,
        7,
        6,
        2,
        0,
        13,
        0,
        1,
        1,
        8,
      ],
      [
        0,
        1,
        1,
        193,
        4,
        1,
        0,
        174,
        0,
        1,
        0,
        167,
        0,
        1,
        1,
        106,
        20,
        1,
        0,
        106,
        0,
        1,
        0,
        136,
        3,
        1,
        0,
        108,
        0,
        4,
        0,
        89,
        0,
        1,
        0,
        86,
        192,
        1,
        0,
        25,
        7,
        1,
        0,
        24,
        3,
        2,
        2,
        8,
        6,
        2,
        2,
        8,
      ],
      [
        5,
        1,
        0,
        173,
        0,
        1,
        0,
        168,
        21,
        1,
        0,
        107,
        0,
        1,
        0,
        137,
        3,
        1,
        0,
        109,
        0,
        1,
        0,
        103,
        0,
        3,
        0,
        90,
        0,
        1,
        0,
        87,
        192,
        1,
        0,
        26,
        7,
        1,
        0,
        25,
      ],
      [
        5,
        1,
        0,
        175,
        0,
        1,
        1,
        169,
        21,
        1,
        0,
        142,
        0,
        1,
        0,
        138,
        3,
        1,
        0,
        110,
        0,
        1,
        0,
        104,
        0,
        3,
        0,
        91,
        0,
        1,
        1,
        88,
        192,
        1,
        0,
        11,
        7,
        1,
        0,
        26,
      ],
      [
        5,
        1,
        0,
        176,
        22,
        1,
        1,
        143,
        0,
        1,
        1,
        139,
        3,
        1,
        0,
        111,
        0,
        1,
        0,
        105,
        0,
        1,
        0,
        95,
        0,
        2,
        1,
        92,
        193,
        1,
        0,
        12,
        7,
        1,
        0,
        11,
      ],
      [
        5,
        1,
        1,
        177,
        27,
        1,
        0,
        112,
        0,
        1,
        0,
        106,
        0,
        1,
        0,
        96,
        1,
        1,
        0,
        93,
        193,
        1,
        0,
        13,
        7,
        1,
        0,
        12,
      ],
      [
        33,
        1,
        0,
        113,
        0,
        1,
        1,
        107,
        0,
        1,
        0,
        97,
        1,
        1,
        1,
        94,
        193,
        1,
        1,
        8,
        7,
        1,
        0,
        13,
      ],
      [33, 1, 0, 114, 1, 1, 0, 98, 203, 1, 1, 8],
      [33, 1, 0, 115, 1, 1, 0, 99],
      [33, 1, 0, 116, 1, 1, 0, 100],
      [33, 1, 0, 117, 1, 1, 0, 101],
      [33, 1, 0, 118, 1, 1, 0, 42],
      [33, 1, 0, 119, 1, 1, 0, 102],
      [33, 1, 0, 120, 1, 1, 0, 10],
      [33, 1, 0, 121, 1, 1, 0, 11],
      [33, 1, 1, 122, 1, 1, 0, 12],
      [35, 1, 0, 13],
      [35, 1, 1, 8],
    ],
    numTicks: 254,
    maxSelf: 75,
  },
  timeline: {
    startTime: 1647289340,
    samples: [255],
    durationDelta: 10,
    watermarks: {},
  },
  metadata: {
    format: "single",
    spyName: "gospy",
    sampleRate: 100,
    units: "samples",
    name: "pyroscope.server.cpu 2022-03-14T20:22:23Z",
    appName: "pyroscope.server.cpu",
    startTime: 1647289343,
    endTime: 1647289349,
    query: "pyroscope.server.cpu{}",
    maxNodes: 8192,
  },
};

function App() {
  return (
    <div>
      <FlamegraphRenderer
        profile={pyroscope}
        viewType="single"
        display="flamegraph"
        showToolbar={false}
      />
    </div>
  );
}

export default App;
