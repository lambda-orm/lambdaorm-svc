FROM node:17.4.0-alpine
WORKDIR /usr/src/app
COPY ./dist .
RUN npm install lambdaorm-cli -g
RUN npm install

VOLUME ["./workspace"]

CMD ["node","index"]
USER 1000