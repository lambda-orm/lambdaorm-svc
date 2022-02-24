# Lambda ORM service

service of lambda orm

## Dev Scripts

build

```sh
npm run build
```

start

```sh
npm run start
```

dist

```sh
npm run dist
```

## publish image

- [repository](https://hub.docker.com/repository/docker/flaviorita/lambdaorm-svc)

```sh
docker login -u flaviorita -p [PASSWORD]
docker build -t flaviorita/lambdaorm-svc:0.0.14 .
docker push flaviorita/lambdaorm-svc:0.0.14
```

## use image

pull

``` sh
docker pull flaviorita/lambdaorm-svc:0.0.14
```

## docker compose

### linux

``` sh
docker-compose up -d
```

uninstall

``` sh
docker-compose down --remove-orphans
```

### windows

``` sh
docker-compose -f ./docker-compose-win.yaml up -d 
```

create user:

```sh
docker exec lambdaorm-svc-mysql  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "CREATE USER IF NOT EXISTS 'test'@'%' IDENTIFIED BY 'test';"
docker exec lambdaorm-svc-mysql  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "GRANT ALL ON *.* TO 'test'@'%' with grant option; FLUSH PRIVILEGES;"
```

uninstall

``` sh
docker-compose -f ./docker-compose-win.yaml down --remove-orphans
```
