# Northwind lab

## Start

```sh
# create database and start service
docker-compose -p lambdaorm-svc up -d --build
# create tables
lambdaorm sync -w ./workspace -e .env
# import data
lambdaorm import -w ./workspace -e .env -d ./data.json
# verify
lambdaorm execute -w ./workspace -e .env -q 'Products.having(p => max(p.price) > 100).map(p => ({ category: p.category.name, largestPrice: max(p.price) })).sort(p => desc(p.largestPrice))'
```

## Lab

Execute query for cli

```sh
lambdaorm execute -w ./workspace -e .env -q 'Orders.filter(p => p.id === id).include(p => [p.customer.map(p => p.name), p.details.include(p => p.product.include(p => p.category.map(p => p.name)).map(p => p.name)).map(p => [p.quantity, p.unitPrice])])' -d '{"id": 2 }'
```

## End

```sh
# remove tables
lambdaorm drop -w ./workspace -e .env
# stop database and service
docker-compose -p lambdaorm-svc down --remove-orphans
# remove image
docker rmi lambdaorm-svc_lambdaorm-api
# remove volume
sudo rm -rf ./volume/postgres-data
```
