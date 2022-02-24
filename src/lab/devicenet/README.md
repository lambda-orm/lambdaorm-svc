# Devicenet service

## Lab Service

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

Up database:

``` sh
docker-compose -f ./docker-compose-win-db.yaml up -d 
```

Sync:

```sh
lambdaorm sync -e ./.env
```

### End

Clear database:

```sh
lambdaorm drop -e ./.env
```

Down database:

``` sh
docker-compose -f ./docker-compose-win-db.yaml down --remove-orphans
```

## Lab Complete

Up:

``` sh
copy lambdaorm.yaml C:\volumes\devicenet\workspace
npm run dist
docker-compose -f ./docker-compose-win.yaml up -d  --force-recreate
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

Down:

``` sh
docker-compose -f ./docker-compose-win.yaml down --remove-orphans
```

## References

- [Prometheus](https://prometheus.io)
- [Grafana](https://grafana.com/oss/grafana)
- [Prometheus client for node.js](https://github.com/siimon/prom-client)
- [Docker Engine](https://docs.docker.com/engine)
- [Docker Compose](https://docs.docker.com/compose)
- [Example](https://github.com/StackAbuse/node-prometheus-grafana)
- [Other example](https://github.com/RisingStack/example-prometheus-nodejs)

- Kill Port:
  - [data](https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows)

```sh
netstat -ano | findstr :9291
taskkill /PID 4500 /F
```
