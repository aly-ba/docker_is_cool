
## Building Multi-Container Applications with Docker
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-10-1-building_multi_container_applications_with_docker

title: Building Multi-Container Applications with Docker

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
