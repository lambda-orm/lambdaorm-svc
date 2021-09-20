#!/usr/bin/env bash

docker-compose up -d

./wait-until-healthy.sh lambda-orm-svc-source

docker exec lambda-orm-svc-source  mysql --host 127.0.0.1 --port 3306 -uroot -proot -e "GRANT ALL ON *.* TO 'test'@'%' with grant option; FLUSH PRIVILEGES;"

echo "INFO: Database instance is ready for tests."