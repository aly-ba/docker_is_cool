Filename: techskills-introtoansible-3-1-1-hosts

Show Name: Intro to Ansible

Topic Name: Simple Playbooks

Episode Name: Hosts 

Description: 
In this episode, Ronnie and Justin start creating Ansible playbooks that allow clearer and more reproducible configurations when managing resources with Ansible.
Particularly, Justin takes a look some of the basic organization of a playbook based
on what hosts need which changes made.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Hosts
+ We shouldn't be using those ad-hoc commands as a way of reproducibly managing machines, what are the alternatives?
	* Playbooks!
		- Playbooks are a way to organize a project for a set of descriptions
		- We can segment the responsibilities accordingly.
+ How do we get started with playbooks?
	* We need to start by creating some specially formatted YAML files
	* These are going to hold eseentially all of the information to manage
	a particular configuration.
+ What is YAML?
	* This is a special language for describing a structure
	* Stands for YAML AIN'T MARKUP LANGUAGE
	* It is a superset of JSON (JavaScript Object Notation)
+ What are things that must be in the playbook?
	* Hosts
	* Variables
	* Tasks
	* Handlers
	* Settings
+ So let's write one:
	* Create the `application.yml` playbook (file extension can be .yaml)
	* Create the section for `webservers`, `dbservers`, and `local`
		- Add the following configurations:
			+ `become`
			+ `user` (demonstrate)
			+ `name` (good internal documentation)
			+ `remote_user`
	* Take a look at the Ansible documentation for further details
+ Well we have an Ansible playbook, but do we just run that with the `ansible` command?
	* Ansible comes with a different set of CLI tools like `ansible-playbook` or `ansible-vault`
	* We will use `ansible-playbook` to run through the playbook
		- There isn't much to see at current time as we only have hosts
+ Is that all there is to the a playbook?
	* We will continue to build up this playbook as we learn more about the 
	* We may have to add, remove, or adapt as our requirements change, but that is
	the power of ansible
