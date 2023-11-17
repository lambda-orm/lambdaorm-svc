orm-service / [Exports](modules.md)

# Lambda ORM service

Service that exposes the functionality of the [LambdaOrm](https://github.com/FlavioLionelRita/lambdaorm) library

## Configuration

### Workspace

The WORKSPACE environment variable must be defined with the path to the directory where the lambdaorm configuration file is located.

Example of environment variable values:

```sh
export WORKSPACE=./config/northwind
```

### Service

The service configuration must be added to the infrastructure section of the lambdaorm configuration file.

```yml
...
infrastructure:
  service:
    host: $HOST
    port: $PORT
    requestBodySize: $REQUEST_BODY_SIZE
    rateLimitWindowMs: $RATE_LIMIT_WINDOWS_MS
    rateLimitMax: $RATE_LIMIT_MAX

```

Example of environment variable values:

```sh
export HOST=http://localhost
export PORT=9291
export REQUEST_BODY_SIZE=100mb
export RATE_LIMIT_WINDOWS_MS=60000
export RATE_LIMIT_MAX=1000
```

### Kafka Queue

In the case of using Kafka queues, the following configuration must be added to the infrastructure section of the lambdaorm configuration file.

```yaml
...
infrastructure:
  queue: 
    config: $QUEUE_CONFIG
    consumers:
      - name: syncInsights
        config:
          groupId: group1
        subscribe:
          topic: insights-sync
          fromBeginning: true

```

Example of environment variable values:

```sh
export QUEUE_CONFIG='{"clientId": "collections", "brokers": ["localhost:9093"]}'
```

## Images

You can access various images at [flaviorita/lambdaorm-svc](https://hub.docker.com/repository/docker/flaviorita/lambdaorm-svc/general)

## Labs

You can access various labs at [github.com/FlavioLionelRita/lambdaorm-labs](https://github.com/FlavioLionelRita/lambdaorm-labs)

## Tasks

Main tasks are:

| Task 							| Description 																					|
| ----------------- | ----------------------------------------------------- |
| `npm run start` 	| Start service 																				|
| `npm run release` | Build code, generate documentation and publish to npm |

Sub tasks are:

| Task 							| Description 																					|
| ----------------- | ----------------------------------------------------- |
| `npm run lint` 		| Lint code 																						|
| `npm run build` 	| Build code 																						|
| `npm run test` 		| Run tests 																						|
| `npm run doc` 		| Generate documentation 																|
| `npm run dist` 		| Build code and generate documentation 								|
