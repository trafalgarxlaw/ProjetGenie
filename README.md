# README

# Projet de génie 3 - Developpement d'un logiciel en Agile

# Sommaire

Ce document établi clairement le backlog et la division en sprint de celui-ci, ainsi que la distribution des tâches, en plus d'établir une méthode de travail (ici, par un tableau kanban).

# Planification stratégique

## Description détaillée

L'objectif du projet est qu'en tant qu'usager nous soyons capable de retrouver les informations que nous voulons concernant un jeu de société, à partir du site web. C'est-à-dire que le site web doit être "friendly-user" pour que tout type de clientèle soit capable de retrouver les informations qu'ils ont besoin. Pour ce faire tout ce qui est nécessaire est d'avoir accès à la base de données qui va contenir les informations des jeux de société. Par la suite, le reste est de faire une interface qui est "friendly-user" pour que tout les usagers soient capabable de navigué sur le site web sans être perdu, qu'ils soient en mesure de trouver les options les plus utilisés, l'option aide s'ils ont de la misère à se retrouver, etc.

## Critères de succès

Les critères qui vont faire en sorte que le projet soit un succès est un bon travail d'équipe, définir clairement ce qui doit être fait et les buts à atteindre à la fin de chaque sprint, compréhension des technologies utilisées, comprendre la base de données, comment elle est structurée et comment l'utilisé pour accéder aux informations nécessaires, la communication entre les personnes qui travail sur le projet, etc.

# Planification opérationnelle

## Sprint 00

Infrastructure

### Description

Ce sprint est une mise en place préventive de l'infrastructure complète et opérationnelle de l'application.
Ce sprint est extrêmement important en raison de la diversité des outils technologique de développement de l'équipe. Celle-ci est présente au niveau des systèmes d'exploitation, certains membres utilisent Windows, MacOS ou encore Linux.

Nous avons choisi la technologie Docker afin d'uniformiser la gestion de dépendances du projet et ainsi offrir un environnement de développement unique pour ce projet.

### Liste des tâches

- Création d'une application Angular dans un docker.
- Création d'une application Flask dans un docker.
- Connexion entre les deux dockers.
- Création d'un script de déploiement automatisé.
- Création d'un exemple d'intéraction entre Angular et Flask.
- Documentation.

## Sprint 01

Echange de données.

### Description

Le but de ce sprint est de permettre un échange de données complet et fonctionnel entre le Backend et le Frontend.
Il s'agit de l'initialisation de l'API Backend ainsi que l'interface de base du Frontend.

### Liste des tâches

- Connexion entre le Backend et la base de donnée.
    - Insertion.
    - Sélection.
    - Suppression.
    - Modification.
- Création d'une route API transférant l'entièreté des données.
- Création du layout Frontend de base.
    - Navbar.
    - Footer.
    - Palette de couleur.
- Affichage de la donnée brute sur la page d'accueil.

## Sprint 02

Minimum Viable Product.

### Description

Ce sprint constitue la dernière étape de développement de l'application. L'objectif est donc d'améliorer le design ainsi qu'optimiser le transfert de données afin de ne plus surcharger la page.

### Liste des tâches

- Ajout de route API Backend plus précise.
    - Route page d'accueil.
    - Route dynamique par jeu.
    - Route de recherche.
- Création d'un composant générique d'affichage Frontend d'un jeu.
- Création d'une barre de recherche Frontend.
- Affichage du "jeu du jour" sur la page d'accueil.

## Sprint 03

Paufinage.

### Liste des tâches

- Optimiser les appels à la base de données.
- Améliorer le design visuel de la page web.
- Identifier et valider les edges cases.

# Mise en place et execution du projet

Le backend sera programmé à l'aide du framework flask, ainsi que du langage de base de donnée sqlite3.
Le frontend sera programmé à l'aide du framework angular.
La gestion de l'exécution du programme ainsi que la communication entre le backend et le frontend sera fait à l'aide de docker.
La base de donnée sera sourcée de "https://www.kraggle.com/gabrio/board-games-dataset".

Le backlog et les sprints seront géré par un tableau kanban sur le *repository* gitlab du projet.

## Guide d'exécution

### Architecture du projet

Le projet utilise la structure suivante :

```bash
.
|-- angular             # Frontend
|-- docker-compose.yml
|-- dockers.md
|-- Documentation
|-- flask               # Backend
|-- Makefile
|-- README.md
```

Le projet est divisé en deux principaux dossiers séparant ainsi la partie Frontend et Backend.

Le fichier `docker-compose.yml` est là pour compiler et exécuter le projet au complet dans deux images docker séparé sous un même réseau afin de permettre la communication entre le Frontend et le Backend. En utilisant cette méthode, deux images docker sont créé et sont dite **Linked**.

Chaque dossier, `angular` et `flask`, possède un fichier `docker-compose.yml` qui pourrait être utilisé afin d'exécuter le Frontend ou le Backend de façon indépendante.

Le [dataset](https://www.kraggle.com/gabrio/board-games-dataset) téléchargé ("database.sqlite") doit être placé dans `flask/src/db/`.

### Dépendance requise

- `docker`.
- `docker-compose`.

Pour faire fonctionner le makefile :

- graphviz
- plantuml
- librsvg2-bin
- pandoc
- texlive-latex-extra
- texlive-fonts-recommended
- lmodern

[Instruction d'installation](https://docs.docker.com/docker-for-windows/install/)
### Exécuter le projet

Afin d'exécuter le projet une simple commande est nécessaire :

```bash
# pwd = inf6150-projet/
docker-compose up --build
```

L'option `--build` est là pour compiler le projet lors de la première exécution. Il est préférable de l'enlever lors de la deuxième exécution mais doit être présent si une quelconque modification aux images docker ait été effectué.

Deux containers sont créés :

- `inf6150-frontend-linked` : Frontend Angular.
- `inf6150-backend-linked` : Backend Flask.
  
Lors de l'exécution le terminal utilise est utilisé par docker afin d'afficher les logs de l'application. Un simple `CTRl + C` permet d'arrêter l'application.

Le programme est alors en cours d'exécution a l'adresse suivante : `localhost:4200`.

#### Aide docker

Voici une liste de différentes commandes docker pouvant être utile :

- `docker ps` : Liste les containers docker en exécution.
- `docker ps -a` : Liste tout les containers docker ayant été créé.
- `docker stop <container name>` : Stop le container.
- `docker rm <container name>` : Supprime un container qui n'est pas en exécution.

## Rôles et responsabilité

| Membre | Rôle |
| :--- | :--- |
| Armand Brière | Responsable infrastructure et remise |
| Félix Côté | Responsable Frontend |
| Yassine Hasnaoui | Responsable Backend |
| Joaquin Lee Martinez | Responsable Frontend |
| Charles Thérien | Responsable Backend et remise |



# Scrum

Pour les deux tableaux qui seront présenté ont les colonnes suivantes:
- Backlog: contient les tâches qui n'ont pas été pris en charge par quelqu'un
- Working: contient les tâches qui sont en train d'être développé
- Need Review: contient les tâches en attente d'assurance qualité
- Done: contient les tâches en attente d'approbation
- Closed: contient les tâches terminées et approuvées



