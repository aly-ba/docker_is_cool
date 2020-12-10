Note GIT 
============================================================

Filename: Note GIT
Ressources : https://mobaxterm.mobatek.net/


1.1 Note GIT : Git Serveur
------------------------------------------------------------

* Cloner un git distant :
```
	+ git clone NomduRepos
```
* Rappel sur docker compose : 
```
	+ docker-compose up -d
```
* Stoppin Docker : 
```
	+ Systemctl stop docker
	+ systemctl stop docker.socket
```
* Push and an existing folder  : 
```
	+ git remote add origin liendurorigin.git
	+ git push -u origin ****   master***
```

* Push sur une nouvelle branche : 
```
	+ git remote -v
	+ git pusth origin echo (ici nom de la nouvelle branche)
```
* Faire fetch pour récupérer les merge apportés a la branche  master : 
```
	+ git clone (du master faire un clone du master)
	+ git checkout -b update(créer  une nouvelle branche best practice)
	+ travaux sur le branche
	+ git push origin update_script (pour push la branche)
	+ Demander un merge sur gitlab et assigner au manager( voir démons)
	+ git fetch origin master (adresses du master) d'un dev distant(pour se voir y' a des existances des mises  à jour sur le master)
	+ git pull origin master (se mettre à jour sur le master principal du manager)
	
```
