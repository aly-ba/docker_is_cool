# Use Python with Telnet


## Objectives:

At the end of this episode, I will be able to:


1. Interact with Telnet using Python.

-----------------------------------------------------------


### Snippets

**Telnet Example**

```Python
    from telnetlib import Telnet
from getpass import getpass


def main():
    host =  input('Please enter the host: ')#'3.236.125.153'
    user = input('Please enter the username: ') #'justin'
    password = getpass() #'P@$$w0rd!'

    client = Telnet(host)
    client.read_until(b'login: ')
    client.write(user.encode() + b'\n')
    if password:
        client.read_until(b'Password: ')
        client.write(password.encode() + b'\n')
   
    client.write(b'ls -lah / \n')
    client.write(b'uname -a \n')
    client.write(b'exit \n')
    print(client.read_all().decode())


if __name__ == '__main__':
    main()
```

-----------------------------------------------------------

### External Resources:

During this episode, you can reference the following external resources for supplementary tools and information:

- (S) [Python telnetlib Module](https://docs.python.org/3/library/telnetlib.html)
