# Test

## Keycloak

Up:

``` sh
docker-compose -f ./docker-compose-keycloak.yaml up -d 
```

``` sh
docker-compose -f ./docker-compose-keycloak.yaml down --remove-orphans
```

## Postgres

Up:

``` sh
docker-compose -f ./docker-compose-db.yaml up -d 
```

``` sh
docker-compose -f ./docker-compose-db.yaml down --remove-orphans
```

## Postgres Keycloak

Up:

``` sh
docker-compose -f ./docker-compose-db-keycloak.yaml up -d 
```

``` sh
docker-compose -f ./docker-compose-db-keycloak.yaml down --remove-orphans
```
