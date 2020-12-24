---------------------------------------------------------------------------

## Introduction to Docker

---------------------------------------------------------------------------
===========================================================================
### Scratch Pad:
docker commands:
  - attach
    + allows you to attach to a __running__ container
    + __OPTIONS__
      - --detach-keys
        + override the key sequence for detaching a container
      - --no-stdin [default=false]
        + do not attach to STDIN
      - --sig-proxy [default=true]
        + proxy all received signals to the process
    + __EXAMPLE__

      ```
        docker run  --name long_process ubuntu /bin/bash
        #$ while true; echo "here"; sleep 3; done

        ## in another terminal window talk show attaching
      ```

  - build
  - commit
  - cp
  - create
  - deploy
  - diff
  - events
  - exec
  - export
  - history
  - images
  - import
  - info
  - inspect
  - kill
  - load
  - login
  - logout
  - logs
  - pause
  - port
  - ps
  - pull
    + pull an image or repository from a registry
    + __OPTIONS__
      - --all-tags, -a [default=false]
        + download all tagged images in the repository
      - --disable-content-trust [default=true]
        + skip image verification
    + __EXAMPLE__

      ```
        docker pull ubuntu
        >>...output
        docker pull ubuntu:14.04
        >>...output
        docker pull ubuntu@sha256:62a5dce5ceccd7f1cb2672a571ebee52cad1f08eec9b57fe4965fb0968a9602e
        >> ...output
        docker pull --all-tags ubuntu
        >> ...output
      ```

  - push
  - rename
  - restart
  - rm
  - rmi
  - run
    + run a command in a new container
    + __OPTIONS__
      - --add-host
        + add a custom host-to-ip
      - --attach, -a
        + attach to STDIN, STDOUT, STDERR
      - --blkio-weight [default=0]
        + Block IO(relative weight), between 10 and 1000, or 0 to disable(default)
      -
  - save
  - search
  - start
  - stats
  - stop
  - tag
  - top
  - unpause
  - update
  - version
  - wait
- Management commands
  - checkpoint
  - container
  - image
  - network
  - node
  - plugin
  - secret
  - service
  - stack
  - swarm
  - system
  - volume
===========================================================================

===========================================================================
Docker
===========================================================================
##### Show Template
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

[What is Docker?]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
- What is Docker?
- How did Docker come into being?
- How can Docker help me?
- So is Docker just another virtual machine technology?
- So if Docker is not just another virtual machine technology,
    then what is the advantage of Docker?
- So how does Docker work?
---------------------------------------------------------------------------

[Installing on OSX]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
- Old Ways of Installing
- New Ways of Installing
- Docker for Mac
---------------------------------------------------------------------------

[Installing on Windows]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
- Old Ways of Installing on Windows
- New Ways of Installing on Windows
- Docker for Windows
---------------------------------------------------------------------------

[Installing on Linux]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
- Old Ways of Installing on Linux
- New Ways of Installing on Linux
- What about Docker for Linux?
---------------------------------------------------------------------------

[Running your First Docker Container]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
CMD: `run`, `pull`, `ps`
FLAGS:  `run -d`, `run -p`, `run --name {name}`
- How do I use Docker?
- How do I start containers?
- How do I stop containers?
- So what is the relationship between images and containers?
- Where can I find new images?
- I noticed that some containers hijack the stdout,
    is there anyway that I can overcome that?
- Well, that is great that I can get a container to run in the background,
    but it seems like we have a new problem. How do I know what containers
    are running?
---------------------------------------------------------------------------

[Managing Containers]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
CMD: `kill`, `rename`, `run`, `rm`, `stop`, `start`, `pause`, `top`, `inspect`
      `stats`, `unpause`, `logs`, `container`
FLAGS: `run --rm`, `run --name {name}`, `--restart`
- What are all of these containers on my computer?
- These are very odd names for these containers, is there any way to change that?
  - Well these are definitely interesting, but how can we make these more
    understandable.
- What if I accidentally stop a container?
- What if I want to temporarily stop a container?
- How can I undo these two processes?
- Is there any way for Docker to help me manage the start and stop?
- What are the possible settings that I can have for restarting a container?
---------------------------------------------------------------------------

