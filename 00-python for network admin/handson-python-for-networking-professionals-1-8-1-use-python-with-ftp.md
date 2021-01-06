# Use Python with FTP


## Objectives:

At the end of this episode, I will be able to:


1. Interact with FTP using Python.

-----------------------------------------------------------


### Snippets

**FTP Example**

```Python
    from ftplib import FTP

def main():
    host = 'localhost'
    username = 'justin'
    password = 'password1234'

    client = FTP(host)
    client.login(username, password)
    print('Before: ')
    client.dir()
    with open('./foods.txt', 'rb') as fp:
        client.storlines("STOR foods.txt", fp)
    print("After: ")
    client.dir()
    client.quit()


if __name__ == '__main__':
    main()

```

-----------------------------------------------------------

### External Resources:

During this episode, you can reference the following external resources for supplementary tools and information:

- (S) [Python ftplib Module](https://docs.python.org/3/library/ftplib.html)
