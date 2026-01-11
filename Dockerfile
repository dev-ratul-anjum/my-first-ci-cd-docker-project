FROM node:latest

ENV PORT=3000

WORKDIR /first-docker-project


COPY package*.json ./

RUN npm install -g yarn 

RUN yarn install

COPY . . 

RUN yarn build

CMD ["yarn" , "start"]

