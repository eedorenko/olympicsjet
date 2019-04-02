FROM flexdeploy/plugin-ojetbuilder:5.0.1 as builder
COPY  . /usr/local/src
WORKDIR /usr/local/src
RUN ojet restore && ojet build web

FROM nginx:1.10.2-alpine
COPY --from=builder /usr/local/src/web /usr/share/nginx/html
EXPOSE 80