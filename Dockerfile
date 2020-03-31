FROM node:carbon
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
EXPOSE 8080
RUN npm run build
