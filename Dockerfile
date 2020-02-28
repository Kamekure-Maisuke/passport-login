# devlopment
FROM mhart/alpine-node:12
ENV HOST 0.0.0.0
WORKDIR /app
COPY package*.json ./
RUN apk update --no-cache && \
    npm ci && \
    rm -rf /var/cache/apk/*
COPY . /app
EXPOSE 3000
CMD [ "npm", "run", "dev"]