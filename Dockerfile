FROM node:11-alpine

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "."]