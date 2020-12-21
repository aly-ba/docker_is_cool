Filename: techskills-introtoansible-3-2-1-tasks

Show Name: Intro to Ansible

Topic Name: Simple Playbooks

Episode Name: Tasks 

Description: 
In this episode, ______ and Justin take a look at creating alist of actions to take when creating a playbook called tasks. Justin further explains how to add tasks as well as considerations when creating a list of tasks.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Tasks 
+ What are tasks in the terms of Ansible playbooks?
	* Tasks are the changes or actions that you want to take for a particular
	node or machine.
	* Examples:
		- installing packages
		- adding a user
		- updating passwords
		- generating ssh keys
		- modifying software based firewall rules
+ So how do we get started creating tasks in playbooks?
	* Tasks are organized by the hosts that we are going to run the tasks against.
	* Tasks are ordered by what is necessary to accomplished.
	* Let's start by taking a look at how to set up a development machine.
	* Steps:
		- Create `development-env.yml` 
		- Create `hosts` file and associated `ansible.cfg`
		- Add the following hosts information:
		-
			```
				- hosts: devmachines
				  become: true
				  tasks:
				  	- name: install git
					  apt:
					    name: git
					    state: present
					- name: install vim
					  apt:
					    name: vim
					    state: present
					- name: setup dev folder
					  file:
					    path: /dev
					    state: present
					- name: add developers group
					  group:
					    name: developers
					    state: present 	
			```
+ So all of these tasks are going to run in order, so we have to consider the order when we are writing task?
	* Yes, we need to consider the order especially if there are dependencies between the steps. 
	* Think about an application that runs as a service such as apache web server, nginx, or the like.
	* Actually, let's take a look at setting up something liek that using Ansible?
	* Steps:
		- Create `server.yml`
			+ This is in the same folder as the previous `hosts` and `ansible.cfg`.
		- First add the following to the `server.yml`:
			```
				- hosts: servers
				  become: true
				  tasks:
				    - name: start nginx
					  service:
					    name: nginx
						state: started
					- name: install nginx
					  apt:
					    name: nginx
						state: present	
			```
		- Demonstrate the failure
		- Change the `server.yml` to the following:
			```
				- hosts: servers
				  become: true
				  tasks:
					- name: install nginx
					  apt:
					    name: nginx
						state: present	
				    - name: start nginx
					  service:
					    name: nginx
						state: started
			```


