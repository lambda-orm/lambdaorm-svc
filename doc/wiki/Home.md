# Lambda ORM service

Service that exposes the functionality of the [LambdaOrm](https://github.com/lambda-orm/lambdaorm) library

## Service

The service exposes the following endpoints:

### Queries endpoints

![query-methods](https://raw.githubusercontent.com/lambda-orm/lambdaorm-svc/HEAD/images/query-methods.png)

### General endpoints

![general-methods](https://raw.githubusercontent.com/lambda-orm/lambdaorm-svc/HEAD/images/general-methods.png)

### Schema endpoints

![schema-methods](https://raw.githubusercontent.com/lambda-orm/lambdaorm-svc/HEAD/images/schema-methods.png)

### Stage endpoints

![stage-methods](https://raw.githubusercontent.com/lambda-orm/lambdaorm-svc/HEAD/images/stage-methods.png)

## Usage

### Ping

```sh
curl -X GET "http://localhost:9291/ping?format=beautiful"
```

Result:

```json
{
  "message": "pong",
  "time": "2023-12-08T19:41:00.543Z"
}
```

### Model

```sh
curl -X POST "http://localhost:9291/model?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.customerId==customerId).include(p=>p.details)"}'
```

Result:

```json
[
  {
    "name": "id",
    "type": "integer"
  },
  {
    "name": "customerId",
    "type": "string"
  },
  {
    "name": "orderDate",
    "type": "dateTime"
  },
  {
    "name": "details",
    "type": "Orders.details[]",
    "children": [
      {
        "name": "orderId",
        "type": "integer"
      },
      {
        "name": "productId",
        "type": "integer"
      },
      {
        "name": "unitPrice",
        "type": "decimal"
      },
      {
        "name": "quantity",
        "type": "decimal"
      },
      {
        "name": "LambdaOrmParentId",
        "type": "integer"
      }
    ]
  }
]
```

### Parameters

```sh
curl -X POST "http://localhost:9291/parameters?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.customerId==customerId).include(p=>p.details)"}'
```

Result:

```json
[
  {
    "name": "customerId",
    "type": "string"
  },
  {
    "name": "details",
    "type": "Orders.details",
    "children": [
      {
        "name": "LambdaOrmParentId",
        "type": "any"
      }
    ]
  }
]
```

### Constraints

```sh
curl -X POST "http://localhost:9291/constraints?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.customerId==customerId).include(p=>p.details)"}'
```

Result:

```json
{
  "entity": "Orders",
  "constraints": [],
  "children": [
    {
      "entity": "Orders.details",
      "constraints": []
    }
  ]
}
```

### Plan

```sh
curl -X POST "http://localhost:9291/plan?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.customerId==customerId).include(p=>p.details)"}'
```

Result:

```json
{
  "entity": "Orders",
  "dialect": "PostgreSQL",
  "source": "default",
  "sentence": "SELECT o.OrderID AS \"id\", o.CustomerID AS \"customerId\", o.OrderDate AS \"orderDate\", o.OrderID AS \"__id\" FROM Orders o  WHERE o.CustomerID = $1 ",
  "children": [
    {
      "entity": "Orders.details",
      "dialect": "PostgreSQL",
      "source": "default",
      "sentence": "SELECT o1.OrderID AS \"orderId\", o1.ProductID AS \"productId\", o1.UnitPrice AS \"unitPrice\", o1.Quantity AS \"quantity\", o1.OrderID AS \"LambdaOrmParentId\" FROM \"Order Details\" o1  WHERE  o1.OrderID IN ($1) "
    }
  ]
}
```

### Import

```sh
curl -X POST -H "Content-Type: application/json" -d @data.json http://localhost:9291/stages/default/import
```

### Execute

```sh
curl -X POST "http://localhost:9291/execute?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.customerId==customerId).include(p=>p.details)", "data": "{\"customerId\": \"CENTC\"}" }'
```

Result:

```json
[
  {
    "id": 12,
    "customerId": "CENTC",
    "orderDate": "1996-07-18T00:00:00.000Z",
    "details": [
      {
        "orderId": 12,
        "productId": 21,
        "unitPrice": 8,
        "quantity": 10
      },
      {
        "orderId": 12,
        "productId": 37,
        "unitPrice": 20.8,
        "quantity": 1
      }
    ]
  }
]
```

## Documentation

Full documentation is available in the [Wiki](https://github.com/lambda-orm/lambdaorm-svc/wiki).

## Docker Image

You can access to image at [flaviorita/lambdaorm-svc](https://hub.docker.com/repository/docker/flaviorita/lambdaorm-svc/general)

## Clients

The following clients allow consuming this service

- [Node Client](https://github.com/lambda-orm/lambdaorm-client-node)
- [Kotlin Client](https://github.com/lambda-orm/lambdaorm-client-kotlin)

Soon:

- Python Client
- CSharp Client
- Go Client

## Labs

You can access various labs at [github.com/lambda-orm/lambdaorm-labs](https://github.com/lambda-orm/lambdaorm-labs)
