# Northwind lab

## Start

```sh
# create database and start service
docker-compose -p lambdaorm-svc up -d --build
# set utf8 character on MySQL
docker exec lambdaorm-svc-mysql  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "ALTER DATABASE northwind CHARACTER SET utf8 COLLATE utf8_general_ci;"
docker exec lambdaorm-svc-mysql  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "GRANT ALL ON *.* TO 'northwind'@'%' with grant option; FLUSH PRIVILEGES;"
# create tables
lambdaorm sync -w ./workspace -s mySql -e .env
# import data
lambdaorm import -w ./workspace -s mySql  -e .env -d ./data.json
# verify
lambdaorm execute -w ./workspace -s mySql -e .env -q 'Products.having(p => max(p.price) > 100).map(p => ({ category: p.category.name, largestPrice: max(p.price) })).sort(p => desc(p.largestPrice))'
```

## Lab

Execute query for cli

```sh
lambdaorm execute -w ./workspace -s mySql  -e .env -q 'Orders.filter(p => p.id === id).include(p => [p.customer.map(p => p.name), p.details.include(p => p.product.include(p => p.category.map(p => p.name)).map(p => p.name)).map(p => [p.quantity, p.unitPrice])])' -d '{"id": 2 }'
```

## End

```sh
# remove tables
lambdaorm drop -w ./workspace -s mySql -e .env
# stop database and service
docker-compose -p lambdaorm-svc down --remove-orphans
# remove image
docker rmi lambdaorm-svc_lambdaorm-api
# remove volume
sudo rm -rf ./volume
```
