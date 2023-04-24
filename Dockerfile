FROM node:19

WORKDIR /app

COPY package*.json .

RUN npm i --production=false
COPY . .
