Filename: techskills-introtoansible-5-1-1-requirements-for-static-site-deployment

Show Name: Intro to Ansible

Topic Name: Static Site Deployment

Episode Name: Requirements for Static Site Deployment

Description: 
In this episode, ----- and Justin review the requirements
that have been set forth for a deployment. Justin discusses
the thought process for creating a plan for deployment and 
describes why one should use configuration management
and version control instead of manual configuration.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Requirements for Static Site Deployment

+ Context: "You need to configure and deploy a static website on a single server"
	* Draw and diagram (very simple)
	* Discuss the thought process
	* Who would be doing this?
		- Developer self-deploying
		- SysAdmin that has deployment possibility
+ Questioning:
	* Is the resource already available?
	* Where are we going to get the static website content?
	* What is the user on the node?
	* Does this require `sudo` access?
	* What needs to be installed?
+ Create a plan:
	* Install `nginx`
	* Start the `nginx` service
	* Update the configuration for `nginx`
	* Activate the site
	* Transfer the project to the /var/www/ directory
