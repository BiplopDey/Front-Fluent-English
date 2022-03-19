FROM node:16.14-alpine3.14
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

CMD ["sh","-c","npm start && json-server json-db/api.json -p 3001"]