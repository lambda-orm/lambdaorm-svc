# Queries Endpoints

![query-methods](https://raw.githubusercontent.com/lambda-orm/lambdaorm-svc/HEAD/images/query-methods.png)

## Metadata

Return the metadata of the query.

Request:

```sh
curl -X POST "http://localhost:9291/metadata?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

Response:

```json
{
  "classtype": "Sentence",
  "pos": {
    "ln": 0,
    "col": 35
  },
  "name": "select",
  "children": [
    {
      "classtype": "Sentence",
      "pos": {
        "ln": 0,
        "col": 38
      },
      "name": "select",
      "children": [],
      "type": "any",
      "entity": "Orders.details",
      "columns": [
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
          "name": "discount",
          "type": "decimal"
        },
        {
          "name": "LambdaOrmParentId",
          "type": "integer"
        }
      ],
      "parameters": [
        {
          "name": "LambdaOrmParentId",
          "type": "[integer]"
        }
      ],
      "constraints": [],
      "values": [],
      "defaults": [],
      "clause": "select",
      "alias": "o1"
    }
  ],
  "type": "any",
  "entity": "Orders",
  "columns": [
    {
      "name": "id",
      "type": "integer"
    },
    {
      "name": "customerId",
      "type": "string"
    },
    {
      "name": "employeeId",
      "type": "integer"
    },
    {
      "name": "orderDate",
      "type": "dateTime"
    },
    {
      "name": "requiredDate",
      "type": "date"
    },
    {
      "name": "shippedDate",
      "type": "date"
    },
    {
      "name": "shipViaId",
      "type": "integer"
    },
    {
      "name": "freight",
      "type": "decimal"
    },
    {
      "name": "name",
      "type": "string"
    },
    {
      "name": "address",
      "type": "string"
    },
    {
      "name": "city",
      "type": "string"
    },
    {
      "name": "region",
      "type": "string"
    },
    {
      "name": "postalCode",
      "type": "string"
    },
    {
      "name": "country",
      "type": "string"
    },
    {
      "name": "__id",
      "type": "integer"
    }
  ],
  "parameters": [
    {
      "name": "id",
      "type": "integer"
    }
  ],
  "constraints": [],
  "values": [],
  "defaults": [],
  "clause": "select",
  "alias": "o"
}
```

## Model

Return the model of the query.

Request:

```sh
curl -X POST "http://localhost:9291/model?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

Response:

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
    "name": "employeeId",
    "type": "integer"
  },
  {
    "name": "orderDate",
    "type": "dateTime"
  },
  {
    "name": "requiredDate",
    "type": "date"
  },
  {
    "name": "shippedDate",
    "type": "date"
  },
  {
    "name": "shipViaId",
    "type": "integer"
  },
  {
    "name": "freight",
    "type": "decimal"
  },
  {
    "name": "name",
    "type": "string"
  },
  {
    "name": "address",
    "type": "string"
  },
  {
    "name": "city",
    "type": "string"
  },
  {
    "name": "region",
    "type": "string"
  },
  {
    "name": "postalCode",
    "type": "string"
  },
  {
    "name": "country",
    "type": "string"
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
        "name": "discount",
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

## Parameters

Return the parameters of the query.

Request:

```sh
curl -X POST "http://localhost:9291/parameters?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

Response:

```json
[
  {
    "name": "id",
    "type": "integer"
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

## Constraints

Return the constraints of the query.

Request:

```sh
curl -X POST "http://localhost:9291/constraints?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

Response:

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

## Plan

Return the plan of the query, with the sentences to be executed.

Request:

```sh
curl -X POST "http://localhost:9291/plan?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

Response:

```json
{
  "entity": "Orders",
  "dialect": "MySQL",
  "source": "default",
  "sentence": "SELECT o.OrderID AS id, o.CustomerID AS customerId, o.EmployeeID AS employeeId, o.OrderDate AS orderDate, o.RequiredDate AS requiredDate, o.ShippedDate AS shippedDate, o.ShipVia AS shipViaId, o.Freight AS freight, o.ShipName AS name, o.ShipAddress AS address, o.ShipCity AS city, o.ShipRegion AS region, o.ShipPostalCode AS postalCode, o.ShipCountry AS country, o.OrderID AS `__id` FROM Orders o  WHERE o.OrderID = ? ",
  "children": [
    {
      "entity": "Orders.details",
      "dialect": "MySQL",
      "source": "default",
      "sentence": "SELECT o1.OrderID AS orderId, o1.ProductID AS productId, o1.UnitPrice AS unitPrice, o1.Quantity AS quantity, o1.Discount AS discount, o1.OrderID AS LambdaOrmParentId FROM `Order Details` o1  WHERE  o1.OrderID IN (?) "
    }
  ]
}
```

## Execute

Execute the query.

Request:

```sh
curl -X POST "http://localhost:9291/execute?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.id==id).include(p=>p.details)", "data": "{\"id\": 10248}" }'
```

Response:

```json
[
  {
    "id": 10248,
    "customerId": "VINET",
    "employeeId": 5,
    "orderDate": "1996-07-03T22:00:00.000Z",
    "requiredDate": "1996-07-31T22:00:00.000Z",
    "shippedDate": "1996-07-15T22:00:00.000Z",
    "shipViaId": 3,
    "freight": 32.38,
    "name": "Vins et alcools Chevalier",
    "address": "59 rue de l-Abbaye",
    "city": "Reims",
    "region": null,
    "postalCode": "51100",
    "country": "France",
    "details": [
      {
        "orderId": 10248,
        "productId": 11,
        "unitPrice": 14,
        "quantity": 12,
        "discount": 0
      },
      {
        "orderId": 10248,
        "productId": 42,
        "unitPrice": 9.8,
        "quantity": 10,
        "discount": 0
      },
      {
        "orderId": 10248,
        "productId": 72,
        "unitPrice": 34.8,
        "quantity": 5,
        "discount": 0
      }
    ]
  }
]
```
