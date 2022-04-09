# Devicenet service

## Init

init:

```sh
lambdaorm init -w cclp
cd cclp
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

### Oracle

#### Conexion

- port: 1523
- sid: ORCLCDB
- user: system
- password: SYSTEM

#### Error ORA-12541

- [example sqlplus](https://dba.stackexchange.com/questions/13075/how-to-use-sqlplus-to-connect-to-an-oracle-database-located-on-another-host-with)
- [hacer este ejercicio](https://www.dontesta.it/2020/03/15/how-to-setup-docker-container-oracle-database-19c-for-liferay-development-environment/)

```sh
tnsping (DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(HOST="0.0.0.0")(PORT="1523")))(CONNECT_DATA=(SID="ORCLCDB")))


apt-get update && apt-get install -y iputils-ping
ping cclp-svc-lab-oracle

sqlplus system/SYSTEM@ORCLCDB

sqlplus CCLP_PARTIES/CCLP_PARTIES@ORCLCDB@cclp-svc-lab-oracle:1523 ;

sqlplus CCLP_PARTIES/CCLP_PARTIES@ORCLCDB@172.23.0.4:1523 ;

 sqlplus 'CCLP_PARTIES/CCLP_PARTIES@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=cclp-svc-lab-oracle)(Port=1523))(CONNECT_DATA=(SID=ORCLCDB)))'

  sqlplus 'CCLP_PARTIES/CCLP_PARTIES@(DESCRIPTION = (ADDRESS = (PROTOCOL = tcp)(HOST = cclp-svc-lab-oracle)(PORT = 1523)) (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = ORCLCDB)))'

   sqlplus 'CCLP_PARTIES/CCLP_PARTIES@(DESCRIPTION = (ADDRESS = (PROTOCOL = tcp)(HOST = cclp-svc-lab-oracle)(PORT = 1523)) (CONNECT_DATA = (SERVICE_NAME = ORCLCDB)))'


```

#### Create users

```sql
--https://www.discoduroderoer.es/solucion-a-ora-65096-invalid-common-user-or-role-name-en-oracle/
alter session set "_ORACLE_SCRIPT"=true;

create user CCLP_LOCATIONS identified by CCLP_LOCATIONS;
create user CCLP_PARTIES identified by CCLP_PARTIES;
create user CCLP_PARTY_ROLES identified by CCLP_PARTY_ROLES;
create user CCLP_LEDGER_ACCOUNTS identified by CCLP_LEDGER_ACCOUNTS;
create user CCLP_DEBTORS identified by CCLP_DEBTORS;
```

#### Permissions

```sql
GRANT create session,create table,create view,create sequence TO CCLP_LOCATIONS;
GRANT create session,create table,create view,create sequence TO CCLP_PARTIES;
GRANT create session,create table,create view,create sequence TO CCLP_PARTY_ROLES;
GRANT create session,create table,create view,create sequence TO CCLP_LEDGER_ACCOUNTS;
GRANT create session,create table,create view,create sequence TO CCLP_DEBTORS;

ALTER USER CCLP_LOCATIONS quota unlimited on USERS;
ALTER USER CCLP_PARTIES quota unlimited on USERS;
ALTER USER CCLP_PARTY_ROLES quota unlimited on USERS;
ALTER USER CCLP_LEDGER_ACCOUNTS quota unlimited on USERS;
ALTER USER CCLP_DEBTORS quota unlimited on USERS;
```

### Test

- [swagger](http://localhost:9291/docs)
- [metrics](http://localhost:9291/metrics)
- [Prometheus](http://localhost:9090)
- [Grafana](http://localhost:3000)
- Dashboards
  - [NodeJS Application Dashboard](http://localhost:3000/d/PTSqcpJWk/nodejs-application-dashboard)
  - [High Level Application metrics](http://localhost:3000/d/OnjTYJg7k/high-level-application-metrics)
  - [Node Service Level Metrics Dashboard](http://localhost:3000/d/WBxkVyRnz/node-service-level-metrics-dashboard)
  - [NodeJS Request Flow Dashboard](http://localhost:3000/d/2Er5E1R7k/nodejs-request-flow-dashboard)

## End

Down:

``` sh
docker-compose -f ./docker-compose-win.yaml down --remove-orphans
docker rmi cclp_lambdaorm-api
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
