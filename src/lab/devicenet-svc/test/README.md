# Test

## Keycloak

Up:

``` sh
docker-compose -f ./docker-compose-keycloak up -d 
```

``` sh
docker-compose -f ./docker-compose-keycloak down --remove-orphans
```

## Postgres

Up:

``` sh
docker-compose -f ./docker-compose-db up -d 
```

``` sh
docker-compose -f ./docker-compose-db down --remove-orphans
```

## Postgres Keycloak

Up:

``` sh
docker-compose -f ./docker-compose-db_keycloak up -d 
```

``` sh
docker-compose -f ./docker-compose-db-keycloak down --remove-orphans
```
