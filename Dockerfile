FROM node:18-alpine AS builder

RUN apk update

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --shamefully-hoist
RUN pnpm run build


FROM node:18-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=builder /app/build/ /app/build/
CMD ["serve", "build --listen 80 --single --no-clipboard"]
EXPOSE 80
