FROM node:19

WORKDIR /app

COPY package*.json .

RUN npm i
RUN npm install -g eslint
COPY . .
