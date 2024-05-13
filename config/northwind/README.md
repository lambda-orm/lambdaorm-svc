# Service - Northwind CQRS (Command Query Responsibility Segregation)

## Start

```sh
docker-compose -p lambdaorm-svc up -d
docker exec mysql  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "ALTER DATABASE test CHARACTER SET utf8 COLLATE utf8_general_ci;"
docker exec mysql  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "GRANT ALL ON *.* TO 'test'@'%' with grant option; FLUSH PRIVILEGES;"
docker exec postgres psql -U test -c "CREATE DATABASE insights" -W test
lambdaorm push -e .env -s default
lambdaorm push -e .env -s insights
```

- [kafdrop](http://localhost:19000)

## Execute

Run northwind debug task

Import data to default stage:

```sh
curl -X POST -H "Content-Type: application/json" -d @data.json http://localhost:9291/stages/default/import
```

Execute on default Stage:

```sh
curl -X POST "http://localhost:9291/execute?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.customerId==customerId).include(p=>[p.details.include(p=>p.product.map(p=>p.name)).map(p=>{subTotal:p.quantity*p.unitPrice}),p.customer.map(p=>p.name)]).order(p=>p.orderDate).page(1,1)","data":"{\"customerId\": \"CENTC\"}", "options":"{\"stage\": \"default\"}"}'
```

Execute on CQRS Stage:

```sh
curl -X POST "http://localhost:9291/execute?format=beautiful" -H "Content-Type: application/json" -d '{"query": "Orders.filter(p=>p.customerId==customerId).include(p=>[p.details.include(p=>p.product.map(p=>p.name)).map(p=>{subTotal:p.quantity*p.unitPrice}),p.customer.map(p=>p.name)]).order(p=>p.orderDate).page(1,1)","data":"{\"customerId\": \"CENTC\"}", "options":"{\"stage\": \"cqrs\"}"}'
```

## End

```sh
lambdaorm drop -e .env -s default
lambdaorm drop -e .env -s insights
docker-compose -p lambdaorm-svc down
```

## References

Kill postgres process:

```sh
sudo kill $(sudo lsof -t -i:5432)
```
