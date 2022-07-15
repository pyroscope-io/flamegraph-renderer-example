export const jaegerTraceB = {
    "data": [
      {
        "traceID": "68f464e5bf3714b6",
        "spans": [
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "112052eebc933005",
            "flags": 1,
            "operationName": "/driver.DriverService/FindNearest",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "7f1e9a9b718ae1f0"
              }
            ],
            "startTime": 1657053117821682,
            "duration": 200138,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "component",
                "type": "string",
                "value": "gRPC"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053117821708,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Searching for nearby drivers"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "location",
                    "type": "string",
                    "value": "728,326"
                  }
                ]
              },
              {
                "timestamp": 1657053117900109,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Retrying GetDriver after error"
                  },
                  {
                    "key": "error",
                    "type": "string",
                    "value": "redis timeout"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "error"
                  },
                  {
                    "key": "retry_no",
                    "type": "int64",
                    "value": 1
                  }
                ]
              },
              {
                "timestamp": 1657053117974146,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Retrying GetDriver after error"
                  },
                  {
                    "key": "error",
                    "type": "string",
                    "value": "redis timeout"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "error"
                  },
                  {
                    "key": "retry_no",
                    "type": "int64",
                    "value": 1
                  }
                ]
              },
              {
                "timestamp": 1657053118021660,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Search successful"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "num_drivers",
                    "type": "int64",
                    "value": 10
                  }
                ]
              }
            ],
            "processID": "p1",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "744a8efd50ea90ce",
            "flags": 1,
            "operationName": "HTTP GET /customer",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "4c3fc8341776759c"
              }
            ],
            "startTime": 1657053117198664,
            "duration": 622290,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/customer?customer=731"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053117198681,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/customer?customer=731"
                  }
                ]
              },
              {
                "timestamp": 1657053117198841,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Loading customer"
                  },
                  {
                    "key": "customer_id",
                    "type": "string",
                    "value": "731"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  }
                ]
              }
            ],
            "processID": "p2",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "1d61e407b8daf4e6",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "121a3c72e39f5854"
              }
            ],
            "startTime": 1657053118093292,
            "duration": 53154,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=412%2C772"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118093308,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=412%2C772"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "325a42e5de6b0f80",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "32d8d8c3b908a2ca"
              }
            ],
            "startTime": 1657053118125378,
            "duration": 44376,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=212%2C736"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118125394,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=212%2C736"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "77c208fe8ab7aeb4",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "6dc8d6be57df9285"
              }
            ],
            "startTime": 1657053118143005,
            "duration": 44505,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=308%2C18"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118143020,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=308%2C18"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "5d2a32aa4a976ca5",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "035eee4cc1eb3808"
              }
            ],
            "startTime": 1657053118170194,
            "duration": 36117,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=674%2C112"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118170209,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=674%2C112"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "2fef796e9e5e9bd2",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "0636a05b1994f23e"
              }
            ],
            "startTime": 1657053118146907,
            "duration": 77084,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=497%2C164"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118146922,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=497%2C164"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "1f0929e09181749d",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "704ea6215ee08f43"
              }
            ],
            "startTime": 1657053118023772,
            "duration": 52847,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=476%2C411"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118023786,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=476%2C411"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "2cb0eafd65cec65d",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "4df819ea0e6cf0eb"
              }
            ],
            "startTime": 1657053118022885,
            "duration": 38155,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=806%2C7"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118022899,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=806%2C7"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "478ade94c9061f4a",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "3d2240c454065688"
              }
            ],
            "startTime": 1657053118022904,
            "duration": 69706,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=41%2C539"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118022920,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=41%2C539"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "5e655614aae91336",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "543b889958d76834"
              }
            ],
            "startTime": 1657053118061923,
            "duration": 62826,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=309%2C347"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118062023,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=309%2C347"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "1331c571ba8ce878",
            "flags": 1,
            "operationName": "HTTP GET /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "54e8230288fef2bd"
              }
            ],
            "startTime": 1657053118077154,
            "duration": 64953,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/route?dropoff=728%2C326&pickup=321%2C807"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118077171,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/route?dropoff=728%2C326&pickup=321%2C807"
                  }
                ]
              }
            ],
            "processID": "p3",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "0636a05b1994f23e",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "5f28b244e59c64d0"
              }
            ],
            "startTime": 1657053118146682,
            "duration": 77717,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=497%2C164"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118146698,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118146702,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118146713,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118146714,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118224267,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118224317,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118224400,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "5f28b244e59c64d0",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118146676,
            "duration": 77727,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "68f464e5bf3714b6",
            "flags": 1,
            "operationName": "HTTP GET /dispatch",
            "references": [
              
            ],
            "startTime": 1657053117198075,
            "duration": 1026463,
            "tags": [
              {
                "key": "sampler.type",
                "type": "string",
                "value": "const"
              },
              {
                "key": "sampler.param",
                "type": "bool",
                "value": true
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "/dispatch?customer=731&nonse=0.39846766354252927"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053117198126,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "HTTP request received"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "method",
                    "type": "string",
                    "value": "GET"
                  },
                  {
                    "key": "url",
                    "type": "string",
                    "value": "/dispatch?customer=731&nonse=0.39846766354252927"
                  }
                ]
              },
              {
                "timestamp": 1657053117198195,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Getting customer"
                  },
                  {
                    "key": "customer_id",
                    "type": "string",
                    "value": "731"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  }
                ]
              },
              {
                "timestamp": 1657053117821139,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Found customer"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  }
                ]
              },
              {
                "timestamp": 1657053117821204,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "baggage"
                  },
                  {
                    "key": "key",
                    "type": "string",
                    "value": "customer"
                  },
                  {
                    "key": "value",
                    "type": "string",
                    "value": "Japanese Desserts"
                  }
                ]
              },
              {
                "timestamp": 1657053117821210,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding nearest drivers"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "location",
                    "type": "string",
                    "value": "728,326"
                  }
                ]
              },
              {
                "timestamp": 1657053118022495,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Found drivers"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  }
                ]
              },
              {
                "timestamp": 1657053118022571,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "41,539"
                  }
                ]
              },
              {
                "timestamp": 1657053118022658,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "806,7"
                  }
                ]
              },
              {
                "timestamp": 1657053118022668,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "476,411"
                  }
                ]
              },
              {
                "timestamp": 1657053118061291,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "309,347"
                  }
                ]
              },
              {
                "timestamp": 1657053118076855,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "321,807"
                  }
                ]
              },
              {
                "timestamp": 1657053118092862,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "412,772"
                  }
                ]
              },
              {
                "timestamp": 1657053118124978,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "212,736"
                  }
                ]
              },
              {
                "timestamp": 1657053118142531,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "308,18"
                  }
                ]
              },
              {
                "timestamp": 1657053118146616,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "497,164"
                  }
                ]
              },
              {
                "timestamp": 1657053118169995,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Finding route"
                  },
                  {
                    "key": "dropoff",
                    "type": "string",
                    "value": "728,326"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  },
                  {
                    "key": "pickup",
                    "type": "string",
                    "value": "674,112"
                  }
                ]
              },
              {
                "timestamp": 1657053118224422,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Found routes"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  }
                ]
              },
              {
                "timestamp": 1657053118224520,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Dispatch successful"
                  },
                  {
                    "key": "driver",
                    "type": "string",
                    "value": "T790535C"
                  },
                  {
                    "key": "eta",
                    "type": "string",
                    "value": "2m0s"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "4c3fc8341776759c",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "3e9d67a9f98a7c3b"
              }
            ],
            "startTime": 1657053117198269,
            "duration": 622854,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8081/customer?customer=731"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8081"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053117198368,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053117198375,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053117198394,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053117198396,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053117821051,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053117821089,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053117821123,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "3e9d67a9f98a7c3b",
            "flags": 1,
            "operationName": "HTTP GET: /customer",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053117198230,
            "duration": 622896,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "704ea6215ee08f43",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "3397b0c6f5ac2ae2"
              }
            ],
            "startTime": 1657053118023071,
            "duration": 53769,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=476%2C411"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": false
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": false
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118023088,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118023132,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ConnectStart"
                  },
                  {
                    "key": "addr",
                    "type": "string",
                    "value": "0.0.0.0:8083"
                  },
                  {
                    "key": "network",
                    "type": "string",
                    "value": "tcp"
                  }
                ]
              },
              {
                "timestamp": 1657053118023576,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ConnectDone"
                  },
                  {
                    "key": "addr",
                    "type": "string",
                    "value": "0.0.0.0:8083"
                  },
                  {
                    "key": "network",
                    "type": "string",
                    "value": "tcp"
                  }
                ]
              },
              {
                "timestamp": 1657053118023621,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118023657,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118023659,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118076784,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118076819,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118076837,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "3397b0c6f5ac2ae2",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118023066,
            "duration": 53776,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "3d2240c454065688",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "401751934a1a7dc7"
              }
            ],
            "startTime": 1657053118022619,
            "duration": 70230,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=41%2C539"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118022652,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118022662,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118022684,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118022685,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118092785,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118092827,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118092849,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "401751934a1a7dc7",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118022611,
            "duration": 70239,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "543b889958d76834",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "059078853f011b66"
              }
            ],
            "startTime": 1657053118061528,
            "duration": 63437,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=309%2C347"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118061550,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118061556,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118061617,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118061619,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118124913,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118124948,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118124965,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "059078853f011b66",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118061518,
            "duration": 63449,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "54e8230288fef2bd",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "4d38e74c31f4eb12"
              }
            ],
            "startTime": 1657053118076932,
            "duration": 65561,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=321%2C807"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118076949,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118076953,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118076967,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118076968,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118142299,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118142410,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118142493,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "4d38e74c31f4eb12",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118076924,
            "duration": 65594,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "121a3c72e39f5854",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "5de82eacf31c700f"
              }
            ],
            "startTime": 1657053118092948,
            "duration": 53631,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=412%2C772"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118092982,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118092986,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118093134,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118093136,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118146545,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118146568,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118146580,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "5de82eacf31c700f",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118092942,
            "duration": 53665,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "32d8d8c3b908a2ca",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "1fefefd2921ca361"
              }
            ],
            "startTime": 1657053118125109,
            "duration": 44853,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=212%2C736"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118125128,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118125133,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118125151,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118125153,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118169894,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118169946,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118169962,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "1fefefd2921ca361",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118125102,
            "duration": 44882,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "6dc8d6be57df9285",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "1c0d8426ab4510f4"
              }
            ],
            "startTime": 1657053118142681,
            "duration": 45051,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=308%2C18"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118142700,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118142705,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118142794,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118142796,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118187659,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118187717,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118187733,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "1c0d8426ab4510f4",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118142674,
            "duration": 45060,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "035eee4cc1eb3808",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "4e9c00a0b6fd6d02"
              }
            ],
            "startTime": 1657053118170053,
            "duration": 36467,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=674%2C112"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118170068,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118170073,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118170085,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118170086,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118206476,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118206507,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118206521,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "4e9c00a0b6fd6d02",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118170047,
            "duration": 36476,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "35712b15aeae601b",
            "flags": 1,
            "operationName": "HTTP GET: /route",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053118022747,
            "duration": 38530,
            "tags": [
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "7f1e9a9b718ae1f0",
            "flags": 1,
            "operationName": "/driver.DriverService/FindNearest",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "68f464e5bf3714b6"
              }
            ],
            "startTime": 1657053117821235,
            "duration": 201161,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "gRPC"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "4df819ea0e6cf0eb",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "35712b15aeae601b"
              }
            ],
            "startTime": 1657053118022753,
            "duration": 38521,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "component",
                "type": "string",
                "value": "net/http"
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://0.0.0.0:8083/route?dropoff=728%2C326&pickup=806%2C7"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "0.0.0.0:8083"
              },
              {
                "key": "net/http.reused",
                "type": "bool",
                "value": true
              },
              {
                "key": "net/http.was_idle",
                "type": "bool",
                "value": true
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053118022772,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GetConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118022779,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118022795,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteHeaders"
                  }
                ]
              },
              {
                "timestamp": 1657053118022796,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "WroteRequest"
                  }
                ]
              },
              {
                "timestamp": 1657053118061185,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "GotFirstResponseByte"
                  }
                ]
              },
              {
                "timestamp": 1657053118061255,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "PutIdleConn"
                  }
                ]
              },
              {
                "timestamp": 1657053118061274,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "ClosedBody"
                  }
                ]
              }
            ],
            "processID": "p4",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "7abafb05ed52c5e5",
            "flags": 1,
            "operationName": "SQL SELECT",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "744a8efd50ea90ce"
              }
            ],
            "startTime": 1657053117198860,
            "duration": 622064,
            "tags": [
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "peer.service",
                "type": "string",
                "value": "mysql"
              },
              {
                "key": "sql.query",
                "type": "string",
                "value": "SELECT * FROM customer WHERE customer_id=731"
              },
              {
                "key": "request",
                "type": "string",
                "value": "1167-18"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053117198918,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Waiting for lock behind 2 transactions"
                  },
                  {
                    "key": "blockers",
                    "type": "string",
                    "value": "[1167-16 1167-17]"
                  }
                ]
              },
              {
                "timestamp": 1657053117524887,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Acquired lock with 0 transactions waiting behind"
                  }
                ]
              }
            ],
            "processID": "p5",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "0feb46b34d54e227",
            "flags": 1,
            "operationName": "FindDriverIDs",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117821788,
            "duration": 19604,
            "tags": [
              {
                "key": "param.location",
                "type": "string",
                "value": "728,326"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053117841286,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "Found drivers"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "info"
                  }
                ]
              }
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "65fdc6b18363bb47",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117932518,
            "duration": 13180,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T758841C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "23f95dffbb4b0a96",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117854214,
            "duration": 15162,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T790535C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "20b8fc41adb089fb",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117869391,
            "duration": 30708,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T711028C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "error",
                "type": "bool",
                "value": true
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053117900033,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "redis timeout"
                  },
                  {
                    "key": "driver_id",
                    "type": "string",
                    "value": "T711028C"
                  },
                  {
                    "key": "error",
                    "type": "string",
                    "value": "redis timeout"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "error"
                  }
                ]
              }
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "725daf92af7dfc68",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117900126,
            "duration": 10897,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T711028C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "6684d0b952f03e04",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117911031,
            "duration": 9638,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T719153C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "50f430e347f413e3",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117920685,
            "duration": 11819,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T738916C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "2a609819e14db090",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117985874,
            "duration": 12407,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T713393C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "6cac46b01df1eac3",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117945724,
            "duration": 28415,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T742757C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "error",
                "type": "bool",
                "value": true
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              {
                "timestamp": 1657053117974072,
                "fields": [
                  {
                    "key": "event",
                    "type": "string",
                    "value": "redis timeout"
                  },
                  {
                    "key": "driver_id",
                    "type": "string",
                    "value": "T742757C"
                  },
                  {
                    "key": "error",
                    "type": "string",
                    "value": "redis timeout"
                  },
                  {
                    "key": "level",
                    "type": "string",
                    "value": "error"
                  }
                ]
              }
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "1de9e0e4d2197b04",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117974160,
            "duration": 11692,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T742757C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "79d48deb1e0a451c",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117998295,
            "duration": 10013,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T790386C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "1a799962c0817139",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053118008361,
            "duration": 13254,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T753177C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          },
          {
            "traceID": "68f464e5bf3714b6",
            "spanID": "2fcbdf95d41d62ab",
            "flags": 1,
            "operationName": "GetDriver",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "68f464e5bf3714b6",
                "spanID": "112052eebc933005"
              }
            ],
            "startTime": 1657053117841406,
            "duration": 12793,
            "tags": [
              {
                "key": "param.driverID",
                "type": "string",
                "value": "T725171C"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "proto"
              }
            ],
            "logs": [
              
            ],
            "processID": "p6",
            "warnings": null
          }
        ],
        "processes": {
          "p1": {
            "serviceName": "driver",
            "tags": [
              {
                "key": "client-uuid",
                "type": "string",
                "value": "713b91c6a8606de5"
              },
              {
                "key": "hostname",
                "type": "string",
                "value": "03ffa89692db"
              },
              {
                "key": "ip",
                "type": "string",
                "value": "172.22.0.3"
              },
              {
                "key": "jaeger.version",
                "type": "string",
                "value": "Go-2.30.0"
              }
            ]
          },
          "p2": {
            "serviceName": "customer",
            "tags": [
              {
                "key": "client-uuid",
                "type": "string",
                "value": "6afa792a4d496294"
              },
              {
                "key": "hostname",
                "type": "string",
                "value": "03ffa89692db"
              },
              {
                "key": "ip",
                "type": "string",
                "value": "172.22.0.3"
              },
              {
                "key": "jaeger.version",
                "type": "string",
                "value": "Go-2.30.0"
              }
            ]
          },
          "p3": {
            "serviceName": "route",
            "tags": [
              {
                "key": "client-uuid",
                "type": "string",
                "value": "615c7b5286f82f9b"
              },
              {
                "key": "hostname",
                "type": "string",
                "value": "03ffa89692db"
              },
              {
                "key": "ip",
                "type": "string",
                "value": "172.22.0.3"
              },
              {
                "key": "jaeger.version",
                "type": "string",
                "value": "Go-2.30.0"
              }
            ]
          },
          "p4": {
            "serviceName": "frontend",
            "tags": [
              {
                "key": "client-uuid",
                "type": "string",
                "value": "31772d99b34a392c"
              },
              {
                "key": "hostname",
                "type": "string",
                "value": "03ffa89692db"
              },
              {
                "key": "ip",
                "type": "string",
                "value": "172.22.0.3"
              },
              {
                "key": "jaeger.version",
                "type": "string",
                "value": "Go-2.30.0"
              }
            ]
          },
          "p5": {
            "serviceName": "mysql",
            "tags": [
              {
                "key": "client-uuid",
                "type": "string",
                "value": "35fc49fd8606ce23"
              },
              {
                "key": "hostname",
                "type": "string",
                "value": "03ffa89692db"
              },
              {
                "key": "ip",
                "type": "string",
                "value": "172.22.0.3"
              },
              {
                "key": "jaeger.version",
                "type": "string",
                "value": "Go-2.30.0"
              }
            ]
          },
          "p6": {
            "serviceName": "redis",
            "tags": [
              {
                "key": "client-uuid",
                "type": "string",
                "value": "76efbe2afdd04d68"
              },
              {
                "key": "hostname",
                "type": "string",
                "value": "03ffa89692db"
              },
              {
                "key": "ip",
                "type": "string",
                "value": "172.22.0.3"
              },
              {
                "key": "jaeger.version",
                "type": "string",
                "value": "Go-2.30.0"
              }
            ]
          }
        },
        "warnings": null
      }
    ],
    "total": 0,
    "limit": 0,
    "offset": 0,
    "errors": null
  }
