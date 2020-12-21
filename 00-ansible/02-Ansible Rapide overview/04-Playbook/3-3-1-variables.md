Filename: techskills-introtoansible-3-3-1-variables

Show Name: Intro to Ansible

Topic Name: Simple Playbooks

Episode Name: Variables 

Description: 
In this episode, Zach and Justin continue building out Ansible playbooks using
some configuration settings or additional information that is necessary to configure a respective node, otherwise known as variables. Justin demonstrates using inline playbook based variables.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Variables 

+ Reason: **What is the purpose of variables in playbooks?**
	* Applications:
		- Variables can provide user information to a configuration
		- Ways of setting information for a particular deployment
			+ User specific information
			+ Information specific for deployments
		- Can be used inside of the playbook itself
		- Can be used in resources, like templated files.
+ So how do we get started with using variables?
	* There are a few ways to utilize variables inside of Ansible
		- Inline Variables
		- File Variables
		- Interactive Variables
		- Variables from the Command Line
		- Group Variables
+ Inline Variables (host):
	* This is by far the easiest (opinion) 
	* Allows you to associate variables within the playbook with a hosts block
	* **Con**: Security/Privacy
	* Sample:
		- Create `simple-variables.yml`
		- Add the following: [[CONFIRM]]
			```
				- hosts: webservers
				  become: true
				  vars:
					home: /home/vagrant
					pictures_folder: /home/vagrant/pix
				  tasks:
				  	- name: find the files in the home directory
					  shell: "ls -lah {{ home }}	"
				    - name: create the picture folder 
					  file:
					    path: "{{ pictures_folder }}"
						state: present
			``` 
+ Variables from Files:
	* This will allow you to define configuration outside of the standard playbook.
	* Very nice to keep things out of playbook and can be used to separate sensitive data from the playbook so the remainder can be held in version control.
	* So how do we use these variables:
		- Change the above `simple-variables.yml` to:
			``` 
				...
				  vars_files:
				    - ./variables.yml
				...	
			```
		- Create `variables.yml`:
			```
				---
				
				home: /home/vagrant
				pictures_folder: /home/vagrant/pix
			```
+ Interactive Access of Variables: 
	* You can ask questions to determine the values when you are running the playbook.
	* Can be used a reminder for a more abstract/generic version of a playbook.
	* Capable of naming variables:
	* Steps:
		- Remove the other references from `simple -variables.yml`
		- Add the following to the playbook:
			```
				...
				vars_prompt:
				  - name: 'home'
				    prompt: "Where is the home directory?"
				  - name: "picture_folder"
				    prompt: "Where do you want to store the pictures?"
				...	
			```
	* What if we need to pass sensitive information through these prompts?
		- Add the following:
			```
				...
				vars_prompt:
				  - name: 'home'
				    prompt: "Where is the home directory?"
				  - name: "picture_folder"
				    prompt: "Where do you want to store the pictures?"
				  - name: 'password'
				    prompt: "What is the password?"
					private: yes	
				...	
			```
+ Variables from the Command Line:
	* Sometimes you may want to pass variables from the CLI
	* Maybe you want to use the Ansible playbook as a manner of command line utility or need an additional level of automation
		- Ansible is being run on your behalf through another tool
	* Steps:
		- Remove anything about variables from the playbook
		- Run `ansible-playbook simple-variables.yml --extra-vars "home=/home/vagrant pictures_folder=/home/vagrant/pix"`
+ Group Variables:
	* We will revisit this when we start talking about roles.
	* This will allow you to divy up variables based on roles or groupings of servers.
