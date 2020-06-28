FROM node:alpine AS build

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production

FROM nginx:alpine

COPY --from=build /build /usr/share/nginx/html/
COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
