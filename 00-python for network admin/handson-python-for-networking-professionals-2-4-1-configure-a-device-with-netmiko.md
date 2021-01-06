# Configure a Device with netmiko


## Objectives:

At the end of this episode, I will be able to:


1. Configure a network device using the Python library netmiko.


2. Explain the positives of using netmiko.

-----------------------------------------------------------


### Snippets

**main.py**

```Python
    from netmiko import Netmiko
from getpass import getpass


def main():
    commands = [
        "show ip int brief",
        "interface loopback0",
        "ip address 192.168.3.2 255.255.255.0",
        "no shutdown",
        "end",
        "show ip int brief",
    ]
    device = dict(
        host=input("Host: ")
        device_type="cisco_ios",
        username=input("Username: "),
        password=getpass("Password: "),
    )
    conn = Netmiko(**device)
    output = conn.send_config_set(commands)
    print(output)
    conn.disconnect()


if __name__ == "__main__":
    main()

```

**pyproject.toml**

```TOML
    [tool.poetry]
name = "netmiko-configuration"
version = "0.1.0"
description = ""
authors = ["Your Name <you@example.com>"]

[tool.poetry.dependencies]
python = "^3.7"
netmiko = "^3.3"

[tool.poetry.dev-dependencies]

[build-system]
requires = ["poetry>=0.12"]
build-backend = "poetry.masonry.api"

```

-----------------------------------------------------------

### External Resources:

During this episode, you can reference the following external resources for supplementary tools and information:

- (S) [Netmiko Documentation](https://github.com/ktbyers/netmiko)
