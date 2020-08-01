FROM node:alpine AS build

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --pure-lockfile --ignore-optional --non-interactive && yarn cache clean

COPY . .
RUN yarn test --watchAll=false --silent --passWithNoTests
RUN yarn build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html/
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
