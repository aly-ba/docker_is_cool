Filename: techskills-introtoansible-3-4-1-handlers

Show Name: Intro to Ansible

Topic Name: Simple Playbooks

Episode Name: Handlers 

Description: 
In this episode, Zach and Justin dive into the use of handlers for reacting to events during the processing of an Ansible playbook. Justin  demonstrates the creation of handlers as a response to tasks throughout the playbook such as installing an application that needs to be started or reloaded because configuration has changed.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Handlers
+ What is the purpose of handlers?
	* Handler allows us to respond to events that have occurred some point during our playboo.
	* Additionally, we are able to not rerun commands that may be actuated several times throughout the execution of the playbook.
	* CAUTION: We should be aware that handlers run in the order they are defined if multiple handlers are fired off
+ How do we create handlers?
	* They are very similar to creating tasks.
	* Remember, tasks have order inside of them as well. 
	* So let's create some handlers:
	* Steps:
		- Create a new playbook `handlers.yml`
		- Add the following:
			```
				---


				-   hosts: webservers
					become: true
					tasks:
						- name: install apache2 
						   apt:
							name: apache2
							state: present
						- name: start apache2 
						  service:
							name: apache2
							state: started
						- name: install libapache2-mod-python
						  apt:
							name: libapache2-mod-python
							state: present
						  notify: restart apache 
						- name: install  libapache2-mod-wsgi
						  apt:
							name: libapache2-mod-wsgi
							state: present
						  notify: restart apache
					handlers:
					    - name: start apache
						  service:
						    name: apache2
							state: started 
						- name: restart apache
						  service:
							name: apache2
							state: restarted
					
			```
+ What are the events that you are discussing: built in or defined?
	* All of the events that we have created are semantic events. 
	* We can create a general topic and have the handlers "listen" for those topics
	* This will allow the grouping of handlers
	* Demonstrate the general grouping of handlers using general (Ansible 2.2+)
		- Change the `restart apache` handler:
			```
				- name: restart apache
				  service: 
				    name: apache2
					state: restarted
				  listen: "web services restart"
				- name: add new user configuration
				  file:
				    path: /tmp/user.conf
					state: present
				  listen: "web services restart"	
			```
		- Change the main playbook
			```
			...
			- name: install libapache2-mod-python
				apt:
				name: libapache2-mod-python
				state: present
				notify: "web services restart"
			- name: install  libapache2-mod-wsgi
				apt:
				name: libapache2-mod-wsgi
				state: present
				notify: "web services restart"
			```
+ What are some of the things that we should be aware of when using handlers? 
	* Handlers run in order that they are defined
	* Only run when changes are made
