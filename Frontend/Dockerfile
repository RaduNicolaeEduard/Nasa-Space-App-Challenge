FROM node:latest as build
WORKDIR /usr/local/app
COPY ./SpaceApp /usr/local/app/
RUN npm install
RUN ng build
FROM nginx:latest
COPY --from=build /usr/local/app/dist/SpaceApp /usr/share/nginx/html
EXPOSE 80