Filename: techskills-introtoansible-2-4-1-running-commands

Show Name: Intro to Ansible

Topic Name: Ansible on the Command Line

Episode Name: Running Commands

Description: 
In this episode, Ronnie and Justin dive into more command line
commands such as uptime, preparing systems for administration,
or querying aspects of a system. Justin highlights the nuances among
the raw, command, and shell modules when using each one.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Running Commands
+ What if there isn't an Ansible module available to accomplish a task?
	* Applications: (Show these on a node)
		- `free -h`
		- `du -h`
		- `cat /etc/group`
	* Context:
		- These are commands that are used to query some aspect of the system.
		- Still very much in the ad-hoc realm.
	* Ansible Manner:
		- `ansible webservers -m shell -a "free -h" ` 
		- `ansible all -m shell -a "du -h"`
		- `ansible dbservers -m shell -a "cat /etc/group`
+ So we use the `shell` module to issue these type of commands?
	* Sidestep:
		- We can also use the `command` module as well as the  `raw` module
		- Notes:
			* `raw`: down and dirty; good to fix an issue with the python 
				executable
			* `command`: very similar to the `shell` module;
				+ doesn't work with redirects, pipes, or other bash uses
+ Let's take a look at how that `raw` module would work
	* Setup:
		- Remove the the `/usr/bin/python` executable
			* uninstall python2.7
			* purge the installation
		- Demonstrate that ansible is broken
		- Use `raw` to install the python2.7 distribution
		- Use `raw` module to setup the `/usr/bin/python` executable
	* Commands:
		- `ansible webservers -a raw -m 'apt-get install python2.7' --become`
		- `ansible webservers -a raw -m 'ln -s /usr/bin/python2.7 /usr/bin/ython' --become`
+ Now what about that `command` module?
	* Demonstrate creating a file using shell
		- Commands:
			+ `ansible webservers -a shell -m 'touch /tmp/file.txt'`
			+ `ansible webservers -a command -m 'touch /tmp/commandfile.txt'`
	* Demonstrate redirecting an echo statement to the files
		- Commands:
			+ `ansible webservers -a shell -m 'echo "shell" >> /tmp/file.txt'`
			+ `ansible webservers -a command -m 'echo "command" >> /tmp/commandfile.txt'`

