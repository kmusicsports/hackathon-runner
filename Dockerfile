ARG VARIANT=22-bullseye

FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install

USER node
