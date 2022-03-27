FROM node
WORKDIR /usr/src/app/src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3030
CMD [ "node", "index.js" ]
