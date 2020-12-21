Filename: techskills-introtoansible-3-6-1-loops

Show Name: Intro to Ansible

Topic Name: Simple Playbooks 

Episode Name: Loops 

Description: 
In this episode, Zach and Justin take a look at iteration in the context of a playbook. Justin demonstrates the use of iteration in completing tasks such as installing a set of packages as well as illustrates edge cases when using loops and variables in the context of a playbook.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Loops 

+ So we have seen loops in templating, but what are we talking about now?
	* We may need to install a great of packages for our environment setup. Let's say that we are setting up a developer workstation. We may need the following packages:
		- nodejs
		- git
		- zsh
		- vim
	* Moreover, one of those packages need to set up a ppa. `nodejs`
+ How do we utilize loops within the playbook?
	* Let's create the playbook without using the looping portion to see how we can determine if a looping construct is the best thing to utilize.
	* Steps: 
		- Create `developer-workstation.yml`
		- 
+ Are there limitations using collections within playbooks?
	* Templates can be a little tricky
	* Careful what is in the collection: objects/dictionaries or just strings
