# Northwind lab

## Start

```sh
docker-compose -p lambdaorm-svc up -d
mysql -h 0.0.0.0 -P 3308 -u northwind -pnorthwind northwind < northwind-mysql.sql
```

## Test

**Model:**

```sh
curl -X POST "http://localhost:9291/api/model?format=beautiful" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

**Parameters:**

```sh
curl -X POST "http://localhost:9291/api/parameters?format=beautiful" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

**Constraints:**

```sh
curl -X POST "http://localhost:9291/api/constraints?format=beautifu" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

**Sentence:**

```sh
curl -X POST "http://localhost:9291/api/sentence?format=beautiful" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)"}'
```

**Execute:**

```sh
curl -X POST "http://localhost:9291/api/execute?format=beautiful" -H "Content-Type: application/json" -d '{"expression": "Orders.filter(p=>p.id==id).include(p=>p.details)", "data": "{\"id\": 10248}" }'
```

## End

```sh
docker-compose -p lambdaorm-svc down --remove-orphans
docker volume rm lambdaorm-svc_mysql-data
docker volume rm lambdaorm-svc_mysql-log
```
