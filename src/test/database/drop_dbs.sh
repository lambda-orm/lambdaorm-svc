#!/usr/bin/env bash

docker-compose down --remove-orphans

docker volume rm database_source


echo "INFO: stopped Databases (if it was running)."