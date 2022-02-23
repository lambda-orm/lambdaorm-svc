# Devicenet service

## Init

init:

```sh
lambdaorm init -w devicenet
cd devicenet
```

Update:

```sh
lambdaorm update
```

Up database:

``` sh
docker-compose -f ./docker-compose-win.yaml up -d 
```

Sync:

```sh
lambdaorm sync -e ./.env
```

## End

Clear database:

```sh
lambdaorm drop -e ./.env
```

Down database:

``` sh
docker-compose -f ./docker-compose-win.yaml down --remove-orphans
```
