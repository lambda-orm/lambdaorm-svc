# Devicenet service

## Only db

Up:

``` sh
docker-compose -f ./docker-compose-win-db.yaml up -d 
```

Down:

``` sh
docker-compose -f ./docker-compose-win-db.yaml down --remove-orphans
```

## Keycloak

```sql
CREATE ROLE keycloak SUPERUSER NOCREATEDB NOCREATEROLE INHERIT LOGIN PASSWORD 'keycloak';
```

- [Authentication](https://www.keycloak.org/docs/latest/server_admin/index.html#_role_scope_mappings)
- [Authorization](https://www-keycloak-org.translate.goog/docs/latest/authorization_services/index.html?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp)
- [tutorial basico](https://www.youtube.com/watch?v=4lAMd2hnU04)
- [tutotial](https://www.youtube.com/watch?v=0TiRsueDmO4)
- [tutorial Authorization](https://www.youtube.com/watch?v=j3uydtrYLSE)
- [public api example](https://medium.com/devops-dudes/securing-node-js-express-rest-apis-with-keycloak-a4946083be51)
- others examples:
  - [nodejs_adapter](https://www.keycloak.org/docs/latest/securing_apps/#_nodejs_adapter)
  - [securing-node-js](https://medium.com/devops-dudes/securing-node-js-express-rest-apis-with-keycloak-a4946083be51)
  - [secure-front-end](https://medium.com/devops-dudes/secure-front-end-react-js-and-back-end-node-js-express-rest-api-with-keycloak-daf159f0a94e)

### Configuration

#### Create Client

- Client ID: lambdaorm
- Root URL: <http://localhost:9291>

- Access Type: confidentional
- Service Accounts Enabled : Check
- Authorization Enabled: Check

Credentials Tab

- Secret : F8Z4Me6gbd0ghiBspmvXpwxfR8b7Yhqf

Roles Tab:

- user
- admin

#### Create Roles

- app-user
- app-admin

#### Create Users

- user
- admin

#### Client Scopes

lambdaorm:execute

#### Run Service and authorize

- Client ID: lambdaorm
- Secret : F8Z4Me6gbd0ghiBspmvXpwxfR8b7Yhqf
- user: user:user
- admin: admin:admin

Error:

```error
Auth ErrorError: Bad Request, error: invalid_scope, description: Invalid scopes: lambdaorm:general lambdaorm:execute
```

## Complete

### Init

init:

```sh
lambdaorm init -w devicenet
cd devicenet
```

Update:

```sh
lambdaorm update
```

Sync:

```sh
lambdaorm sync -e ./.env
```

Up:

``` sh
npm run dist
docker-compose -f ./docker-compose-win.yaml up -d 
```

Test:

- [swagger](http://localhost:9291/docs)
- [metrics](http://localhost:9291/metrics)
- [Prometheus](http://localhost:9090)
- [Grafana](http://localhost:3000)
- Dashboards
  - [NodeJS Application Dashboard](http://localhost:3000/d/PTSqcpJWk/nodejs-application-dashboard)
  - [High Level Application metrics](http://localhost:3000/d/OnjTYJg7k/high-level-application-metrics)
  - [Node Service Level Metrics Dashboard](http://localhost:3000/d/WBxkVyRnz/node-service-level-metrics-dashboard)
  - [NodeJS Request Flow Dashboard](http://localhost:3000/d/2Er5E1R7k/nodejs-request-flow-dashboard)

### End

Down:

``` sh
docker-compose -f ./docker-compose-win.yaml down --remove-orphans
docker rmi devicenet_lambdaorm-api
```

Clear database:

```sh
lambdaorm drop -e ./.env
```

## References

- [Prometheus](https://prometheus.io)
- [Grafana](https://grafana.com/oss/grafana)
- [prom-client](https://www.npmjs.com/package/prom-client)
- [monitoring prometheus-grafana](https://stackabuse.com/nodejs-application-monitoring-with-prometheus-and-grafana)
- [Prometheus client for node.js](https://github.com/siimon/prom-client)
- [Docker Engine](https://docs.docker.com/engine)
- [Docker Compose](https://docs.docker.com/compose)
- [Example](https://github.com/StackAbuse/node-prometheus-grafana)
- [Other example](https://github.com/RisingStack/example-prometheus-nodejs)
- JMeter
  - <https://www.vinsguru.com/jmeter-scaling-out-load-servers-using-docker-compose-in-distributed-load-testing/>
  - <https://hub.docker.com/r/justb4/jmeter>
  -<https://github.com/apolloclark/jmeter/blob/master/docker-compose.yml>

- KeyCloak
  - [docker-compose](https://github.com/keycloak/keycloak-containers/blob/main/docker-compose-examples/keycloak-postgres.yml)

Kill Port:

- [data](https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows)

```sh
netstat -ano | findstr :9291
taskkill /PID 4500 /F
```
