FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get install -y software-properties-common python-software-properties
RUN add-apt-repository ppa:chris-lea/redis-server
RUN apt-get -y update
RUN apt-get -y install redis-server

VOLUME ["/var/log/redis"]

EXPOSE 6379
ENTRYPOINT ["redis-server"]
CMD ["--logfile", "/var/log/redis/redis-server.log"]
