# Configuration

## Workspace

The WORKSPACE environment variable must be defined with the path to the directory where the lambdaorm configuration file is located.

Example of environment variable values:

```sh
export WORKSPACE=./config/northwind
```

## Service Configuration

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

## Kafka Queue

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
