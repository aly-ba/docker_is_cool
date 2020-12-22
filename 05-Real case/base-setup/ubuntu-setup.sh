#!/bin/bash
sudo apt-get update
sudo apt-get install software-properties-common -y
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible -y



echo " 

10.10.10.10 controller
10.10.10.11 node1
10.10.10.12 node2
10.10.10.13 node3
" >> /etc/hosts


