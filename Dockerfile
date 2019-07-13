FROM node:12-alpine

WORKDIR /app

COPY . $WORKDIR

RUN npm install

CMD [ "npm", "start" ]