[Inspecting our Docker Images and Containers]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
CMD: `image`, `attach`, `exec`, `search`
FLAGS: `-i`, `-t`
- What is a Docker image?
- How can I know what images I have available to me? Locally? On the interwebs?
- How can I tell what containers I have available to me locally?
- If I started a container, can I ssh into a container like I can with a virtual
  machine to interact with the operating system?
- That is a little bit of work to interact with a running container, are there
  ways to just run a quick command?
---------------------------------------------------------------------------

[Docker and Data]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

CMD: `create`, `run`

FLAGS: `-v {path}` `-v {yourpath}:{containerpath}`,

- What about data in Docker containers? Is it safe? Are there special
  considerations that I should make?
- How can we have persistent data access with my Docker containers?
- I have now learned that there are sometimes several ways to accomplish the same task in Docker, is there any other way to get data volumes into Docker containers?
- What are the best practices for managing Docker data?
---------------------------------------------------------------------------

[Building our First Docker Image]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
CMD: `build`
FLAGS: `-t {imagename}:{tag}`
- So it seems very weird to have to continue learning all of these Docker
  CLI commands. Is there a way that we can 'save' the state of setup?
  - We can write a Dockerfile that can become a recipe for our own custom
    Docker image.
- So how can I get started with this Dockerfile business?
- That is great, but there is no way to keep track of the built image or
  do I have to memorize that that weird hash value?
- What are the best practices that I should consider when creating an image?
---------------------------------------------------------------------------

[Storing Our Custom Docker Image]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------
CMD: `tag`, `commit`, `push`

FLAGS: `commit -m`, `commit -a`,
- Well, we have learned how to build containers using a Dockerfile, but
  currently that is only on our computer. Is there any way that I can save and
  share this with other people?
- So does DockerHub provide a service for individuals to share Docker images?
- So how does DockerHub work with the docker client?

---------------------------------------------------------------------------

[Building an Application with Docker]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

CMDs:
  + `docker build -t justindevpro/simplenodeapp .`

- So it seems that we have all of the pieces that we need to start using this for building applications, how do we get started?
  - Let's start by analyzing the application that we want to deploy.
  - NodeJS application...
- We have a basic Node application up and running, but I know that Node
  applications can be a great deal more complex than this. What if I wanted
  to write a web server that hosts some API?
- Uh oh! You can't CTRL+C to stop the container. What should we do now?
  - That is another one of those nuanced details. Sometimes everything works as
  you expect. However, other times, there are issues.
  - We have to wire up our application to listen for the kill signals.
- So this is a very simple application. Are there ways to create an application
  involves multiple containers?
  - Great Question! We do have the ability to bring containers together to
    create a system that is our application representation. For instance,
    if I need a database, I could create a database container such as mysql
    or MongoDB, then add a caching layer such as Redis or memcache, with our
    application using those. However, I am not sure that we have enough time at
    current. Maybe we can check that process out next time?
---------------------------------------------------------------------------

[Building Multi-Container Applications with Docker]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

CMDs:
  - Phase One:
    + `docker build -t justindevpro/webapp .`
    + `docker run -d --name redis redis`
    + `docker run -d --name app -p 5000:5000 --link redis:redis justindevpro/webapp`
  - Phase Two:
    + `docker network create webapp`
    + `docker run -d --name redis --net webapp justindevpro/redis`
    + `docker run -d --name app --net webapp justindevpro/webapp`
  - Phase Three:
    + `docker create -v /data/db --name mongo_data mongo`
    + `docker run -d --name mongodb --volumes-from mongo_data mongo`
    + `docker run -p 5000:5000 --name app --net webapp justindevpro/webapp:mongo`

- How do we build an application on with a database or a caching layer?
  - Let's plan a little. We need an application to get up and running.
  - I have written a contrived Python web application for usage so we
  can see the story a little bit.
- So can you take us through what the application is going to do so we get an
  idea of how this is all going to come together?
- So how do we get Redis and our Web application to talk because I thought that
  containers were separate entities?
