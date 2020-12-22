#!/bin/bash

sshpass -p vagrant ssh-copy-id -i /home/vagrant/.ssh/id_rsa node1
sshpass -p vagrant ssh-copy-id -i /home/vagrant/.ssh/id_rsa node2
sshpass -p vagrant ssh-copy-id -i /home/vagrant/.ssh/id_rsa node3
sshpass -p vagrant ssh-copy-id -i /home/vagrant/.ssh/id_rsa redhat-node 

