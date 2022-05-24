FROM node:latest

WORKDIR /usr/src

COPY . .

EXPOSE 5000

RUN npm i
RUN npx prisma generate
RUN npx prisma migrate dev

RUN apt-get update && apt-get install -y wget

# RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \     && ln -s /usr/local/bin/docker-entrypoint.sh /
# ENV DOCKERIZE_VERSION v0.6.1
# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#   && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#   && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz