FROM node:14-alpine AS builder

RUN apk update
RUN npm install -g pnpm

WORKDIR /app
COPY . .

RUN pnpm install --shamefully-hoist
RUN pnpm build

FROM nginx:stable-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html/
EXPOSE 80
