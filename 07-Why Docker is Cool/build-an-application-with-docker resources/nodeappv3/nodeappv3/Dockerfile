FROM justindevpro/node:base

COPY index.js /app/index.js
COPY package.json /app/package.json
COPY data.json /app/data.json
WORKDIR /app
RUN npm install

ENTRYPOINT ["node"]
CMD ["index.js"]
