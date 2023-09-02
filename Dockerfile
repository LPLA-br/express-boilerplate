# lpla/nome-aplicacao:1.0
FROM node:19
WORKDIR /usr/src/nome-aplicacao
COPY . .
RUN npm install
EXPOSE 8080
ENTRYPOINT npm start
