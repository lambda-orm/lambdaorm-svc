# Northwind lab

## Install

```sh
docker-compose -p "lambdaorm-svc" up -d
```

On docker service:

```sh
docker exec -it lambdaorm-svc-api /bin/bash
# install lambdaorm cli
npm install lambdaorm-cli -g
# verify cli
lambdaorm --version
# go to workspaces 
cd /workspaces
lambdaorm sync
```
