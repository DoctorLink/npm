FROM node as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run bootstrap
RUN npm run docs

FROM nginx as web
WORKDIR /app
COPY --from=build /app/typedoc/docs /usr/share/nginx/html