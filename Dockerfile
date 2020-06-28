FROM node:current-alpine

EXPOSE 8080

COPY --chown=node ["package.json", "/home/node/app/"]
COPY --chown=node ["src", "/home/node/app/src"]
WORKDIR "/home/node/app"

USER node
RUN npm install --production --quiet

ENTRYPOINT ["npm", "start"]