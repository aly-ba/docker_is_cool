## Building an Application with Docker
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-9-1-building_an_application_with_docker

title: Building an Application with Docker

subtitle: Introduction to Docker

---------------------------------------------------------------------------

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
