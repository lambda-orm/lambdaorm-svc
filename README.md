# Lambda ORM service

service of lambda ORM

## OpenId

- [openapi generator](https://openapi-generator.tech/)
- [installation](https://openapi-generator.tech/docs/installation)

install openapi-generator:

```sh
npm install @openapitools/openapi-generator-cli -g
```

generate api:

```sh
npx @openapitools/openapi-generator-cli generate -i src/dev/config/lambda-svc.yaml -g nodejs-express-server -o src/api
```

## Dev Scripts

start

```sh
npm run start
```

dist

```sh
npm run dist
```

release

```sh
npm run release
```

## Docker

``` sh
docker-compose up -d
```

uninstall

``` sh
docker-compose down --remove-orphans
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

## Kill Port

- [data](https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows)

```sh
netstat -ano | findstr :9291
taskkill /PID 4500 /F
```

## Security

- [kong](https://konghq.com/products/api-gateway-platform)
