export const slowTrace = {
    "data": [
      {
        "traceID": "4db29304ec0c684c2aae32a70c6b7915",
        "spans": [
          {
            "traceID": "4db29304ec0c684c2aae32a70c6b7915",
            "spanID": "9c554a118992dec4",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "4db29304ec0c684c2aae32a70c6b7915",
                "spanID": "800b6102f9fa907f"
              }
            ],
            "startTime": 1658206133087779,
            "duration": 7253045,
            "tags": [
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://eu-north:5000/car"
              },
              {
                "key": "http.scheme",
                "type": "string",
                "value": "http"
              },
              {
                "key": "http.host",
                "type": "string",
                "value": "eu-north:5000"
              },
              {
                "key": "http.flavor",
                "type": "string",
                "value": "1.1"
              },
              {
                "key": "http.status_code",
                "type": "int64",
                "value": 200
              },
              {
                "key": "otel.library.name",
                "type": "string",
                "value": "go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
              },
              {
                "key": "otel.library.version",
                "type": "string",
                "value": "semver:0.27.0"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "client"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "jaeger"
              }
            ],
            "logs": [
              
            ],
            "processID": "p1",
            "warnings": null
          },
          {
            "traceID": "4db29304ec0c684c2aae32a70c6b7915",
            "spanID": "800b6102f9fa907f",
            "flags": 1,
            "operationName": "OrderVehicle",
            "references": [
              
            ],
            "startTime": 1658206132698608,
            "duration": 7642307,
            "tags": [
              {
                "key": "vehicle",
                "type": "string",
                "value": "car"
              },
              {
                "key": "pyroscope.profile.id",
                "type": "string",
                "value": "800b6102f9fa907f"
              },
              {
                "key": "pyroscope.profile.url",
                "type": "string",
                "value": "http://localhost:4040/?from=1658206132698614248&query=load-generator.cpu%7Bprofile_id%3D%22800b6102f9fa907f%22%7D&until=1658206140340831530"
              },
              {
                "key": "pyroscope.profile.baseline.url",
                "type": "string",
                "value": "http://localhost:4040/comparison?from=1658202532&leftFrom=1658202532&leftQuery=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&leftUntil=1658206140&query=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&rightFrom=1658202532&rightQuery=load-generator.cpu%7Bprofile_id%3D%22800b6102f9fa907f%22%7D&rightUntil=1658206140&until=1658206140"
              },
              {
                "key": "pyroscope.profile.diff.url",
                "type": "string",
                "value": "http://localhost:4040/comparison-diff?from=1658202532&leftFrom=1658202532&leftQuery=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&leftUntil=1658206140&query=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&rightFrom=1658202532&rightQuery=load-generator.cpu%7Bprofile_id%3D%22800b6102f9fa907f%22%7D&rightUntil=1658206140&until=1658206140"
              },
              {
                "key": "otel.library.name",
                "type": "string",
                "value": "go.opentelemetry.io/otel/sdk/tracer"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "jaeger"
              }
            ],
            "logs": [
              
            ],
            "processID": "p1",
            "warnings": null
          },
          {
            "traceID": "4db29304ec0c684c2aae32a70c6b7915",
            "spanID": "a5d1acbc9f2db728",
            "flags": 1,
            "operationName": "FindNearestVehicle",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "4db29304ec0c684c2aae32a70c6b7915",
                "spanID": "2df49e26fcc156b4"
              }
            ],
            "startTime": 1658206133088378,
            "duration": 7251906,
            "tags": [
              {
                "key": "vehicle",
                "type": "string",
                "value": "car"
              },
              {
                "key": "otel.library.name",
                "type": "string",
                "value": "go.opentelemetry.io/otel/sdk/tracer"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "jaeger"
              }
            ],
            "logs": [
              
            ],
            "processID": "p2",
            "warnings": null
          },
          {
            "traceID": "4db29304ec0c684c2aae32a70c6b7915",
            "spanID": "2df49e26fcc156b4",
            "flags": 1,
            "operationName": "CarHandler",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "4db29304ec0c684c2aae32a70c6b7915",
                "spanID": "9c554a118992dec4"
              }
            ],
            "startTime": 1658206133088304,
            "duration": 7252047,
            "tags": [
              {
                "key": "net.transport",
                "type": "string",
                "value": "ip_tcp"
              },
              {
                "key": "net.peer.ip",
                "type": "string",
                "value": "172.20.0.13"
              },
              {
                "key": "net.peer.port",
                "type": "int64",
                "value": 50338
              },
              {
                "key": "net.host.name",
                "type": "string",
                "value": "eu-north"
              },
              {
                "key": "net.host.port",
                "type": "int64",
                "value": 5000
              },
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.target",
                "type": "string",
                "value": "/car"
              },
              {
                "key": "http.server_name",
                "type": "string",
                "value": "CarHandler"
              },
              {
                "key": "http.user_agent",
                "type": "string",
                "value": "Go-http-client/1.1"
              },
              {
                "key": "http.scheme",
                "type": "string",
                "value": "http"
              },
              {
                "key": "http.host",
                "type": "string",
                "value": "eu-north:5000"
              },
              {
                "key": "http.flavor",
                "type": "string",
                "value": "1.1"
              },
              {
                "key": "pyroscope.profile.id",
                "type": "string",
                "value": "2df49e26fcc156b4"
              },
              {
                "key": "pyroscope.profile.url",
                "type": "string",
                "value": "http://localhost:4040/?from=1658206133088316147&query=ride-sharing-app.cpu%7Bprofile_id%3D%222df49e26fcc156b4%22%7D&until=1658206140340306147"
              },
              {
                "key": "pyroscope.profile.baseline.url",
                "type": "string",
                "value": "http://localhost:4040/comparison?from=1658202533&leftFrom=1658202533&leftQuery=ride-sharing-app.cpu%7Bspan_name%3D%22CarHandler%22%2Cregion%3D%22eu-north%22%7D&leftUntil=1658206140&query=ride-sharing-app.cpu%7Bspan_name%3D%22CarHandler%22%2Cregion%3D%22eu-north%22%7D&rightFrom=1658202533&rightQuery=ride-sharing-app.cpu%7Bprofile_id%3D%222df49e26fcc156b4%22%7D&rightUntil=1658206140&until=1658206140"
              },
              {
                "key": "pyroscope.profile.diff.url",
                "type": "string",
                "value": "http://localhost:4040/comparison-diff?from=1658202533&leftFrom=1658202533&leftQuery=ride-sharing-app.cpu%7Bspan_name%3D%22CarHandler%22%2Cregion%3D%22eu-north%22%7D&leftUntil=1658206140&query=ride-sharing-app.cpu%7Bspan_name%3D%22CarHandler%22%2Cregion%3D%22eu-north%22%7D&rightFrom=1658202533&rightQuery=ride-sharing-app.cpu%7Bprofile_id%3D%222df49e26fcc156b4%22%7D&rightUntil=1658206140&until=1658206140"
              },
              {
                "key": "otel.library.name",
                "type": "string",
                "value": "go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
              },
              {
                "key": "otel.library.version",
                "type": "string",
                "value": "semver:0.27.0"
              },
              {
                "key": "span.kind",
                "type": "string",
                "value": "server"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "jaeger"
              }
            ],
            "logs": [
              
            ],
            "processID": "p2",
            "warnings": null
          },
          {
            "traceID": "4db29304ec0c684c2aae32a70c6b7915",
            "spanID": "d28597d129c90ec0",
            "flags": 1,
            "operationName": "CheckDriverAvailability",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "4db29304ec0c684c2aae32a70c6b7915",
                "spanID": "a5d1acbc9f2db728"
              }
            ],
            "startTime": 1658206135245276,
            "duration": 5094977,
            "tags": [
              {
                "key": "otel.library.name",
                "type": "string",
                "value": "go.opentelemetry.io/otel/sdk/tracer"
              },
              {
                "key": "internal.span.format",
                "type": "string",
                "value": "jaeger"
              }
            ],
            "logs": [
              
            ],
            "processID": "p2",
            "warnings": null
          }
        ],
        "processes": {
          "p1": {
            "serviceName": "load-generator",
            "tags": [
              
            ]
          },
          "p2": {
            "serviceName": "ride-sharing-app",
            "tags": [
              
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
