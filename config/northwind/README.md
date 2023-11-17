# Northwind lab

## Start

```sh
docker-compose -p lambdaorm-svc up -d
mysql -h 0.0.0.0 -P 3306 -u northwind -pnorthwind northwind < northwind-mysql.sql
```

## Test

**Model:**

```sh
curl -X POST "http://localhost:9291/model?format=beautiful" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

**Parameters:**

```sh
curl -X POST "http://localhost:9291/parameters?format=beautiful" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

**Constraints:**

```sh
curl -X POST "http://localhost:9291/constraints?format=beautifu" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

**Sentence:**

```sh
curl -X POST "http://localhost:9291/sentence?format=beautiful" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

**Execute:**

```sh
curl -X POST "http://localhost:9291/execute?format=beautiful" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)", "data": "{\"id\": 10248}" }'
```

## End

```sh
docker-compose -p lambdaorm-svc down --remove-orphans
docker volume rm lambdaorm-svc_mysql-data
docker volume rm lambdaorm-svc_mysql-log
```
