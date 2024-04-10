# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY server/package*.json ./server/
COPY client/package*.json ./client/
COPY package*.json ./
COPY yarn.lock ./

RUN npm install -g yarn
RUN yarn install 

# Bundle app source
COPY . .

EXPOSE 5000
EXPOSE 3000

CMD ["yarn","dev"]