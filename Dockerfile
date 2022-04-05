# FROM node:15.6-buster-slim
# Error: https://stackoverflow.com/questions/66420890/open-api-error-request-should-have-required-property-headers-docker
FROM node:10.18.1-buster-slim

WORKDIR /tmp
RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade && apt-get install -y alien libaio1 && apt-get install -y wget
RUN wget https://yum.oracle.com/repo/OracleLinux/OL7/oracle/instantclient/x86_64/getPackage/oracle-instantclient19.11-basic-19.11.0.0.0-1.x86_64.rpm
RUN alien -i --scripts oracle-instantclient*.rpm
RUN rm -f oracle-instantclient19.11*.rpm && apt-get -y autoremove && apt-get -y clean

WORKDIR /usr/src/app
COPY ./dist .
RUN npm install
VOLUME ["/workspace"]
CMD ["npm","run","start"]
USER 1000
LABEL maintainer="flaviolrita@hotmail.com"


# https://yum.oracle.com/repo/OracleLinux/OL7/oracle/instantclient/x86_64/
# https://blogs.oracle.com/opal/post/dockerfiles-for-node-oracledb-are-easy-and-simple

# FROM node:14.18.3-alpine
# WORKDIR /usr/src/app
# COPY ./dist .
# RUN npm install
# VOLUME ["/workspace"]
# CMD ["npm","run","start"]
# # CMD ["node","index"]
# USER 1000
# LABEL maintainer="flaviolrita@hotmail.com"