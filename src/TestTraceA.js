export const jaegerTraceA = {
  "data": [
    {
      "traceID": "1f5faa7d68eaf757e130f122eb5ddbe5",
      "spans": [
        {
          "traceID": "1f5faa7d68eaf757e130f122eb5ddbe5",
          "spanID": "9d9debc4a50518b1",
          "flags": 1,
          "operationName": "BikeHandler",
          "references": [
            {
              "refType": "CHILD_OF",
              "traceID": "1f5faa7d68eaf757e130f122eb5ddbe5",
              "spanID": "0c0858b76dc3d559"
            }
          ],
          "startTime": 1657727169316228,
          "duration": 870894,
          "tags": [
            {
              "key": "net.transport",
              "type": "string",
              "value": "ip_tcp"
            },
            {
              "key": "net.peer.ip",
              "type": "string",
              "value": "172.19.0.13"
            },
            {
              "key": "net.peer.port",
              "type": "int64",
              "value": 51202
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
              "value": "9d9debc4a50518b1"
            },
            {
              "key": "pyroscope.profile.url",
              "type": "string",
              "value": "http://localhost:4040?query=ride-sharing-app.cpu%7Bprofile_id%3D%229d9debc4a50518b1%22%7D"
            },
            {
              "key": "pyroscope.profile.baseline.url",
              "type": "string",
              "value": "http://localhost:4040/comparison?from=1657723569&leftFrom=1657723569&leftQuery=ride-sharing-app.cpu%7Bspan_name%3D%22BikeHandler%22%2Cregion%3D%22eu-north%22%7D&leftUntil=1657727170&query=ride-sharing-app.cpu%7Bspan_name%3D%22BikeHandler%22%2Cregion%3D%22eu-north%22%7D&rightFrom=1657723569&rightQuery=ride-sharing-app.cpu%7Bprofile_id%3D%229d9debc4a50518b1%22%7D&rightUntil=1657727170&until=1657727170"
            },
            {
              "key": "pyroscope.profile.diff.url",
              "type": "string",
              "value": "http://localhost:4040/comparison-diff?from=1657723569&leftFrom=1657723569&leftQuery=ride-sharing-app.cpu%7Bspan_name%3D%22BikeHandler%22%2Cregion%3D%22eu-north%22%7D&leftUntil=1657727170&query=ride-sharing-app.cpu%7Bspan_name%3D%22BikeHandler%22%2Cregion%3D%22eu-north%22%7D&rightFrom=1657723569&rightQuery=ride-sharing-app.cpu%7Bprofile_id%3D%229d9debc4a50518b1%22%7D&rightUntil=1657727170&until=1657727170"
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
          "traceID": "1f5faa7d68eaf757e130f122eb5ddbe5",
          "spanID": "7ce4871ede34b9e1",
          "flags": 1,
          "operationName": "FindNearestVehicle",
          "references": [
            {
              "refType": "CHILD_OF",
              "traceID": "1f5faa7d68eaf757e130f122eb5ddbe5",
              "spanID": "9d9debc4a50518b1"
            }
          ],
          "startTime": 1657727169316329,
          "duration": 870146,
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
          "traceID": "1f5faa7d68eaf757e130f122eb5ddbe5",
          "spanID": "0c0858b76dc3d559",
          "flags": 1,
          "operationName": "HTTP GET",
          "references": [
            {
              "refType": "CHILD_OF",
              "traceID": "1f5faa7d68eaf757e130f122eb5ddbe5",
              "spanID": "447ccf488d81a169"
            }
          ],
          "startTime": 1657727169315906,
          "duration": 871970,
          "tags": [
            {
              "key": "http.method",
              "type": "string",
              "value": "GET"
            },
            {
              "key": "http.url",
              "type": "string",
              "value": "http://eu-north:5000/bike"
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
          "processID": "p2",
          "warnings": null
        },
        {
          "traceID": "1f5faa7d68eaf757e130f122eb5ddbe5",
          "spanID": "447ccf488d81a169",
          "flags": 1,
          "operationName": "OrderVehicle",
          "references": [
            
          ],
          "startTime": 1657727168953796,
          "duration": 1234175,
          "tags": [
            {
              "key": "vehicle",
              "type": "string",
              "value": "bike"
            },
            {
              "key": "pyroscope.profile.id",
              "type": "string",
              "value": "447ccf488d81a169"
            },
            {
              "key": "pyroscope.profile.url",
              "type": "string",
              "value": "http://localhost:4040?query=load-generator.cpu%7Bprofile_id%3D%22447ccf488d81a169%22%7D"
            },
            {
              "key": "pyroscope.profile.baseline.url",
              "type": "string",
              "value": "http://localhost:4040/comparison?from=1657723568&leftFrom=1657723568&leftQuery=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&leftUntil=1657727170&query=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&rightFrom=1657723568&rightQuery=load-generator.cpu%7Bprofile_id%3D%22447ccf488d81a169%22%7D&rightUntil=1657727170&until=1657727170"
            },
            {
              "key": "pyroscope.profile.diff.url",
              "type": "string",
              "value": "http://localhost:4040/comparison-diff?from=1657723568&leftFrom=1657723568&leftQuery=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&leftUntil=1657727170&query=load-generator.cpu%7Bspan_name%3D%22OrderVehicle%22%7D&rightFrom=1657723568&rightQuery=load-generator.cpu%7Bprofile_id%3D%22447ccf488d81a169%22%7D&rightUntil=1657727170&until=1657727170"
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
