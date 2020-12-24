## Using Docker Machine with Digital Ocean
---------------------------------------------------------------------------

filename: techskills-introductiontodocker-14-1-using_docker_machine_with_digital_ocean

title: Using Docker Machine with Digital Ocean

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
- Are there things that I should be aware of?
