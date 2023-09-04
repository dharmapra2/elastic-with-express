# Use a development image for Node.js
FROM node:18

WORKDIR /app

# Install app dependencies
COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

# Use nodemon to start your application
CMD ["nodemon", "index.js"]
