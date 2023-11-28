# Schema endpoints

![schema-methods](https://raw.githubusercontent.com/FlavioLionelRita/lambdaorm-svc/HEAD/images/schema-methods.png)

## Version

Returns the version of the schema.

Request:

```sh
curl -X GET "http://localhost:9291/schema/version?format=beautiful"
```

Response

```json
{
  "version": "1.0.0"
}
```

## Schema

Returns the schema complete.

Request:

```sh
curl -X GET "http://localhost:9291/schema?format=beautiful"
```

Response

```json
{
  "version": "1.0.0",
  "domain": {
    "version": "1.0.0",
    "entities": [
      {
        "name": "Categories",
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "name"
        ],
        "properties": [
          {
            "name": "id",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "name",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "description",
            "length": 1000,
            "required": false,
            "type": "string"
          }
        ],
        "required": [],
        "indexes": [],
        "relations": [
          {
            "name": "products",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Products",
            "weak": true,
            "to": "categoryId",
            "target": "category"
          }
        ],
        "dependents": [
          {
            "entity": "Products",
            "relation": {
              "name": "category",
              "from": "categoryId",
              "entity": "Categories",
              "to": "id",
              "target": "products",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false
      },
      {
        "name": "Customers",
        "primaryKey": [
          "id"
        ],
        "indexes": [
          {
            "name": "name",
            "fields": [
              "name"
            ]
          }
        ],
        "properties": [
          {
            "name": "id",
            "length": 5,
            "required": true,
            "type": "string"
          },
          {
            "name": "name",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "contact",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "phone",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "address",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "city",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "region",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "postalCode",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "country",
            "required": false,
            "type": "string",
            "length": 80
          }
        ],
        "uniqueKey": [],
        "required": [],
        "relations": [
          {
            "name": "orders",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Orders",
            "weak": true,
            "to": "customerId",
            "target": "customer"
          }
        ],
        "dependents": [
          {
            "entity": "Orders",
            "relation": {
              "name": "customer",
              "from": "customerId",
              "entity": "Customers",
              "to": "id",
              "target": "orders",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false
      },
      {
        "name": "Employees",
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "lastName",
          "firstName"
        ],
        "properties": [
          {
            "name": "id",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "lastName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "firstName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "title",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "titleOfCourtesy",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "birthDate",
            "type": "dateTime",
            "required": false
          },
          {
            "name": "hireDate",
            "type": "dateTime",
            "required": false
          },
          {
            "name": "phone",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "reportsToId",
            "type": "integer",
            "required": false
          },
          {
            "name": "address",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "city",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "region",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "postalCode",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "country",
            "required": false,
            "type": "string",
            "length": 80
          }
        ],
        "relations": [
          {
            "name": "reportsTo",
            "from": "reportsToId",
            "entity": "Employees",
            "to": "id",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "orders",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Orders",
            "weak": true,
            "to": "employeeId",
            "target": "employee"
          }
        ],
        "required": [],
        "indexes": [],
        "dependents": [
          {
            "entity": "Employees",
            "relation": {
              "name": "reportsTo",
              "from": "reportsToId",
              "entity": "Employees",
              "to": "id",
              "type": "oneToMany",
              "weak": false
            }
          },
          {
            "entity": "Orders",
            "relation": {
              "name": "employee",
              "from": "employeeId",
              "entity": "Employees",
              "to": "id",
              "target": "orders",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false
      },
      {
        "name": "Shippers",
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "name"
        ],
        "properties": [
          {
            "name": "id",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "name",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "phone",
            "length": 20,
            "required": false,
            "type": "string"
          }
        ],
        "required": [],
        "indexes": [],
        "relations": [],
        "dependents": [],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false
      },
      {
        "name": "Suppliers",
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "name"
        ],
        "properties": [
          {
            "name": "id",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "name",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "contact",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "phone",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "homepage",
            "length": 200,
            "required": false,
            "type": "string"
          },
          {
            "name": "address",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "city",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "region",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "postalCode",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "country",
            "required": false,
            "type": "string",
            "length": 80
          }
        ],
        "required": [],
        "indexes": [],
        "relations": [
          {
            "name": "products",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Products",
            "weak": true,
            "to": "supplierId",
            "target": "supplier"
          }
        ],
        "dependents": [
          {
            "entity": "Products",
            "relation": {
              "name": "supplier",
              "from": "supplierId",
              "entity": "Suppliers",
              "to": "id",
              "target": "products",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false
      },
      {
        "name": "Products",
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "name",
          "supplierId"
        ],
        "properties": [
          {
            "name": "id",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "name",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "supplierId",
            "required": true,
            "type": "integer"
          },
          {
            "name": "categoryId",
            "type": "integer",
            "required": false
          },
          {
            "name": "quantity",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "price",
            "type": "decimal",
            "default": 0,
            "required": false
          },
          {
            "name": "inStock",
            "type": "decimal",
            "default": 0,
            "required": false
          },
          {
            "name": "onOrder",
            "type": "decimal",
            "default": 0,
            "required": false
          },
          {
            "name": "reorderLevel",
            "type": "decimal",
            "default": 0,
            "required": false
          },
          {
            "name": "discontinued",
            "type": "boolean",
            "default": false,
            "required": false
          }
        ],
        "relations": [
          {
            "name": "supplier",
            "from": "supplierId",
            "entity": "Suppliers",
            "to": "id",
            "target": "products",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "category",
            "from": "categoryId",
            "entity": "Categories",
            "to": "id",
            "target": "products",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "orderDetails",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Orders.details",
            "weak": true,
            "to": "productId",
            "target": "product"
          }
        ],
        "required": [],
        "indexes": [],
        "dependents": [
          {
            "entity": "Orders.details",
            "relation": {
              "name": "product",
              "from": "productId",
              "entity": "Products",
              "to": "id",
              "target": "orderDetails",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": true,
        "hadViewReadExp": false
      },
      {
        "name": "Orders",
        "primaryKey": [
          "id"
        ],
        "indexes": [
          {
            "name": "orderDate",
            "fields": [
              "orderDate"
            ]
          },
          {
            "name": "shippedDate",
            "fields": [
              "shippedDate"
            ]
          }
        ],
        "properties": [
          {
            "name": "id",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "customerId",
            "required": true,
            "length": 5,
            "type": "string"
          },
          {
            "name": "employeeId",
            "required": true,
            "type": "integer"
          },
          {
            "name": "orderDate",
            "type": "dateTime",
            "required": false
          },
          {
            "name": "requiredDate",
            "type": "date",
            "required": false
          },
          {
            "name": "shippedDate",
            "type": "date",
            "required": false
          },
          {
            "name": "shipViaId",
            "type": "integer",
            "required": false
          },
          {
            "name": "freight",
            "type": "decimal",
            "required": false
          },
          {
            "name": "name",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "address",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "city",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "region",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "postalCode",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "country",
            "required": false,
            "type": "string",
            "length": 80
          }
        ],
        "relations": [
          {
            "name": "customer",
            "from": "customerId",
            "entity": "Customers",
            "to": "id",
            "target": "orders",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "employee",
            "from": "employeeId",
            "entity": "Employees",
            "to": "id",
            "target": "orders",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "details",
            "type": "manyToOne",
            "composite": true,
            "from": "id",
            "entity": "Orders.details",
            "weak": true,
            "to": "orderId",
            "target": "order"
          }
        ],
        "uniqueKey": [],
        "required": [],
        "dependents": [
          {
            "entity": "Orders.details",
            "relation": {
              "name": "order",
              "from": "orderId",
              "entity": "Orders",
              "to": "id",
              "target": "details",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false
      },
      {
        "name": "Orders.details",
        "primaryKey": [
          "orderId",
          "productId"
        ],
        "properties": [
          {
            "name": "orderId",
            "required": true,
            "type": "integer"
          },
          {
            "name": "productId",
            "required": true,
            "type": "integer"
          },
          {
            "name": "unitPrice",
            "type": "decimal",
            "required": false
          },
          {
            "name": "quantity",
            "type": "decimal",
            "required": false
          },
          {
            "name": "discount",
            "type": "decimal",
            "required": false
          }
        ],
        "relations": [
          {
            "name": "order",
            "from": "orderId",
            "entity": "Orders",
            "to": "id",
            "target": "details",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "product",
            "from": "productId",
            "entity": "Products",
            "to": "id",
            "target": "orderDetails",
            "type": "oneToMany",
            "weak": false
          }
        ],
        "uniqueKey": [],
        "required": [],
        "indexes": [],
        "dependents": [],
        "constraints": [],
        "composite": true,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false
      }
    ],
    "enums": []
  }
}
```

## Domain

Returns the domain of schema.

Request:

```sh
curl -X GET "http://localhost:9291/domain?format=beautiful"
```

Response

```json
{
  "version": "1.0.0",
  "entities": [
    {
      "name": "Categories",
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "name"
      ],
      "properties": [
        {
          "name": "id",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "name",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "description",
          "length": 1000,
          "required": false,
          "type": "string"
        }
      ],
      "required": [],
      "indexes": [],
      "relations": [
        {
          "name": "products",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Products",
          "weak": true,
          "to": "categoryId",
          "target": "category"
        }
      ],
      "dependents": [
        {
          "entity": "Products",
          "relation": {
            "name": "category",
            "from": "categoryId",
            "entity": "Categories",
            "to": "id",
            "target": "products",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false
    },
    {
      "name": "Customers",
      "primaryKey": [
        "id"
      ],
      "indexes": [
        {
          "name": "name",
          "fields": [
            "name"
          ]
        }
      ],
      "properties": [
        {
          "name": "id",
          "length": 5,
          "required": true,
          "type": "string"
        },
        {
          "name": "name",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "contact",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "phone",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "address",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "city",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "region",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "postalCode",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "country",
          "required": false,
          "type": "string",
          "length": 80
        }
      ],
      "uniqueKey": [],
      "required": [],
      "relations": [
        {
          "name": "orders",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Orders",
          "weak": true,
          "to": "customerId",
          "target": "customer"
        }
      ],
      "dependents": [
        {
          "entity": "Orders",
          "relation": {
            "name": "customer",
            "from": "customerId",
            "entity": "Customers",
            "to": "id",
            "target": "orders",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false
    },
    {
      "name": "Employees",
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "lastName",
        "firstName"
      ],
      "properties": [
        {
          "name": "id",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "lastName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "firstName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "title",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "titleOfCourtesy",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "birthDate",
          "type": "dateTime",
          "required": false
        },
        {
          "name": "hireDate",
          "type": "dateTime",
          "required": false
        },
        {
          "name": "phone",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "reportsToId",
          "type": "integer",
          "required": false
        },
        {
          "name": "address",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "city",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "region",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "postalCode",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "country",
          "required": false,
          "type": "string",
          "length": 80
        }
      ],
      "relations": [
        {
          "name": "reportsTo",
          "from": "reportsToId",
          "entity": "Employees",
          "to": "id",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "orders",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Orders",
          "weak": true,
          "to": "employeeId",
          "target": "employee"
        }
      ],
      "required": [],
      "indexes": [],
      "dependents": [
        {
          "entity": "Employees",
          "relation": {
            "name": "reportsTo",
            "from": "reportsToId",
            "entity": "Employees",
            "to": "id",
            "type": "oneToMany",
            "weak": false
          }
        },
        {
          "entity": "Orders",
          "relation": {
            "name": "employee",
            "from": "employeeId",
            "entity": "Employees",
            "to": "id",
            "target": "orders",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false
    },
    {
      "name": "Shippers",
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "name"
      ],
      "properties": [
        {
          "name": "id",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "name",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "phone",
          "length": 20,
          "required": false,
          "type": "string"
        }
      ],
      "required": [],
      "indexes": [],
      "relations": [],
      "dependents": [],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false
    },
    {
      "name": "Suppliers",
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "name"
      ],
      "properties": [
        {
          "name": "id",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "name",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "contact",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "phone",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "homepage",
          "length": 200,
          "required": false,
          "type": "string"
        },
        {
          "name": "address",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "city",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "region",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "postalCode",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "country",
          "required": false,
          "type": "string",
          "length": 80
        }
      ],
      "required": [],
      "indexes": [],
      "relations": [
        {
          "name": "products",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Products",
          "weak": true,
          "to": "supplierId",
          "target": "supplier"
        }
      ],
      "dependents": [
        {
          "entity": "Products",
          "relation": {
            "name": "supplier",
            "from": "supplierId",
            "entity": "Suppliers",
            "to": "id",
            "target": "products",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false
    },
    {
      "name": "Products",
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "name",
        "supplierId"
      ],
      "properties": [
        {
          "name": "id",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "name",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "supplierId",
          "required": true,
          "type": "integer"
        },
        {
          "name": "categoryId",
          "type": "integer",
          "required": false
        },
        {
          "name": "quantity",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "price",
          "type": "decimal",
          "default": 0,
          "required": false
        },
        {
          "name": "inStock",
          "type": "decimal",
          "default": 0,
          "required": false
        },
        {
          "name": "onOrder",
          "type": "decimal",
          "default": 0,
          "required": false
        },
        {
          "name": "reorderLevel",
          "type": "decimal",
          "default": 0,
          "required": false
        },
        {
          "name": "discontinued",
          "type": "boolean",
          "default": false,
          "required": false
        }
      ],
      "relations": [
        {
          "name": "supplier",
          "from": "supplierId",
          "entity": "Suppliers",
          "to": "id",
          "target": "products",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "category",
          "from": "categoryId",
          "entity": "Categories",
          "to": "id",
          "target": "products",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "orderDetails",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Orders.details",
          "weak": true,
          "to": "productId",
          "target": "product"
        }
      ],
      "required": [],
      "indexes": [],
      "dependents": [
        {
          "entity": "Orders.details",
          "relation": {
            "name": "product",
            "from": "productId",
            "entity": "Products",
            "to": "id",
            "target": "orderDetails",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": true,
      "hadViewReadExp": false
    },
    {
      "name": "Orders",
      "primaryKey": [
        "id"
      ],
      "indexes": [
        {
          "name": "orderDate",
          "fields": [
            "orderDate"
          ]
        },
        {
          "name": "shippedDate",
          "fields": [
            "shippedDate"
          ]
        }
      ],
      "properties": [
        {
          "name": "id",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "customerId",
          "required": true,
          "length": 5,
          "type": "string"
        },
        {
          "name": "employeeId",
          "required": true,
          "type": "integer"
        },
        {
          "name": "orderDate",
          "type": "dateTime",
          "required": false
        },
        {
          "name": "requiredDate",
          "type": "date",
          "required": false
        },
        {
          "name": "shippedDate",
          "type": "date",
          "required": false
        },
        {
          "name": "shipViaId",
          "type": "integer",
          "required": false
        },
        {
          "name": "freight",
          "type": "decimal",
          "required": false
        },
        {
          "name": "name",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "address",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "city",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "region",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "postalCode",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "country",
          "required": false,
          "type": "string",
          "length": 80
        }
      ],
      "relations": [
        {
          "name": "customer",
          "from": "customerId",
          "entity": "Customers",
          "to": "id",
          "target": "orders",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "employee",
          "from": "employeeId",
          "entity": "Employees",
          "to": "id",
          "target": "orders",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "details",
          "type": "manyToOne",
          "composite": true,
          "from": "id",
          "entity": "Orders.details",
          "weak": true,
          "to": "orderId",
          "target": "order"
        }
      ],
      "uniqueKey": [],
      "required": [],
      "dependents": [
        {
          "entity": "Orders.details",
          "relation": {
            "name": "order",
            "from": "orderId",
            "entity": "Orders",
            "to": "id",
            "target": "details",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false
    },
    {
      "name": "Orders.details",
      "primaryKey": [
        "orderId",
        "productId"
      ],
      "properties": [
        {
          "name": "orderId",
          "required": true,
          "type": "integer"
        },
        {
          "name": "productId",
          "required": true,
          "type": "integer"
        },
        {
          "name": "unitPrice",
          "type": "decimal",
          "required": false
        },
        {
          "name": "quantity",
          "type": "decimal",
          "required": false
        },
        {
          "name": "discount",
          "type": "decimal",
          "required": false
        }
      ],
      "relations": [
        {
          "name": "order",
          "from": "orderId",
          "entity": "Orders",
          "to": "id",
          "target": "details",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "product",
          "from": "productId",
          "entity": "Products",
          "to": "id",
          "target": "orderDetails",
          "type": "oneToMany",
          "weak": false
        }
      ],
      "uniqueKey": [],
      "required": [],
      "indexes": [],
      "dependents": [],
      "constraints": [],
      "composite": true,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false
    }
  ],
  "enums": []
}
```

## Entities

Returns the entities of domain.

Request:

```sh
curl -X GET "http://localhost:9291/entities?format=beautiful"
```

Response

```json
[
  {
    "name": "Categories",
    "primaryKey": [
      "id"
    ],
    "uniqueKey": [
      "name"
    ],
    "properties": [
      {
        "name": "id",
        "type": "integer",
        "required": false,
        "autoIncrement": true
      },
      {
        "name": "name",
        "required": true,
        "type": "string",
        "length": 80
      },
      {
        "name": "description",
        "length": 1000,
        "required": false,
        "type": "string"
      }
    ],
    "required": [],
    "indexes": [],
    "relations": [
      {
        "name": "products",
        "type": "manyToOne",
        "composite": false,
        "from": "id",
        "entity": "Products",
        "weak": true,
        "to": "categoryId",
        "target": "category"
      }
    ],
    "dependents": [
      {
        "entity": "Products",
        "relation": {
          "name": "category",
          "from": "categoryId",
          "entity": "Categories",
          "to": "id",
          "target": "products",
          "type": "oneToMany",
          "weak": false
        }
      }
    ],
    "constraints": [],
    "composite": false,
    "hadReadExps": false,
    "hadWriteExps": false,
    "hadReadValues": false,
    "hadWriteValues": false,
    "hadDefaults": false,
    "hadViewReadExp": false
  },
  {
    "name": "Customers",
    "primaryKey": [
      "id"
    ],
    "indexes": [
      {
        "name": "name",
        "fields": [
          "name"
        ]
      }
    ],
    "properties": [
      {
        "name": "id",
        "length": 5,
        "required": true,
        "type": "string"
      },
      {
        "name": "name",
        "required": true,
        "type": "string",
        "length": 80
      },
      {
        "name": "contact",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "phone",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "address",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "city",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "region",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "postalCode",
        "length": 20,
        "required": false,
        "type": "string"
      },
      {
        "name": "country",
        "required": false,
        "type": "string",
        "length": 80
      }
    ],
    "uniqueKey": [],
    "required": [],
    "relations": [
      {
        "name": "orders",
        "type": "manyToOne",
        "composite": false,
        "from": "id",
        "entity": "Orders",
        "weak": true,
        "to": "customerId",
        "target": "customer"
      }
    ],
    "dependents": [
      {
        "entity": "Orders",
        "relation": {
          "name": "customer",
          "from": "customerId",
          "entity": "Customers",
          "to": "id",
          "target": "orders",
          "type": "oneToMany",
          "weak": false
        }
      }
    ],
    "constraints": [],
    "composite": false,
    "hadReadExps": false,
    "hadWriteExps": false,
    "hadReadValues": false,
    "hadWriteValues": false,
    "hadDefaults": false,
    "hadViewReadExp": false
  },
  {
    "name": "Employees",
    "primaryKey": [
      "id"
    ],
    "uniqueKey": [
      "lastName",
      "firstName"
    ],
    "properties": [
      {
        "name": "id",
        "type": "integer",
        "required": false,
        "autoIncrement": true
      },
      {
        "name": "lastName",
        "required": true,
        "type": "string",
        "length": 80
      },
      {
        "name": "firstName",
        "required": true,
        "type": "string",
        "length": 80
      },
      {
        "name": "title",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "titleOfCourtesy",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "birthDate",
        "type": "dateTime",
        "required": false
      },
      {
        "name": "hireDate",
        "type": "dateTime",
        "required": false
      },
      {
        "name": "phone",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "reportsToId",
        "type": "integer",
        "required": false
      },
      {
        "name": "address",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "city",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "region",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "postalCode",
        "length": 20,
        "required": false,
        "type": "string"
      },
      {
        "name": "country",
        "required": false,
        "type": "string",
        "length": 80
      }
    ],
    "relations": [
      {
        "name": "reportsTo",
        "from": "reportsToId",
        "entity": "Employees",
        "to": "id",
        "type": "oneToMany",
        "weak": false
      },
      {
        "name": "orders",
        "type": "manyToOne",
        "composite": false,
        "from": "id",
        "entity": "Orders",
        "weak": true,
        "to": "employeeId",
        "target": "employee"
      }
    ],
    "required": [],
    "indexes": [],
    "dependents": [
      {
        "entity": "Employees",
        "relation": {
          "name": "reportsTo",
          "from": "reportsToId",
          "entity": "Employees",
          "to": "id",
          "type": "oneToMany",
          "weak": false
        }
      },
      {
        "entity": "Orders",
        "relation": {
          "name": "employee",
          "from": "employeeId",
          "entity": "Employees",
          "to": "id",
          "target": "orders",
          "type": "oneToMany",
          "weak": false
        }
      }
    ],
    "constraints": [],
    "composite": false,
    "hadReadExps": false,
    "hadWriteExps": false,
    "hadReadValues": false,
    "hadWriteValues": false,
    "hadDefaults": false,
    "hadViewReadExp": false
  },
  {
    "name": "Shippers",
    "primaryKey": [
      "id"
    ],
    "uniqueKey": [
      "name"
    ],
    "properties": [
      {
        "name": "id",
        "type": "integer",
        "required": false,
        "autoIncrement": true
      },
      {
        "name": "name",
        "required": true,
        "type": "string",
        "length": 80
      },
      {
        "name": "phone",
        "length": 20,
        "required": false,
        "type": "string"
      }
    ],
    "required": [],
    "indexes": [],
    "relations": [],
    "dependents": [],
    "constraints": [],
    "composite": false,
    "hadReadExps": false,
    "hadWriteExps": false,
    "hadReadValues": false,
    "hadWriteValues": false,
    "hadDefaults": false,
    "hadViewReadExp": false
  },
  {
    "name": "Suppliers",
    "primaryKey": [
      "id"
    ],
    "uniqueKey": [
      "name"
    ],
    "properties": [
      {
        "name": "id",
        "type": "integer",
        "required": false,
        "autoIncrement": true
      },
      {
        "name": "name",
        "required": true,
        "type": "string",
        "length": 80
      },
      {
        "name": "contact",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "phone",
        "length": 20,
        "required": false,
        "type": "string"
      },
      {
        "name": "homepage",
        "length": 200,
        "required": false,
        "type": "string"
      },
      {
        "name": "address",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "city",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "region",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "postalCode",
        "length": 20,
        "required": false,
        "type": "string"
      },
      {
        "name": "country",
        "required": false,
        "type": "string",
        "length": 80
      }
    ],
    "required": [],
    "indexes": [],
    "relations": [
      {
        "name": "products",
        "type": "manyToOne",
        "composite": false,
        "from": "id",
        "entity": "Products",
        "weak": true,
        "to": "supplierId",
        "target": "supplier"
      }
    ],
    "dependents": [
      {
        "entity": "Products",
        "relation": {
          "name": "supplier",
          "from": "supplierId",
          "entity": "Suppliers",
          "to": "id",
          "target": "products",
          "type": "oneToMany",
          "weak": false
        }
      }
    ],
    "constraints": [],
    "composite": false,
    "hadReadExps": false,
    "hadWriteExps": false,
    "hadReadValues": false,
    "hadWriteValues": false,
    "hadDefaults": false,
    "hadViewReadExp": false
  },
  {
    "name": "Products",
    "primaryKey": [
      "id"
    ],
    "uniqueKey": [
      "name",
      "supplierId"
    ],
    "properties": [
      {
        "name": "id",
        "type": "integer",
        "required": false,
        "autoIncrement": true
      },
      {
        "name": "name",
        "required": true,
        "type": "string",
        "length": 80
      },
      {
        "name": "supplierId",
        "required": true,
        "type": "integer"
      },
      {
        "name": "categoryId",
        "type": "integer",
        "required": false
      },
      {
        "name": "quantity",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "price",
        "type": "decimal",
        "default": 0,
        "required": false
      },
      {
        "name": "inStock",
        "type": "decimal",
        "default": 0,
        "required": false
      },
      {
        "name": "onOrder",
        "type": "decimal",
        "default": 0,
        "required": false
      },
      {
        "name": "reorderLevel",
        "type": "decimal",
        "default": 0,
        "required": false
      },
      {
        "name": "discontinued",
        "type": "boolean",
        "default": false,
        "required": false
      }
    ],
    "relations": [
      {
        "name": "supplier",
        "from": "supplierId",
        "entity": "Suppliers",
        "to": "id",
        "target": "products",
        "type": "oneToMany",
        "weak": false
      },
      {
        "name": "category",
        "from": "categoryId",
        "entity": "Categories",
        "to": "id",
        "target": "products",
        "type": "oneToMany",
        "weak": false
      },
      {
        "name": "orderDetails",
        "type": "manyToOne",
        "composite": false,
        "from": "id",
        "entity": "Orders.details",
        "weak": true,
        "to": "productId",
        "target": "product"
      }
    ],
    "required": [],
    "indexes": [],
    "dependents": [
      {
        "entity": "Orders.details",
        "relation": {
          "name": "product",
          "from": "productId",
          "entity": "Products",
          "to": "id",
          "target": "orderDetails",
          "type": "oneToMany",
          "weak": false
        }
      }
    ],
    "constraints": [],
    "composite": false,
    "hadReadExps": false,
    "hadWriteExps": false,
    "hadReadValues": false,
    "hadWriteValues": false,
    "hadDefaults": true,
    "hadViewReadExp": false
  },
  {
    "name": "Orders",
    "primaryKey": [
      "id"
    ],
    "indexes": [
      {
        "name": "orderDate",
        "fields": [
          "orderDate"
        ]
      },
      {
        "name": "shippedDate",
        "fields": [
          "shippedDate"
        ]
      }
    ],
    "properties": [
      {
        "name": "id",
        "type": "integer",
        "required": false,
        "autoIncrement": true
      },
      {
        "name": "customerId",
        "required": true,
        "length": 5,
        "type": "string"
      },
      {
        "name": "employeeId",
        "required": true,
        "type": "integer"
      },
      {
        "name": "orderDate",
        "type": "dateTime",
        "required": false
      },
      {
        "name": "requiredDate",
        "type": "date",
        "required": false
      },
      {
        "name": "shippedDate",
        "type": "date",
        "required": false
      },
      {
        "name": "shipViaId",
        "type": "integer",
        "required": false
      },
      {
        "name": "freight",
        "type": "decimal",
        "required": false
      },
      {
        "name": "name",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "address",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "city",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "region",
        "required": false,
        "type": "string",
        "length": 80
      },
      {
        "name": "postalCode",
        "length": 20,
        "required": false,
        "type": "string"
      },
      {
        "name": "country",
        "required": false,
        "type": "string",
        "length": 80
      }
    ],
    "relations": [
      {
        "name": "customer",
        "from": "customerId",
        "entity": "Customers",
        "to": "id",
        "target": "orders",
        "type": "oneToMany",
        "weak": false
      },
      {
        "name": "employee",
        "from": "employeeId",
        "entity": "Employees",
        "to": "id",
        "target": "orders",
        "type": "oneToMany",
        "weak": false
      },
      {
        "name": "details",
        "type": "manyToOne",
        "composite": true,
        "from": "id",
        "entity": "Orders.details",
        "weak": true,
        "to": "orderId",
        "target": "order"
      }
    ],
    "uniqueKey": [],
    "required": [],
    "dependents": [
      {
        "entity": "Orders.details",
        "relation": {
          "name": "order",
          "from": "orderId",
          "entity": "Orders",
          "to": "id",
          "target": "details",
          "type": "oneToMany",
          "weak": false
        }
      }
    ],
    "constraints": [],
    "composite": false,
    "hadReadExps": false,
    "hadWriteExps": false,
    "hadReadValues": false,
    "hadWriteValues": false,
    "hadDefaults": false,
    "hadViewReadExp": false
  },
  {
    "name": "Orders.details",
    "primaryKey": [
      "orderId",
      "productId"
    ],
    "properties": [
      {
        "name": "orderId",
        "required": true,
        "type": "integer"
      },
      {
        "name": "productId",
        "required": true,
        "type": "integer"
      },
      {
        "name": "unitPrice",
        "type": "decimal",
        "required": false
      },
      {
        "name": "quantity",
        "type": "decimal",
        "required": false
      },
      {
        "name": "discount",
        "type": "decimal",
        "required": false
      }
    ],
    "relations": [
      {
        "name": "order",
        "from": "orderId",
        "entity": "Orders",
        "to": "id",
        "target": "details",
        "type": "oneToMany",
        "weak": false
      },
      {
        "name": "product",
        "from": "productId",
        "entity": "Products",
        "to": "id",
        "target": "orderDetails",
        "type": "oneToMany",
        "weak": false
      }
    ],
    "uniqueKey": [],
    "required": [],
    "indexes": [],
    "dependents": [],
    "constraints": [],
    "composite": true,
    "hadReadExps": false,
    "hadWriteExps": false,
    "hadReadValues": false,
    "hadWriteValues": false,
    "hadDefaults": false,
    "hadViewReadExp": false
  }
]
```

## Entity

Returns one entity.

Request:

```sh
curl -X GET "http://localhost:9291/entities/Categories?format=beautiful"
```

Response

```json
{
  "name": "Categories",
  "primaryKey": [
    "id"
  ],
  "uniqueKey": [
    "name"
  ],
  "properties": [
    {
      "name": "id",
      "type": "integer",
      "required": false,
      "autoIncrement": true
    },
    {
      "name": "name",
      "required": true,
      "type": "string",
      "length": 80
    },
    {
      "name": "description",
      "length": 1000,
      "required": false,
      "type": "string"
    }
  ],
  "required": [],
  "indexes": [],
  "relations": [
    {
      "name": "products",
      "type": "manyToOne",
      "composite": false,
      "from": "id",
      "entity": "Products",
      "weak": true,
      "to": "categoryId",
      "target": "category"
    }
  ],
  "dependents": [
    {
      "entity": "Products",
      "relation": {
        "name": "category",
        "from": "categoryId",
        "entity": "Categories",
        "to": "id",
        "target": "products",
        "type": "oneToMany",
        "weak": false
      }
    }
  ],
  "constraints": [],
  "composite": false,
  "hadReadExps": false,
  "hadWriteExps": false,
  "hadReadValues": false,
  "hadWriteValues": false,
  "hadDefaults": false,
  "hadViewReadExp": false
}
```

## Enums

Return the enums of domain.

Request:

```sh
curl -X GET "http://localhost:9291/enums?format=beautiful"
```

Response

```json
[]
```

## Enum

Return one enum.

Request:

```sh
curl -X GET "http://localhost:9291/enums/Color?format=beautiful"
```

## Datasources

Return the datasources.

Request:

```sh
curl -X GET "http://localhost:9291/datasources?format=beautiful"
```

Response

```json
[
  {
    "name": "default",
    "dialect": "MySQL"
  }
]
```

## Datasource

Return one datasource.

Request:

```sh
curl -X GET "http://localhost:9291/datasources/default?format=beautiful"
```

Response

```json
[
  {
    "name": "default",
    "dialect": "MySQL"
  }
]
```

## Mappings

Return the mappings of schema.

Request:

```sh
curl -X GET "http://localhost:9291/mappings?format=beautiful"
```

Response

```json
[
  {
    "name": "default",
    "entities": [
      {
        "name": "Categories",
        "mapping": "Categories",
        "properties": [
          {
            "name": "id",
            "mapping": "CategoryID",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "name",
            "mapping": "CategoryName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "description",
            "mapping": "Description",
            "length": 1000,
            "required": false,
            "type": "string"
          }
        ],
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "name"
        ],
        "required": [],
        "indexes": [],
        "relations": [
          {
            "name": "products",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Products",
            "weak": true,
            "to": "categoryId",
            "target": "category"
          }
        ],
        "dependents": [
          {
            "entity": "Products",
            "relation": {
              "name": "category",
              "from": "categoryId",
              "entity": "Categories",
              "to": "id",
              "target": "products",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false,
        "hadKeys": false
      },
      {
        "name": "Customers",
        "mapping": "Customers",
        "properties": [
          {
            "name": "id",
            "mapping": "CustomerID",
            "length": 5,
            "required": true,
            "type": "string"
          },
          {
            "name": "name",
            "mapping": "CompanyName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "contact",
            "mapping": "ContactName",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "phone",
            "mapping": "ContactTitle",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "address",
            "mapping": "Address",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "city",
            "mapping": "City",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "region",
            "mapping": "Region",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "postalCode",
            "mapping": "PostalCode",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "country",
            "mapping": "Country",
            "required": false,
            "type": "string",
            "length": 80
          }
        ],
        "primaryKey": [
          "id"
        ],
        "indexes": [
          {
            "name": "name",
            "fields": [
              "name"
            ]
          }
        ],
        "uniqueKey": [],
        "required": [],
        "relations": [
          {
            "name": "orders",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Orders",
            "weak": true,
            "to": "customerId",
            "target": "customer"
          }
        ],
        "dependents": [
          {
            "entity": "Orders",
            "relation": {
              "name": "customer",
              "from": "customerId",
              "entity": "Customers",
              "to": "id",
              "target": "orders",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false,
        "hadKeys": false
      },
      {
        "name": "Employees",
        "mapping": "Employees",
        "properties": [
          {
            "name": "id",
            "mapping": "EmployeeID",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "lastName",
            "mapping": "LastName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "firstName",
            "mapping": "FirstName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "title",
            "mapping": "Title",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "titleOfCourtesy",
            "mapping": "TitleOfCourtesy",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "birthDate",
            "mapping": "BirthDate",
            "type": "dateTime",
            "required": false
          },
          {
            "name": "hireDate",
            "mapping": "HireDate",
            "type": "dateTime",
            "required": false
          },
          {
            "name": "phone",
            "mapping": "HomePhone",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "reportsToId",
            "mapping": "ReportsTo",
            "type": "integer",
            "required": false
          },
          {
            "name": "address",
            "mapping": "Address",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "city",
            "mapping": "City",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "region",
            "mapping": "Region",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "postalCode",
            "mapping": "PostalCode",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "country",
            "mapping": "Country",
            "required": false,
            "type": "string",
            "length": 80
          }
        ],
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "lastName",
          "firstName"
        ],
        "relations": [
          {
            "name": "reportsTo",
            "from": "reportsToId",
            "entity": "Employees",
            "to": "id",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "orders",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Orders",
            "weak": true,
            "to": "employeeId",
            "target": "employee"
          }
        ],
        "required": [],
        "indexes": [],
        "dependents": [
          {
            "entity": "Employees",
            "relation": {
              "name": "reportsTo",
              "from": "reportsToId",
              "entity": "Employees",
              "to": "id",
              "type": "oneToMany",
              "weak": false
            }
          },
          {
            "entity": "Orders",
            "relation": {
              "name": "employee",
              "from": "employeeId",
              "entity": "Employees",
              "to": "id",
              "target": "orders",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false,
        "hadKeys": false
      },
      {
        "name": "Shippers",
        "mapping": "Shippers",
        "properties": [
          {
            "name": "id",
            "mapping": "ShipperID",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "name",
            "mapping": "CompanyName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "phone",
            "mapping": "Phone",
            "length": 20,
            "required": false,
            "type": "string"
          }
        ],
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "name"
        ],
        "required": [],
        "indexes": [],
        "relations": [],
        "dependents": [],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false,
        "hadKeys": false
      },
      {
        "name": "Suppliers",
        "mapping": "Suppliers",
        "properties": [
          {
            "name": "id",
            "mapping": "SupplierID",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "name",
            "mapping": "CompanyName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "contact",
            "mapping": "ContactName",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "phone",
            "mapping": "Phone",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "homepage",
            "mapping": "HomePage",
            "length": 200,
            "required": false,
            "type": "string"
          },
          {
            "name": "address",
            "mapping": "Address",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "city",
            "mapping": "City",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "region",
            "mapping": "Region",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "postalCode",
            "mapping": "PostalCode",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "country",
            "mapping": "Country",
            "required": false,
            "type": "string",
            "length": 80
          }
        ],
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "name"
        ],
        "required": [],
        "indexes": [],
        "relations": [
          {
            "name": "products",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Products",
            "weak": true,
            "to": "supplierId",
            "target": "supplier"
          }
        ],
        "dependents": [
          {
            "entity": "Products",
            "relation": {
              "name": "supplier",
              "from": "supplierId",
              "entity": "Suppliers",
              "to": "id",
              "target": "products",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false,
        "hadKeys": false
      },
      {
        "name": "Products",
        "mapping": "Products",
        "properties": [
          {
            "name": "id",
            "mapping": "ProductID",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "name",
            "mapping": "ProductName",
            "required": true,
            "type": "string",
            "length": 80
          },
          {
            "name": "supplierId",
            "mapping": "SupplierID",
            "required": true,
            "type": "integer"
          },
          {
            "name": "categoryId",
            "mapping": "CategoryID",
            "type": "integer",
            "required": false
          },
          {
            "name": "quantity",
            "mapping": "QuantityPerUnit",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "price",
            "mapping": "UnitPrice",
            "type": "decimal",
            "default": 0,
            "required": false
          },
          {
            "name": "inStock",
            "mapping": "UnitsInStock",
            "type": "decimal",
            "default": 0,
            "required": false
          },
          {
            "name": "onOrder",
            "mapping": "UnitsOnOrder",
            "type": "decimal",
            "default": 0,
            "required": false
          },
          {
            "name": "reorderLevel",
            "mapping": "ReorderLevel",
            "type": "decimal",
            "default": 0,
            "required": false
          },
          {
            "name": "discontinued",
            "mapping": "Discontinued",
            "type": "boolean",
            "default": false,
            "required": false
          }
        ],
        "primaryKey": [
          "id"
        ],
        "uniqueKey": [
          "name",
          "supplierId"
        ],
        "relations": [
          {
            "name": "supplier",
            "from": "supplierId",
            "entity": "Suppliers",
            "to": "id",
            "target": "products",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "category",
            "from": "categoryId",
            "entity": "Categories",
            "to": "id",
            "target": "products",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "orderDetails",
            "type": "manyToOne",
            "composite": false,
            "from": "id",
            "entity": "Orders.details",
            "weak": true,
            "to": "productId",
            "target": "product"
          }
        ],
        "required": [],
        "indexes": [],
        "dependents": [
          {
            "entity": "Orders.details",
            "relation": {
              "name": "product",
              "from": "productId",
              "entity": "Products",
              "to": "id",
              "target": "orderDetails",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": true,
        "hadViewReadExp": false,
        "hadKeys": false
      },
      {
        "name": "Orders",
        "mapping": "Orders",
        "properties": [
          {
            "name": "id",
            "mapping": "OrderID",
            "type": "integer",
            "required": false,
            "autoIncrement": true
          },
          {
            "name": "customerId",
            "mapping": "CustomerID",
            "required": true,
            "length": 5,
            "type": "string"
          },
          {
            "name": "employeeId",
            "mapping": "EmployeeID",
            "required": true,
            "type": "integer"
          },
          {
            "name": "orderDate",
            "mapping": "OrderDate",
            "type": "dateTime",
            "required": false
          },
          {
            "name": "requiredDate",
            "mapping": "RequiredDate",
            "type": "date",
            "required": false
          },
          {
            "name": "shippedDate",
            "mapping": "ShippedDate",
            "type": "date",
            "required": false
          },
          {
            "name": "shipViaId",
            "mapping": "ShipVia",
            "type": "integer",
            "required": false
          },
          {
            "name": "freight",
            "mapping": "Freight",
            "type": "decimal",
            "required": false
          },
          {
            "name": "name",
            "mapping": "ShipName",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "address",
            "mapping": "ShipAddress",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "city",
            "mapping": "ShipCity",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "region",
            "mapping": "ShipRegion",
            "required": false,
            "type": "string",
            "length": 80
          },
          {
            "name": "postalCode",
            "mapping": "ShipPostalCode",
            "length": 20,
            "required": false,
            "type": "string"
          },
          {
            "name": "country",
            "mapping": "ShipCountry",
            "required": false,
            "type": "string",
            "length": 80
          }
        ],
        "primaryKey": [
          "id"
        ],
        "indexes": [
          {
            "name": "orderDate",
            "fields": [
              "orderDate"
            ]
          },
          {
            "name": "shippedDate",
            "fields": [
              "shippedDate"
            ]
          }
        ],
        "relations": [
          {
            "name": "customer",
            "from": "customerId",
            "entity": "Customers",
            "to": "id",
            "target": "orders",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "employee",
            "from": "employeeId",
            "entity": "Employees",
            "to": "id",
            "target": "orders",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "details",
            "type": "manyToOne",
            "composite": true,
            "from": "id",
            "entity": "Orders.details",
            "weak": true,
            "to": "orderId",
            "target": "order"
          }
        ],
        "uniqueKey": [],
        "required": [],
        "dependents": [
          {
            "entity": "Orders.details",
            "relation": {
              "name": "order",
              "from": "orderId",
              "entity": "Orders",
              "to": "id",
              "target": "details",
              "type": "oneToMany",
              "weak": false
            }
          }
        ],
        "constraints": [],
        "composite": false,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false,
        "hadKeys": false
      },
      {
        "name": "Orders.details",
        "mapping": "Order Details",
        "properties": [
          {
            "name": "orderId",
            "mapping": "OrderID",
            "required": true,
            "type": "integer"
          },
          {
            "name": "productId",
            "mapping": "ProductID",
            "required": true,
            "type": "integer"
          },
          {
            "name": "unitPrice",
            "mapping": "UnitPrice",
            "type": "decimal",
            "required": false
          },
          {
            "name": "quantity",
            "mapping": "Quantity",
            "type": "decimal",
            "required": false
          },
          {
            "name": "discount",
            "mapping": "Discount",
            "type": "decimal",
            "required": false
          }
        ],
        "primaryKey": [
          "orderId",
          "productId"
        ],
        "relations": [
          {
            "name": "order",
            "from": "orderId",
            "entity": "Orders",
            "to": "id",
            "target": "details",
            "type": "oneToMany",
            "weak": false
          },
          {
            "name": "product",
            "from": "productId",
            "entity": "Products",
            "to": "id",
            "target": "orderDetails",
            "type": "oneToMany",
            "weak": false
          }
        ],
        "uniqueKey": [],
        "required": [],
        "indexes": [],
        "dependents": [],
        "constraints": [],
        "composite": true,
        "hadReadExps": false,
        "hadWriteExps": false,
        "hadReadValues": false,
        "hadWriteValues": false,
        "hadDefaults": false,
        "hadViewReadExp": false,
        "hadKeys": false
      }
    ]
  }
]
```

## Mapping

Return one mapping.

Request:

```sh
curl -X GET "http://localhost:9291/mappings/default?format=beautiful"
```

Response

```json
{
  "name": "default",
  "entities": [
    {
      "name": "Categories",
      "mapping": "Categories",
      "properties": [
        {
          "name": "id",
          "mapping": "CategoryID",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "name",
          "mapping": "CategoryName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "description",
          "mapping": "Description",
          "length": 1000,
          "required": false,
          "type": "string"
        }
      ],
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "name"
      ],
      "required": [],
      "indexes": [],
      "relations": [
        {
          "name": "products",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Products",
          "weak": true,
          "to": "categoryId",
          "target": "category"
        }
      ],
      "dependents": [
        {
          "entity": "Products",
          "relation": {
            "name": "category",
            "from": "categoryId",
            "entity": "Categories",
            "to": "id",
            "target": "products",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false,
      "hadKeys": false
    },
    {
      "name": "Customers",
      "mapping": "Customers",
      "properties": [
        {
          "name": "id",
          "mapping": "CustomerID",
          "length": 5,
          "required": true,
          "type": "string"
        },
        {
          "name": "name",
          "mapping": "CompanyName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "contact",
          "mapping": "ContactName",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "phone",
          "mapping": "ContactTitle",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "address",
          "mapping": "Address",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "city",
          "mapping": "City",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "region",
          "mapping": "Region",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "postalCode",
          "mapping": "PostalCode",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "country",
          "mapping": "Country",
          "required": false,
          "type": "string",
          "length": 80
        }
      ],
      "primaryKey": [
        "id"
      ],
      "indexes": [
        {
          "name": "name",
          "fields": [
            "name"
          ]
        }
      ],
      "uniqueKey": [],
      "required": [],
      "relations": [
        {
          "name": "orders",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Orders",
          "weak": true,
          "to": "customerId",
          "target": "customer"
        }
      ],
      "dependents": [
        {
          "entity": "Orders",
          "relation": {
            "name": "customer",
            "from": "customerId",
            "entity": "Customers",
            "to": "id",
            "target": "orders",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false,
      "hadKeys": false
    },
    {
      "name": "Employees",
      "mapping": "Employees",
      "properties": [
        {
          "name": "id",
          "mapping": "EmployeeID",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "lastName",
          "mapping": "LastName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "firstName",
          "mapping": "FirstName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "title",
          "mapping": "Title",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "titleOfCourtesy",
          "mapping": "TitleOfCourtesy",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "birthDate",
          "mapping": "BirthDate",
          "type": "dateTime",
          "required": false
        },
        {
          "name": "hireDate",
          "mapping": "HireDate",
          "type": "dateTime",
          "required": false
        },
        {
          "name": "phone",
          "mapping": "HomePhone",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "reportsToId",
          "mapping": "ReportsTo",
          "type": "integer",
          "required": false
        },
        {
          "name": "address",
          "mapping": "Address",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "city",
          "mapping": "City",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "region",
          "mapping": "Region",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "postalCode",
          "mapping": "PostalCode",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "country",
          "mapping": "Country",
          "required": false,
          "type": "string",
          "length": 80
        }
      ],
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "lastName",
        "firstName"
      ],
      "relations": [
        {
          "name": "reportsTo",
          "from": "reportsToId",
          "entity": "Employees",
          "to": "id",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "orders",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Orders",
          "weak": true,
          "to": "employeeId",
          "target": "employee"
        }
      ],
      "required": [],
      "indexes": [],
      "dependents": [
        {
          "entity": "Employees",
          "relation": {
            "name": "reportsTo",
            "from": "reportsToId",
            "entity": "Employees",
            "to": "id",
            "type": "oneToMany",
            "weak": false
          }
        },
        {
          "entity": "Orders",
          "relation": {
            "name": "employee",
            "from": "employeeId",
            "entity": "Employees",
            "to": "id",
            "target": "orders",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false,
      "hadKeys": false
    },
    {
      "name": "Shippers",
      "mapping": "Shippers",
      "properties": [
        {
          "name": "id",
          "mapping": "ShipperID",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "name",
          "mapping": "CompanyName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "phone",
          "mapping": "Phone",
          "length": 20,
          "required": false,
          "type": "string"
        }
      ],
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "name"
      ],
      "required": [],
      "indexes": [],
      "relations": [],
      "dependents": [],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false,
      "hadKeys": false
    },
    {
      "name": "Suppliers",
      "mapping": "Suppliers",
      "properties": [
        {
          "name": "id",
          "mapping": "SupplierID",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "name",
          "mapping": "CompanyName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "contact",
          "mapping": "ContactName",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "phone",
          "mapping": "Phone",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "homepage",
          "mapping": "HomePage",
          "length": 200,
          "required": false,
          "type": "string"
        },
        {
          "name": "address",
          "mapping": "Address",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "city",
          "mapping": "City",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "region",
          "mapping": "Region",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "postalCode",
          "mapping": "PostalCode",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "country",
          "mapping": "Country",
          "required": false,
          "type": "string",
          "length": 80
        }
      ],
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "name"
      ],
      "required": [],
      "indexes": [],
      "relations": [
        {
          "name": "products",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Products",
          "weak": true,
          "to": "supplierId",
          "target": "supplier"
        }
      ],
      "dependents": [
        {
          "entity": "Products",
          "relation": {
            "name": "supplier",
            "from": "supplierId",
            "entity": "Suppliers",
            "to": "id",
            "target": "products",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false,
      "hadKeys": false
    },
    {
      "name": "Products",
      "mapping": "Products",
      "properties": [
        {
          "name": "id",
          "mapping": "ProductID",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "name",
          "mapping": "ProductName",
          "required": true,
          "type": "string",
          "length": 80
        },
        {
          "name": "supplierId",
          "mapping": "SupplierID",
          "required": true,
          "type": "integer"
        },
        {
          "name": "categoryId",
          "mapping": "CategoryID",
          "type": "integer",
          "required": false
        },
        {
          "name": "quantity",
          "mapping": "QuantityPerUnit",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "price",
          "mapping": "UnitPrice",
          "type": "decimal",
          "default": 0,
          "required": false
        },
        {
          "name": "inStock",
          "mapping": "UnitsInStock",
          "type": "decimal",
          "default": 0,
          "required": false
        },
        {
          "name": "onOrder",
          "mapping": "UnitsOnOrder",
          "type": "decimal",
          "default": 0,
          "required": false
        },
        {
          "name": "reorderLevel",
          "mapping": "ReorderLevel",
          "type": "decimal",
          "default": 0,
          "required": false
        },
        {
          "name": "discontinued",
          "mapping": "Discontinued",
          "type": "boolean",
          "default": false,
          "required": false
        }
      ],
      "primaryKey": [
        "id"
      ],
      "uniqueKey": [
        "name",
        "supplierId"
      ],
      "relations": [
        {
          "name": "supplier",
          "from": "supplierId",
          "entity": "Suppliers",
          "to": "id",
          "target": "products",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "category",
          "from": "categoryId",
          "entity": "Categories",
          "to": "id",
          "target": "products",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "orderDetails",
          "type": "manyToOne",
          "composite": false,
          "from": "id",
          "entity": "Orders.details",
          "weak": true,
          "to": "productId",
          "target": "product"
        }
      ],
      "required": [],
      "indexes": [],
      "dependents": [
        {
          "entity": "Orders.details",
          "relation": {
            "name": "product",
            "from": "productId",
            "entity": "Products",
            "to": "id",
            "target": "orderDetails",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": true,
      "hadViewReadExp": false,
      "hadKeys": false
    },
    {
      "name": "Orders",
      "mapping": "Orders",
      "properties": [
        {
          "name": "id",
          "mapping": "OrderID",
          "type": "integer",
          "required": false,
          "autoIncrement": true
        },
        {
          "name": "customerId",
          "mapping": "CustomerID",
          "required": true,
          "length": 5,
          "type": "string"
        },
        {
          "name": "employeeId",
          "mapping": "EmployeeID",
          "required": true,
          "type": "integer"
        },
        {
          "name": "orderDate",
          "mapping": "OrderDate",
          "type": "dateTime",
          "required": false
        },
        {
          "name": "requiredDate",
          "mapping": "RequiredDate",
          "type": "date",
          "required": false
        },
        {
          "name": "shippedDate",
          "mapping": "ShippedDate",
          "type": "date",
          "required": false
        },
        {
          "name": "shipViaId",
          "mapping": "ShipVia",
          "type": "integer",
          "required": false
        },
        {
          "name": "freight",
          "mapping": "Freight",
          "type": "decimal",
          "required": false
        },
        {
          "name": "name",
          "mapping": "ShipName",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "address",
          "mapping": "ShipAddress",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "city",
          "mapping": "ShipCity",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "region",
          "mapping": "ShipRegion",
          "required": false,
          "type": "string",
          "length": 80
        },
        {
          "name": "postalCode",
          "mapping": "ShipPostalCode",
          "length": 20,
          "required": false,
          "type": "string"
        },
        {
          "name": "country",
          "mapping": "ShipCountry",
          "required": false,
          "type": "string",
          "length": 80
        }
      ],
      "primaryKey": [
        "id"
      ],
      "indexes": [
        {
          "name": "orderDate",
          "fields": [
            "orderDate"
          ]
        },
        {
          "name": "shippedDate",
          "fields": [
            "shippedDate"
          ]
        }
      ],
      "relations": [
        {
          "name": "customer",
          "from": "customerId",
          "entity": "Customers",
          "to": "id",
          "target": "orders",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "employee",
          "from": "employeeId",
          "entity": "Employees",
          "to": "id",
          "target": "orders",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "details",
          "type": "manyToOne",
          "composite": true,
          "from": "id",
          "entity": "Orders.details",
          "weak": true,
          "to": "orderId",
          "target": "order"
        }
      ],
      "uniqueKey": [],
      "required": [],
      "dependents": [
        {
          "entity": "Orders.details",
          "relation": {
            "name": "order",
            "from": "orderId",
            "entity": "Orders",
            "to": "id",
            "target": "details",
            "type": "oneToMany",
            "weak": false
          }
        }
      ],
      "constraints": [],
      "composite": false,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false,
      "hadKeys": false
    },
    {
      "name": "Orders.details",
      "mapping": "Order Details",
      "properties": [
        {
          "name": "orderId",
          "mapping": "OrderID",
          "required": true,
          "type": "integer"
        },
        {
          "name": "productId",
          "mapping": "ProductID",
          "required": true,
          "type": "integer"
        },
        {
          "name": "unitPrice",
          "mapping": "UnitPrice",
          "type": "decimal",
          "required": false
        },
        {
          "name": "quantity",
          "mapping": "Quantity",
          "type": "decimal",
          "required": false
        },
        {
          "name": "discount",
          "mapping": "Discount",
          "type": "decimal",
          "required": false
        }
      ],
      "primaryKey": [
        "orderId",
        "productId"
      ],
      "relations": [
        {
          "name": "order",
          "from": "orderId",
          "entity": "Orders",
          "to": "id",
          "target": "details",
          "type": "oneToMany",
          "weak": false
        },
        {
          "name": "product",
          "from": "productId",
          "entity": "Products",
          "to": "id",
          "target": "orderDetails",
          "type": "oneToMany",
          "weak": false
        }
      ],
      "uniqueKey": [],
      "required": [],
      "indexes": [],
      "dependents": [],
      "constraints": [],
      "composite": true,
      "hadReadExps": false,
      "hadWriteExps": false,
      "hadReadValues": false,
      "hadWriteValues": false,
      "hadDefaults": false,
      "hadViewReadExp": false,
      "hadKeys": false
    }
  ]
}
```

## Entity Mapping

Return one entity mapping.

Request:

```sh
curl -X GET "http://localhost:9291/mappings/default/Categories?format=beautiful"
```

Response

```json
{
  "name": "Categories",
  "mapping": "Categories",
  "properties": [
    {
      "name": "id",
      "mapping": "CategoryID",
      "type": "integer",
      "required": false,
      "autoIncrement": true
    },
    {
      "name": "name",
      "mapping": "CategoryName",
      "required": true,
      "type": "string",
      "length": 80
    },
    {
      "name": "description",
      "mapping": "Description",
      "length": 1000,
      "required": false,
      "type": "string"
    }
  ],
  "primaryKey": [
    "id"
  ],
  "uniqueKey": [
    "name"
  ],
  "required": [],
  "indexes": [],
  "relations": [
    {
      "name": "products",
      "type": "manyToOne",
      "composite": false,
      "from": "id",
      "entity": "Products",
      "weak": true,
      "to": "categoryId",
      "target": "category"
    }
  ],
  "dependents": [
    {
      "entity": "Products",
      "relation": {
        "name": "category",
        "from": "categoryId",
        "entity": "Categories",
        "to": "id",
        "target": "products",
        "type": "oneToMany",
        "weak": false
      }
    }
  ],
  "constraints": [],
  "composite": false,
  "hadReadExps": false,
  "hadWriteExps": false,
  "hadReadValues": false,
  "hadWriteValues": false,
  "hadDefaults": false,
  "hadViewReadExp": false,
  "hadKeys": false
}
```

## Views

Return all views.

Request:

```sh
curl -X GET "http://localhost:9291/views?format=beautiful"
```

Response

```json
[
  "default"
]
```

## Stages

Return all stages.

Request:

```sh
curl -X GET "http://localhost:9291/stages?format=beautiful"
```

Response

```json
[
  {
    "name": "default",
    "sources": [
      {
        "name": "default"
      }
    ]
  }
]
```

## Stage

Return one stage.

Request:

```sh
curl -X GET "http://localhost:9291/stages/default?format=beautiful"
```

Response

```json
{
  "name": "default",
  "sources": [
    {
      "name": "default"
    }
  ]
}
```
