FROM ubuntu:16.04

# make sure apt is up to date
RUN apt-get update

# install nodejs and npm
RUN apt-get install -y nodejs npm

# Create app directory
RUN mkdir -p /usr/nebula
WORKDIR /usr/nebula

# install app dependencies
COPY package.json /usr/nebula
RUN npm install --production

# Bundle app source
COPY . /usr/nebula

# Your app binds to port 8000 so you'll use the EXPOSE instruction
# to have it mapped by the docker daemon
EXPOSE 8000

CMD [ "npm", "start" ]
