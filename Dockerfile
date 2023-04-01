FROM node:16.20-slim

# PM2 will be used as PID 1 process
# RUN /bin/bash -c 'npm install -g pm2@4.2.3'

# Install packages
RUN /bin/bash -c 'npm config set loglevel warn \
	# To mitigate issues with npm saturating the network interface we limit the number of concurrent connections
	&& npm config set maxsockets 5 \
	&& npm config set only production \
	&& npm config set progress false'

# Oracle instanclient
RUN apt-get update
RUN apt-get install libaio1 unzip
COPY oracle/instantclient-basic-linux.x64-19.18.0.0.0dbru.zip instantclient.zip
RUN unzip instantclient.zip
RUN rm instantclient.zip

COPY oracle/instantclient-sqlplus-linux.x64-19.18.0.0.0dbru.zip instantclient-sqlplus.zip
RUN unzip instantclient-sqlplus.zip
RUN rm instantclient-sqlplus.zip

RUN mkdir -p /opt/oracle
RUN mv instantclient_19_18 /opt/oracle

ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_19_18:$LD_LIBRARY_PATH \
	PATH=/opt/oracle/instantclient_19_18:$PATH

RUN /bin/bash -c 'echo "node version" && node --version'
RUN /bin/bash -c 'cat /etc/os-release'

# Cleaning up:
RUN apt-get purge unzip -y
RUN apt-get autoremove -y
RUN apt-get clean

WORKDIR /usr/src/app
COPY ./dist .
RUN npm install
VOLUME ["/workspace"]
CMD ["npm","run","start"]
# USER 1000
LABEL maintainer="flaviolrita@hotmail.com"