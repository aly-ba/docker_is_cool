## What is Docker Swarm?
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-15-1-what_is_docker_swarm

title: What is Docker Swarm?

subtitle: Introduction to Docker

---------------------------------------------------------------------------

CMDs:

  - Local
    + `docker-machine create -d virtualbox node-${0..2}`
    + `docker-machine ssh node-0`
    + `docker swarm init --advertise-addr {ip}`
    + `docker-machine ssh node-{1..2} docker swarm join ...`
    + `docker-machine ssh node-0`
    + `docker service create --replicas 2 --name webserver nginx:alpine`
    + `docker node ls`
    + `docker service ps {name}`
    + `docker node ls`

  - Remote:
    + `export DOTOKEN={digitaloceantoken}`
    + `docker-machine create -d digitalocean --digitalocean-access-token $DOTOKEN node-{0..2}`
    + `docker-machine ssh node-0`
    + `docker swarm init --advertise-addr {nodeip}`
    + Copy the join token command
    + `exit`
    + `docker-machine ssh node-{1..2} {join command}`
    + `docker-machine ssh node-0`
    + `docker swarm `
