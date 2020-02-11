FROM node:10-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod
# change setup to use shared folder inside the build

FROM nginx
LABEL maintainer="Jan Schulte <j.schulte@52north.org>"
COPY nginx/default.conf /etc/nginx/conf.d
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
