FROM node:lts-alpine3.17

WORKDIR /app

COPY package.json ./

RUN npm install

COPY index.js https.key https.crt ./

EXPOSE 8443

CMD ["npm", "run", "start"]
