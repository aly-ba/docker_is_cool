Filename: techskills-introtoansible-3-5-1-templating

Show Name: Intro to Ansible

Topic Name: Simple Playbooks

Episode Name: Templating 

Description: 
In this episode, Zach and Justin explore using templated files to configure services that are part of your configuration.  Justin epxlores the use of output of variables as a way to template files for configuration purpose using the basic of the Jinja2 templating language.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Templating
+ What do you mean by _templating_?
	* Uses:
		- Generalizing configuration files for applications like haproxy, nginx, Apache
		- Could be used to make project that is specific to a server reflect that based on information.
		- This allows you to remove hardcoded values like IPs, filepaths, and then provide those at management time.
+ So how does Ansible provide the ability to template configuration files?
	* If you have ever dabble in Web Development in the Python world, then you might have heard about Jinja2 templating
	* This is way of writting text that is allows for a powerful find and replace as well as execute code in the context of generating a template.
		- You may need a loop to generate a list of entries in a configuration file.
		- You may need a line to be present in some situations and absent in other situations
		- You may need to ensure that certain text is always in a particular format
	* All of the aforementioned capabilities are available through Jinja2
+ Are we going to take a look at all of those capabilities?
	* At his point, that could be a totally separate course so we are going to learn the basics of Jinja2 to get started
	* Just remember that Jinja2 is way more powerful than we are going to show here
	* Let's focus on more of the practical uses:
		- outputing text into a file
		- showing how to use Pythonic code to generate certain aspects of the templated file
+ So where do we start?
	* Let's just get a file from the controller node to the required nodes
	* Steps:
		- Create `hosts` and `ansible.cfg` (make sure that you have one)
		- Create playbook `templating.yml`
		- Create `webservers` section
		- Create tasks
			+ install git
			+ send a message to the admin
			+ create a configuration file
	* Files:
		- `templating.yml`:
			```
			---

			- hosts: webservers
			become: true
			vars:
				message: "Hello! Have a great Admin time!"
				ips:
				- "10.10.10.11"
				- "10.10.10.12"
				some_data: "cheese"
				users: 
				- name: Justin
					username: justin
					shell: /bin/zsh
				- name: Alice
					username: alice
					shell: /bin/fsh
				- { name: 'Ted', username: 'ted', shell: '/bin/bash' } 
			tasks:
				- name: install git 
				apt:
					name: git
					state: present
				- name: template a nice message for admins
				template:
					src: ./message.j2
					dest: /tmp/message.txt
				- name: set up the ips in the tmp folder
				template:
					src: ./ip.conf.j2
					dest: /tmp/ip.conf
				- name: create a list of users for the admins
				template:
					src: ./users.j2
					dest: /tmp/users
				- name: create the timkat user
				user:
					name: timkat
					groups: sudo 
					shell: /bin/bash
				- name: create user xml list
				template: 
					src: ./users-xml.j2
					dest: /opt/users.xml
					owner: timkat
					mode: 0400 
	
			```

		- `message.j2`:
			```
				{{ message }}
			```
		- `ip.conf.j2`: 
			```
				## {{ ips | to_json }}
				{% for ip in ips %}
				{{ ip }}
				{% endfor %}

				{% if True %}
				This is true.
				{% endif %}

				{% if 'super' in some_data %}
				Superman 
				{% else %}
				Batman
				{% endif %}
			```
		- `users-xml.j2`
			```
				{% for user in users%}
				<User>
					<Name>{{ user.name }}</Name>
					<Username>{{ user.username }}</Username>
					<Shell>{{ user.shell }}</Shell>
				</User>
				{% endfor%}

			```



