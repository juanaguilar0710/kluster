# Stage 1, "build-stage"
FROM node:12.11.1 as builder

RUN mkdir /build-folder
COPY package.json /build-folder
COPY package-lock.json /build-folder

WORKDIR /build-folder

##hacer que npm no verifique los certificados ssl
RUN npm config set strict-ssl false

## Storing node modules on a separate layer will prevent unncecesary npm installs at each build
RUN npm install && mkdir /ng-app && mv node_modules /ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in prodduction mode and store the artifacts in dist folder
RUN npm run build-BPAI

# Stage 2, "Setup nginx"
FROM nginx:1.21.4-alpine
RUN apk update && apk fix -u freetype

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
