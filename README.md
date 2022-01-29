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
docker build -t flaviorita/lambdaorm-svc:0.0.5 .
docker push flaviorita/lambdaorm-svc:0.0.5
```

## use image

pull

``` sh
docker pull flaviorita/lambdaorm-svc:0.0.1
```

## docker compose

linux:

``` sh
docker volume create --name workspace --opt type=none --opt device=~/volumes/workspace --opt o=bind
docker-compose up -d
```

windows:

``` sh
docker volume create --name workspace --opt type=none --opt device=C:\volumes\workspace --opt o=bind
docker-compose up -d
```

uninstall

``` sh
docker-compose down --remove-orphans
docker volume rm workspace
```
