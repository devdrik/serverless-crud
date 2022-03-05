FROM node:15.5.1-alpine3.12 as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19.6-alpine
RUN apk add --no-cache bash
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
COPY docker-entrypoint.sh generate_config_js.sh /
RUN chmod +x docker-entrypoint.sh generate_config_js.sh
EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]