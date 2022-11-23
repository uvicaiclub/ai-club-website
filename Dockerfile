FROM node:14-alpine AS builder

RUN apk update
# RUN apk upgrade -y

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --shamefully-hoist
RUN pnpm run build


#FROM nginx:stable-alpine
#COPY --from=builder /app/build/ /usr/share/nginx/html/
#ENTRYPOINT ["serve -s build -l 80"]
CMD ["serve", "-s build -l 80"]
#CMD ["pnpm", "run", "deploy"]
#CMD "serve -s build -l 80"
#CMD "bash"
EXPOSE 80
