# Northwind lab

## Start

```sh
# create database and start service
docker-compose -p lambdaorm-svc up -d
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
sudo rm -rf ./volume
```

## TODO

- resolver el problema de conexión a la base desde otro servicio en el mismo docker file
- agregar nginx y escalar el servicio (tag deploy)
- agregar aquí el laboratorio de pentest

## References

- [network host](https://stackoverflow.com/questions/56582446/how-to-use-host-network-for-docker-compose)
- connection refused
  - [one](https://nayak.io/posts/docker-compose-postgres-and-connection-refused/)
  - [two](https://www.appsloveworld.com/docker/100/2/econnrefused-for-postgres-on-nodejs-with-dockers)
