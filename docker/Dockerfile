# build stage
FROM  docker.io/node:18 AS build

WORKDIR /root
COPY . /root

RUN yarn install 
RUN yarn build

# final stage
FROM  docker.io/node:18

WORKDIR /opt/bot
COPY --from=build /root/build /opt/bot
COPY --from=build /root/.env /opt/bot/.env

CMD node main.js
