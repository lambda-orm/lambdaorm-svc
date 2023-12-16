# Service - Northwind CQRS (Command Query Responsibility Segregation)

## Start

```sh
docker-compose -p lambdaorm-lab up -d
docker exec mysql  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "ALTER DATABASE test CHARACTER SET utf8 COLLATE utf8_general_ci;"
docker exec mysql  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "GRANT ALL ON *.* TO 'test'@'%' with grant option; FLUSH PRIVILEGES;"
docker exec postgres psql -U test -c "CREATE DATABASE insights" -W test
lambdaorm sync -e .env -s default
lambdaorm sync -e .env -s insights
```

## Execute

```sh
lambdaorm import -e .env -s default -d ./data.json
```

## End

```sh
lambdaorm drop -e .env -s default
lambdaorm drop -e .env -s insights
docker-compose -p lambdaorm-lab down
```
