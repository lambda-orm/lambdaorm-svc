# Northwind lab

## Start

```sh
docker-compose -p lambdaorm-svc up -d
mysql -h 0.0.0.0 -P 3308 -u northwind -pnorthwind northwind < northwind-mysql.sql
```

## End

```sh
docker-compose -p lambdaorm-svc down --remove-orphans
docker volume rm lambdaorm-svc_mysql-data
docker volume rm lambdaorm-svc_mysql-log
```

## References

- [network host](https://stackoverflow.com/questions/56582446/how-to-use-host-network-for-docker-compose)
- connection refused
  - [one](https://nayak.io/posts/docker-compose-postgres-and-connection-refused/)
  - [two](https://www.appsloveworld.com/docker/100/2/econnrefused-for-postgres-on-nodejs-with-dockers)
