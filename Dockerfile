FROM node:18.18-slim
RUN npm config set loglevel warn
RUN npm config set maxsockets 5 
RUN npm config set progress false 
RUN apt-get update
RUN apt install -y libaio1 unzip wget curl 
RUN wget https://download.oracle.com/otn_software/linux/instantclient/1918000/instantclient-basic-linux.x64-19.18.0.0.0dbru.zip -O instantclient.zip
RUN unzip instantclient.zip
RUN rm instantclient.zip
RUN wget https://download.oracle.com/otn_software/linux/instantclient/1918000/instantclient-sqlplus-linux.x64-19.18.0.0.0dbru.zip -O instantclient-sqlplus.zip
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
# Node
RUN npm install -g npm@10.2.1
RUN npm install -g lambdaorm-cli
# App
WORKDIR /usr/src/app
COPY ./dist .
RUN npm install --omit=dev
VOLUME ["/workspace"]
CMD ["npm","run","start"]
USER 1000
LABEL maintainer="flaviolrita@hotmail.com"