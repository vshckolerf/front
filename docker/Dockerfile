FROM node:18-alpine as builder
COPY . .
RUN npm ci && npm run build

FROM nginx:1.24-alpine
WORKDIR /app
COPY --from=builder index.html .
COPY --from=builder dist ./dist
COPY --from=builder src ./src
COPY  nginx/default.conf /etc/nginx/conf.d/