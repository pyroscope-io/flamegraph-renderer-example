
// 20220718220444
// http://localhost:4000/api/traces/50959bbcf50ce0a4369d760c6a3217fb?prettyPrint=true
export const fastTrace = {
    "data": [
      {
        "traceID": "50959bbcf50ce0a4369d760c6a3217fb",
        "spans": [
          {
            "traceID": "50959bbcf50ce0a4369d760c6a3217fb",
            "spanID": "0e4375430ae3b14e",
            "flags": 1,
            "operationName": "BikeHandler",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "50959bbcf50ce0a4369d760c6a3217fb",
                "spanID": "81ef0c1653ed6cf3"
              }
            ],
            "startTime": 1658206121861288,
            "duration": 659162,
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
                "value": 55680
              },
              {
                "key": "net.host.name",
                "type": "string",
                "value": "us-east"
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
                "value": "/bike"
              },
              {
                "key": "http.server_name",
                "type": "string",
                "value": "BikeHandler"
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
                "value": "us-east:5000"
              },
              {
                "key": "http.flavor",
                "type": "string",
                "value": "1.1"
              },
              {
                "key": "pyroscope.profile.id",
                "type": "string",
                "value": "0e4375430ae3b14e"
              },
              {
                "key": "pyroscope.profile.url",
                "type": "string",
                "value": "http://localhost:4040/?from=1658206121861705562&query=ride-sharing-app.cpu%7Bprofile_id%3D%220e4375430ae3b14e%22%7D&until=1658206122520415480"
              },
              {
                "key": "pyroscope.profile.baseline.url",
                "type": "string",
                "value": "http://localhost:4040/comparison?from=1658202521&leftFrom=1658202521&leftQuery=ride-sharing-app.cpu%7Bspan_name%3D%22BikeHandler%22%2Cregion%3D%22us-east%22%7D&leftUntil=1658206122&query=ride-sharing-app.cpu%7Bspan_name%3D%22BikeHandler%22%2Cregion%3D%22us-east%22%7D&rightFrom=1658202521&rightQuery=ride-sharing-app.cpu%7Bprofile_id%3D%220e4375430ae3b14e%22%7D&rightUntil=1658206122&until=1658206122"
              },
              {
                "key": "pyroscope.profile.diff.url",
                "type": "string",
                "value": "http://localhost:4040/comparison-diff?from=1658202521&leftFrom=1658202521&leftQuery=ride-sharing-app.cpu%7Bspan_name%3D%22BikeHandler%22%2Cregion%3D%22us-east%22%7D&leftUntil=1658206122&query=ride-sharing-app.cpu%7Bspan_name%3D%22BikeHandler%22%2Cregion%3D%22us-east%22%7D&rightFrom=1658202521&rightQuery=ride-sharing-app.cpu%7Bprofile_id%3D%220e4375430ae3b14e%22%7D&rightUntil=1658206122&until=1658206122"
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
            "processID": "p1",
            "warnings": null
          },
          {
            "traceID": "50959bbcf50ce0a4369d760c6a3217fb",
            "spanID": "06bc00114a69e6f6",
            "flags": 1,
            "operationName": "FindNearestVehicle",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "50959bbcf50ce0a4369d760c6a3217fb",
                "spanID": "0e4375430ae3b14e"
              }
            ],
            "startTime": 1658206121862180,
            "duration": 658189,
            "tags": [
              {
                "key": "vehicle",
                "type": "string",
                "value": "bike"
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
            "traceID": "50959bbcf50ce0a4369d760c6a3217fb",
            "spanID": "102fd31f8520241e",
            "flags": 1,
            "operationName": "OrderVehicle",
            "references": [
              
            ],
            "startTime": 1658206121545815,
            "duration": 974862,
            "tags": [
              {
                "key": "vehicle",
                "type": "string",
                "value": "bike"
              },
              {
                "key": "pyroscope.profile.id",
                "type": "string",
                "value": "102fd31f8520241e"
              },
              {
                "key": "pyroscope.profile.url",
                "type": "string",
                "value": "http://localhost:4040/?from=1658206121545820301&query=load-generator.cpu%7Bprofile_id%3D%22102fd31f8520241e%22%7D&until=1658206122520660752"
              },
              {
                "key": "pyroscope.profile.baseline.url",
                "type": "string",
                "value": "http://localhost:4040/comparison?from=1658202521&leftFrom=1658202521&leftQuery=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&leftUntil=1658206122&query=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&rightFrom=1658202521&rightQuery=load-generator.cpu%7Bprofile_id%3D%22102fd31f8520241e%22%7D&rightUntil=1658206122&until=1658206122"
              },
              {
                "key": "pyroscope.profile.diff.url",
                "type": "string",
                "value": "http://localhost:4040/comparison-diff?from=1658202521&leftFrom=1658202521&leftQuery=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&leftUntil=1658206122&query=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&rightFrom=1658202521&rightQuery=load-generator.cpu%7Bprofile_id%3D%22102fd31f8520241e%22%7D&rightUntil=1658206122&until=1658206122"
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
            "traceID": "50959bbcf50ce0a4369d760c6a3217fb",
            "spanID": "81ef0c1653ed6cf3",
            "flags": 1,
            "operationName": "HTTP GET",
            "references": [
              {
                "refType": "CHILD_OF",
                "traceID": "50959bbcf50ce0a4369d760c6a3217fb",
                "spanID": "102fd31f8520241e"
              }
            ],
            "startTime": 1658206121860884,
            "duration": 659770,
            "tags": [
              {
                "key": "http.method",
                "type": "string",
                "value": "GET"
              },
              {
                "key": "http.url",
                "type": "string",
                "value": "http://us-east:5000/bike"
              },
              {
                "key": "http.scheme",
                "type": "string",
                "value": "http"
              },
              {
                "key": "http.host",
                "type": "string",
                "value": "us-east:5000"
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
            "processID": "p2",
            "warnings": null
          }
        ],
        "processes": {
          "p1": {
            "serviceName": "ride-sharing-app",
            "tags": [
              
            ]
          },
          "p2": {
            "serviceName": "load-generator",
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
