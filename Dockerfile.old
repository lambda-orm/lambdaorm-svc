FROM node:14.18.3-alpine
WORKDIR /usr/src/app
COPY ./dist .
RUN npm install
VOLUME ["/workspace"]
CMD ["npm","run","start"]
# CMD ["node","index"]
USER 1000
LABEL maintainer="flaviolrita@hotmail.com"