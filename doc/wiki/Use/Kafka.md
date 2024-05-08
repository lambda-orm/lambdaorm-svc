# Kafka

## Configuration

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

## Send message

In order to send a message to a Kafka queue, the kafka.send function must be used as shown below:

```yaml
application:
  listeners:
    - name: syncInsights
      on: [insert, bulkInsert, update, delete ]
      condition: options.stage.in("default","cqrs")
       after: kafka.send("insights-sync",[{query:query,data:data}])    
```
