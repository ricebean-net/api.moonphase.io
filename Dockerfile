FROM node:current-alpine

EXPOSE 8080

COPY --chown=node ["app.js", "package.json", "/home/node/app/"]
WORKDIR "/home/node/app"

USER node
RUN npm install --production --quiet

ENTRYPOINT ["npm", "start"]