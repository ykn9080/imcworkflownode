FROM node:10-alpine

WORKDIR /
COPY package.json .
RUN npm install
COPY . .
# ENV PATH  ./.env
# ENV PATH="$PATH:/.etc.production"
EXPOSE 80
# RUN npm prune --production
CMD npm start
