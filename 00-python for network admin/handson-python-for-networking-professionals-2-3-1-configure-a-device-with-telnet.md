# Configure a Device with Telnet


## Objectives:

At the end of this episode, I will be able to:


1. Configure a networking device using telnet.

-----------------------------------------------------------


### Snippets

**main.py**

```Python
    from telnetlib import Telnet


def main():
    host = input("Host: ")
    port = input("Port: ")
    with Telnet(host, port) as client:
        client.write(b"\r\n")
        client.write(b"enable\n")
        client.write(b"show ip int brief\n")
        client.write(b"conf t\n")
        client.write(b"interface loopback0\n")
        client.write(b"ip address 192.168.3.2 255.255.255.0\n")
        client.write(b"no shutdown\n")
        client.write(b"end\n")
        client.write(b"show ip int brief\n")
        client.write(b"exit\n")
        print(client.read_until(b"Press RETURN to get started.").decode())


if __name__ == "__main__":
    main()

```

-----------------------------------------------------------

### External Resources:

During this episode, you can reference the following external resources for supplementary tools and information:

- (S) [telnetlib Documentation](https://docs.python.org/3/library/telnetlib.html)
