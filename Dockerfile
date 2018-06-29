# Setting Docker image
FROM node:8.9-alpine

# Configuring environment
WORKDIR /usr/src/app

# Copying application files
COPY . ./

# Installing application dependencies
RUN npm install --silent
COPY . ./

# Exposing port
EXPOSE 4000

# Starting application
CMD npm run prod && npm run server:monit