FROM node:14-alpine AS builder

RUN apk update
RUN npm install -g pnpm

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html/
EXPOSE 80
