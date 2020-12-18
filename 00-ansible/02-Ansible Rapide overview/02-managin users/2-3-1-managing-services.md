Filename: techskills-introtoansible-2-3-1-managing-services

Show Name: Intro to Ansible

Topic Name: Ansible on the Command Line

Episode Name: Managing Services

Description: 
In this episode, _______ and Justin take a look at managing 
system services. Justin demonstrates how to enable and disable a service as
well as start, restart, reload, and stop a services as well as describe the 
nuanced differences among those actions.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Managing Services

+ What are services?
	- Application(s) that are background processes that are waiting to 
	fulfill a task

+ Setup and Install MongoDB
	* Commands:
		- `ansible dbservers -m apt_key -a "keyserver=<url> id=<id> state=present" --become `
		- `ansible dbservers -m apt_repository -a "repo=[url] state=present" --become`
		- `ansible dbservers -m apt -a "name=mongodb-org state=present update_cache=yes" --become`
+ Start MongoDB
	* Commands:
		- `ansible dbservers -m service -a "name=mongod state=started" --become`
+ Stop MongoDB
	* Commands:
		- `ansible dbservers -m service -a "name=mongod state=stopped" --become`
+ Restart MongoDB
	* Commands:
		- `ansible dbservers -m service -a "name=mongod state=restarted" --become`
+ Reload MongoDB:
	* Commands:
		- `ansible dbservers -m service -a "name=mongod state=reloaded" --become`
+ What happens on reboot or if the machine power cycles?
	* The previous ones 
	* Commands:
		- `ansible dbservers -m service -a "name=mongod enabled=yes" --become`
		- `ansible dbservers -m service -a "name=mongod enabled=no" --become `