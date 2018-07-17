FROM node:6.13.0-alpine
LABEL maintainer="Arnaud Commelin<arnaud.commelin@gmail.com>"

RUN apk add --no-cache git

WORKDIR /opt/app

COPY ./package.json /opt/app/package.json
COPY ./src/ /opt/app/src/

ADD ./scripts/start.sh /start.sh
ADD ./scripts/install-prod.sh /install-prod.sh

RUN /install-prod.sh

CMD /start.sh

EXPOSE 3000
