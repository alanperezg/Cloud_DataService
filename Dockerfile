FROM node:15.0.1-alpine3.10
ARG TZ=America/Mexico_City
RUN apk --update add tzdata && cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && apk del tzdata
WORKDIR /home/node/app/
COPY . /home/node/app/
RUN npm install
USER node
ENTRYPOINT node index.js