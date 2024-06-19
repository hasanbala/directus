FROM node:latest

WORKDIR /app

COPY package.json

RUN yarn

COPY ..

RUN yarn build

RUN yarn start

CMD ["yarn", "start"]