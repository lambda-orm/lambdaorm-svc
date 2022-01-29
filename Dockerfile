FROM node:14.18.3-alpine
WORKDIR /usr/src/app
COPY ./dist .
RUN npm install
VOLUME ["/usr/src/app/workspace"]
CMD ["node","index"]
USER 1000