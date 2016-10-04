# Docker version 1.9.1, build a34a1d5
# Build image using the latest version of Ubuntu from the Docker Hub Ubuntu repository.
FROM ubuntu:16.04

# Declare the MAINTAINER of the Dockerfile
MAINTAINER Ashwin Hegde <ashwin.hegde3@gmail.com>

# Make sure apt is up to date
RUN apt-get update

# Install nodejs and npm
RUN apt-get install -y nodejs npm

# Create app directory
RUN mkdir -p /usr/nebula
WORKDIR /usr/nebula

# Install app dependencies
COPY package.json /usr/nebula
RUN npm install
RUN npm install -g grunt-cli

RUN grunt build

# Bundle app source
COPY . /usr/nebula

# Your app binds to port 8000 so you'll use the EXPOSE instruction
# to have it mapped by the docker daemon
EXPOSE 8000

# Execute command and start Node.js server
CMD [ "npm", "run", "docker" ]
