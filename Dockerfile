FROM node:12

RUN apk add --no-cache git make gcc  python \
    python-dev \
    py-pip \
    build-base
RUN mkdir /app
WORKDIR /app

COPY . .
RUN yarn install

RUN yarn build

ENV NODE_ENV=production
EXPOSE 3000
CMD ["yarn", "start:prod"]
