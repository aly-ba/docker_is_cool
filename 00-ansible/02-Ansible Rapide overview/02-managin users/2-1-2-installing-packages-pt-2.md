Filename: techskills-introtoansible-2-1-2-installing-packages-pt-2

Show Name: Intro to Ansible

Topic Name: Ansible on the Command Line

Episode Name: Installing Packages Pt. 2

Description: 
In this episode,Daniel and Justin return to further explore installing packages as well as highlighting some of the "gotchas" that can crop up when installing packages using Ansible.

Keywords: ansible, agentless, configuration management,
			devops, deployment

---

### Installing Packages
+ Setup the project
	- update the hosts file
	- 
+ Installing Packages from the Command Line for __webservers__
	- `ansible webservers -m ping`
	- `ansible webservers -m apt -a "name=nginx state=present" --become`
		* Demonstrate without the become flag as a reminder
+ Installing Packages from the Command Line for __all__
	* Add the PPA	
		- `ansible all -m apt_repository -a "repo=ppa:neovim-ppa/stable state=present" --become`
	* Install the neovim package
		- `ansible all -m apt -a "name=neovim state=present update_cache=yes" --become`
	* Demonstrate that you want to use the vi or vim shortcuts, but that isn't available at current time
	* Update the alternatives so that vi and vim point to nvim
		- `ansible all -m alternatives -a "name=vi path=/usr/bin/nvim priority=60" --become`
		- `anisble all -m alternatives -a "name=vim path=/usr/bin/nvim priority=60" --become`
+ Adding __local__ computer to the list
	* Modify the hosts file 
		- ```
			[local]
			localhost ansible_connection=local
		```
	* Run local tasks for controlling computer
		- `ansible local -m apt -a "name=git state=installed" --become`
+ Rerun install for __all__ hosts
	* Demonstrate the `nvim` isn't available

