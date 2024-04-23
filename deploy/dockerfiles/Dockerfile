FROM node:12.18.3-slim as build

# # install simple http server for serving static content
# RUN npm install -g http-server

# # make the 'app' folder the current working directory
# WORKDIR /app

# # copy both 'package.json' and 'package-lock.json' (if available)
# COPY package*.json ./

# # install project dependencies leaving out dev dependencies
# RUN npm install --production

# # copy project files and folders to the current working directory (i.e. 'app' folder)
# COPY . .

# # build app for production with minification
# RUN npm run build

# EXPOSE 4700
# CMD [ "http-server", "dist" ]


# install git
RUN apt update
RUN apt install -y git

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# add app
COPY . /usr/src/app

# build project
RUN npm run build

# run nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY ./deploy/config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4700
