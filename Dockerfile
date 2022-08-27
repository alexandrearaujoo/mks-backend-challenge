FROM node:16 AS builder

WORKDIR /app

COPY ./package.json ./

RUN npm install --force

COPY . .

RUN npm run build

FROM node:16

WORKDIR /app

COPY --from=builder /app ./

USER node

EXPOSE 3000