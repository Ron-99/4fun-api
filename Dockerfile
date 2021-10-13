FROM node:16-alpine3.14

WORKDIR /usr/app
COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4000
CMD ["yarn", "start:prod"]