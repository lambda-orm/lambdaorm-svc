# General Endpoints

General endpoints are used to get information about the service.

![general-methods](https://raw.githubusercontent.com/FlavioLionelRita/lambdaorm-svc/HEAD/images/general-methods.png)

## Ping

Returns a pong message.

Request:

```sh
curl -X GET "http://localhost:9291/ping?format=beautiful"
```

Response

```json
{
  "message": "pong",
  "time": "2023-11-28T23:13:09.741Z"
}
```

## Health

Returns the health of the service.

Request:

```sh
curl -X GET "http://localhost:9291/health?format=beautiful"
```

Response

```json
{
  "uptime": 3679.23219635,
  "message": "OK",
  "time": "2023-11-28T23:13:43.827Z"
}
```

## Version

Returns the version of the service.

Request:

```sh
curl -X GET "http://localhost:9291/version?format=beautiful"
```

Response

```json
{
  "version": "0.8.49"
}
```

## Metrics

Returns the metrics of the service.

Request:

```sh
curl -X GET "http://localhost:9291/metrics?format=beautiful"
```

Response

```sh
# HELP node_process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE node_process_cpu_user_seconds_total counter
node_process_cpu_user_seconds_total 0.001831

# HELP node_process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE node_process_cpu_system_seconds_total counter
node_process_cpu_system_seconds_total 0

# HELP node_process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE node_process_cpu_seconds_total counter
node_process_cpu_seconds_total 0.001831

# HELP node_process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE node_process_start_time_seconds gauge
node_process_start_time_seconds 1701209545

# HELP node_process_resident_memory_bytes Resident memory size in bytes.
# TYPE node_process_resident_memory_bytes gauge
node_process_resident_memory_bytes 74321920

# HELP node_process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE node_process_virtual_memory_bytes gauge
node_process_virtual_memory_bytes 1142546432

# HELP node_process_heap_bytes Process heap size in bytes.
# TYPE node_process_heap_bytes gauge
node_process_heap_bytes 119537664

# HELP node_process_open_fds Number of open file descriptors.
# TYPE node_process_open_fds gauge
node_process_open_fds 63

# HELP node_process_max_fds Maximum number of open file descriptors.
# TYPE node_process_max_fds gauge
node_process_max_fds 1048576

# HELP node_nodejs_eventloop_lag_seconds Lag of event loop in seconds.
# TYPE node_nodejs_eventloop_lag_seconds gauge
node_nodejs_eventloop_lag_seconds 0

# HELP node_nodejs_eventloop_lag_min_seconds The minimum recorded event loop delay.
# TYPE node_nodejs_eventloop_lag_min_seconds gauge
node_nodejs_eventloop_lag_min_seconds 9223372036.854776

# HELP node_nodejs_eventloop_lag_max_seconds The maximum recorded event loop delay.
# TYPE node_nodejs_eventloop_lag_max_seconds gauge
node_nodejs_eventloop_lag_max_seconds 0

# HELP node_nodejs_eventloop_lag_mean_seconds The mean of the recorded event loop delays.
# TYPE node_nodejs_eventloop_lag_mean_seconds gauge
node_nodejs_eventloop_lag_mean_seconds Nan

# HELP node_nodejs_eventloop_lag_stddev_seconds The standard deviation of the recorded event loop delays.
# TYPE node_nodejs_eventloop_lag_stddev_seconds gauge
node_nodejs_eventloop_lag_stddev_seconds Nan

# HELP node_nodejs_eventloop_lag_p50_seconds The 50th percentile of the recorded event loop delays.
# TYPE node_nodejs_eventloop_lag_p50_seconds gauge
node_nodejs_eventloop_lag_p50_seconds 5.11e-7

# HELP node_nodejs_eventloop_lag_p90_seconds The 90th percentile of the recorded event loop delays.
# TYPE node_nodejs_eventloop_lag_p90_seconds gauge
node_nodejs_eventloop_lag_p90_seconds 5.11e-7

# HELP node_nodejs_eventloop_lag_p99_seconds The 99th percentile of the recorded event loop delays.
# TYPE node_nodejs_eventloop_lag_p99_seconds gauge
node_nodejs_eventloop_lag_p99_seconds 5.11e-7

# HELP node_nodejs_active_resources Number of active resources that are currently keeping the event loop alive, grouped by async resource type.
# TYPE node_nodejs_active_resources gauge
node_nodejs_active_resources{type="PipeWrap"} 3
node_nodejs_active_resources{type="TCPServerWrap"} 1
node_nodejs_active_resources{type="TCPSocketWrap"} 2
node_nodejs_active_resources{type="Immediate"} 1

# HELP node_nodejs_active_resources_total Total number of active resources.
# TYPE node_nodejs_active_resources_total gauge
node_nodejs_active_resources_total 7

# HELP node_nodejs_active_handles Number of active libuv handles grouped by handle type. Every handle type is C++ class name.
# TYPE node_nodejs_active_handles gauge
node_nodejs_active_handles{type="Socket"} 5
node_nodejs_active_handles{type="Server"} 1

# HELP node_nodejs_active_handles_total Total number of active handles.
# TYPE node_nodejs_active_handles_total gauge
node_nodejs_active_handles_total 6

# HELP node_nodejs_active_requests Number of active libuv requests grouped by request type. Every request type is C++ class name.
# TYPE node_nodejs_active_requests gauge

# HELP node_nodejs_active_requests_total Total number of active requests.
# TYPE node_nodejs_active_requests_total gauge
node_nodejs_active_requests_total 0

# HELP node_nodejs_heap_size_total_bytes Process heap size from Node.js in bytes.
# TYPE node_nodejs_heap_size_total_bytes gauge
node_nodejs_heap_size_total_bytes 23187456

# HELP node_nodejs_heap_size_used_bytes Process heap size used from Node.js in bytes.
# TYPE node_nodejs_heap_size_used_bytes gauge
node_nodejs_heap_size_used_bytes 21475792

# HELP node_nodejs_external_memory_bytes Node.js external memory size in bytes.
# TYPE node_nodejs_external_memory_bytes gauge
node_nodejs_external_memory_bytes 2531363

# HELP node_nodejs_heap_space_size_total_bytes Process heap space size total from Node.js in bytes.
# TYPE node_nodejs_heap_space_size_total_bytes gauge
node_nodejs_heap_space_size_total_bytes{space="read_only"} 0
node_nodejs_heap_space_size_total_bytes{space="new"} 1048576
node_nodejs_heap_space_size_total_bytes{space="old"} 20062208
node_nodejs_heap_space_size_total_bytes{space="code"} 1310720
node_nodejs_heap_space_size_total_bytes{space="shared"} 0
node_nodejs_heap_space_size_total_bytes{space="new_large_object"} 0
node_nodejs_heap_space_size_total_bytes{space="large_object"} 765952
node_nodejs_heap_space_size_total_bytes{space="code_large_object"} 0
node_nodejs_heap_space_size_total_bytes{space="shared_large_object"} 0

# HELP node_nodejs_heap_space_size_used_bytes Process heap space size used from Node.js in bytes.
# TYPE node_nodejs_heap_space_size_used_bytes gauge
node_nodejs_heap_space_size_used_bytes{space="read_only"} 0
node_nodejs_heap_space_size_used_bytes{space="new"} 486384
node_nodejs_heap_space_size_used_bytes{space="old"} 19039600
node_nodejs_heap_space_size_used_bytes{space="code"} 1215760
node_nodejs_heap_space_size_used_bytes{space="shared"} 0
node_nodejs_heap_space_size_used_bytes{space="new_large_object"} 0
node_nodejs_heap_space_size_used_bytes{space="large_object"} 750816
node_nodejs_heap_space_size_used_bytes{space="code_large_object"} 0
node_nodejs_heap_space_size_used_bytes{space="shared_large_object"} 0

# HELP node_nodejs_heap_space_size_available_bytes Process heap space size available from Node.js in bytes.
# TYPE node_nodejs_heap_space_size_available_bytes gauge
node_nodejs_heap_space_size_available_bytes{space="read_only"} 0
node_nodejs_heap_space_size_available_bytes{space="new"} 544496
node_nodejs_heap_space_size_available_bytes{space="old"} 647640
node_nodejs_heap_space_size_available_bytes{space="code"} 12784
node_nodejs_heap_space_size_available_bytes{space="shared"} 0
node_nodejs_heap_space_size_available_bytes{space="new_large_object"} 1048576
node_nodejs_heap_space_size_available_bytes{space="large_object"} 0
node_nodejs_heap_space_size_available_bytes{space="code_large_object"} 0
node_nodejs_heap_space_size_available_bytes{space="shared_large_object"} 0

# HELP node_nodejs_version_info Node.js version info.
# TYPE node_nodejs_version_info gauge
node_nodejs_version_info{version="v20.9.0",major="20",minor="9",patch="0"} 1

# HELP node_nodejs_gc_duration_seconds Garbage collection duration by kind, one of major, minor, incremental or weakcb.
# TYPE node_nodejs_gc_duration_seconds histogram
```
