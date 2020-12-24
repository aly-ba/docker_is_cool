FROM ubuntu:16.04


RUN apt-get update -y; apt-get install -y curl;

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -; apt-get install -y nodejs

ADD index.js /app/index.js
COPY package.json /app

WORKDIR /app
RUN npm install

ENTRYPOINT ["node"]
CMD ["index.js"]
