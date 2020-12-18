Filename: techskills-introtoansible-2-2-1-managing-users

Show Name: Intro to Ansible

Topic Name: Ansible on the Command Line

Episode Name: Managing Users

Description: 
In this episode, Daniel and Justin start working with users on remote
nodes using Ansible. Justin demonstrates creating users, creating groups, and
adding users to groups.


Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Managing Users

+ Set the stage for administering roles and groups for access to resources
	* Why do I care about managing users?
+ Setup the **admin** group
	* What is the admin group?
		- `ansible all -m group -a "name=admin state=present" --become`
+ Create a user: **daniel**
	* Discuss the settings and take a look at the documentation
		- `anisble all -m user -a "name=daniel shell=/bin/bash groups=admin append=true --become`
+ Setup the **developers** group
	* What is the purpose of the developers group?
		- The purpose is to develop a web application
	* Command:
		- `ansible webservers -m group -a "name=developers state=present" --become`
+ Create a developer account: **justin**
	* Command:
		- `ansible webservers -m user -a "name=justin shell=/bin/bash groups=admin,developers append=true --become`
