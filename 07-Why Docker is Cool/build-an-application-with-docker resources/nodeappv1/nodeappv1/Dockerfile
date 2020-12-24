FROM ubuntu:16.04

RUN apt-get update -y;
RUN apt-get install curl -y;
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -;
RUN apt-get install nodejs -y;

COPY index.js /app/index.js
WORKDIR /app
CMD ["node", "index.js"]