- So we have the redis and the application containers linked, but are we limited
  to those single links?
- This seems very similar networking and nodes. Is there an alternative way to
  these systems up and running?
  - That is a very astute observation. In fact, in new versions of Docker, you
  should use networking.
- So anything that we need to consider when creating an application that has
  multiple containers?
- What about if we have an order that has to occur with multiple containers?


---------------------------------------------------------------------------

===========================================================================
Docker Compose
===========================================================================

[What is Docker Compose?]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

CMDs:

  - `docker-compose build {service}`
  - `docker-compose up [-d]`
  - `docker-compose down`
  - `docker-compose ps`

- So what is Docker compose?
- What is so helpful about Docker Compose?
- So how do I get started with Docker Compose?
  - We must Docker Compose files. Let's take a look at the documentation.
  - Notice that there are several versions of compose files.
  - We are going to start with version 3 files as version 1 will be deprecated in
    future releases and 3 is the recommended version.
- So how do get started with one of these compose files?

---------------------------------------------------------------------------

[Multi-Container Application with Docker Compose]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

- So now that we have see docker-compose as a tool. How can we make a
  multi-container application?
- So can you remind us what the services represent?
- So what should we have in our services?
- So I know that we wanted to have persistent data using those volumes, is there
  a way to get those available to us in a compose project?
- So now that we have volumes, do we always reference them by name in the services?
- Are there any other issues that we should be aware of?

---------------------------------------------------------------------------

===========================================================================
Docker Machine
===========================================================================

[What is Docker Machine?]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

CMDs:
  + `docker-machine ls`
  + `docker-machine create -d virtualbox {name}`
  + `docker-machine kill`
  + `docker-machine ip`
  + `docker-machine rm`
  + `docker-machine ssh {machine}`
  + `docker-machine scp {file} {machine:/path/to/folder}`

- So what is Docker Machine?
- So what would be a good use of the Docker Machine tool?
- Now that we have all of those machines setup, how should I interact with those
  machines?
- Ah! So we have ssh, does that mean that I have scp (secure copy)?
  - Yep
- Can we inspect or find information about the machines?
- What if we want clean up?
- So if we are using containers, what is the purpose of the docker-machine tool?

---------------------------------------------------------------------------

[Using Docker Machine with Digital Ocean]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

CMDs:
  + `export DOTOKEN='<<DIGITAL OCEAN TOKEN>>'`
  + `docker-machine create -d digitalocean --digitalocean-access-token=$DOTOKEN {name}`
  + `docker-machine ssh {name} {bashcmd}`
  + `docker-machine ssh {name}`
    - `docker run -d -p 80:80 --name webserver nginx:alpine`
  + `docker-machine rm {name}`
  + `docker-machine ls`
  + `docker-machine ip {name}`

- We have seen how to manage local VMs with docker-machine, but are there other uses?
- So are we limited to just using digitalocean with docker-machine?
- Are we limited to any of the commands that we saw using the local VMs?
- Are there things that I should be aware/careful of?

---------------------------------------------------------------------------

[Using Docker Machine with Amazon Web Services]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------


## Hold off on this


---------------------------------------------------------------------------

===========================================================================
Docker Swarm
===========================================================================

[What is Docker Swarm?]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

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


---------------------------------------------------------------------------

[Creating A  Docker Swarm Application]
## [title]
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-[part]-[title]

title: [title]

subtitle: Introduction to Docker

---------------------------------------------------------------------------

CMDs:

  + `docker stack deploy --compose-file docker-compose.yml <<name>>`
    + `docker stack deploy --compose-file stack.yml <<name>>`
  + `docker service ls`
  + `docker node ls`
  + `docker service ps {service_name}`
  + `docker stack services {stack_name}`
  + `docker stack ls`
  + `docker stack ps {stack_name}`
  + `docker stack rm {stack_name}`

- So is there a way that we use docker swarm to distribute our multi container
  applications over several instances or machines?
- So we can leverage the docker-compose tactics that we learned to extend
  those services across multiple nodes in a network?
- See notes in the compose file

---------------------------------------------------------------------------
