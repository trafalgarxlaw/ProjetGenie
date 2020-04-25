\tableofcontents
\pagenumbering{roman}
\clearpage
\pagenumbering{arabic}
\setcounter{page}{1}
# Étude de faisabilité

## Introduction

Avant toute planification approfondie, il est essentiel de prendre en considération le dégrée de faisabilité du projet sur lequel nous allons travaillé durant les semaines a venir afin de minimiser tout risque potentiel que nous pouvons rencontrer. Pour cela, une étude de faisabilité, prenant en compte plusieurs facteurs et questionnements, est indispensable à l'orientation que va prendre notre projet dans le temps qui nous est impartie. Les facteurs à considérer sont entre autres l'aspect technique, financier et l'atteinte de l'objectif prévu de notre projet. Ceci va donc permettre à l'équipe d'avoir une idée claire de notre mission et d'augmenter considérablement le taux de réussite du projet.

### Objectif du document

L'objectif d'une étude de faisabilité est de nous permettre de déterminer si notre projet est un projet réalisable, selon les critères établis par le client durant les discussions préliminaires. Dans ce but, cette étude portera sur l'analyse de la rentabilité du projet et déterminera si le projet est réaliste face aux buts et conditions de réussite. De plus, ce document va proposer les différents scénarios pour avoir une idée claire du déroulement du projet.

### Documents de références

Pour le moment, le projet ne nécessite aucun document de références.

### Terminologie

Base de données: Lorsqu'on fait référence à une base de données (dans le contexte de ce projet), nous faisons actuellement référence à la base de données qui est distribuée par BoardGameGeek pour utilisation libre.

## Description du besoin

Présentement, nous avons accès à une base de données qui renferme la description de plusieurs milliers de jeux de société, mais aucune façon facile de l'interroger n’est à notre portée. Nous voulons visualiser ces informations d'une façon qui est efficace et facilement utilisables. 

### Contexte

Lors de soirée entre amis ou encore durant nos temps d'ennui, il serait utile d'avoir accès a une plateforme qui pourrait nous proposer ou nous faire découvrir de nouveaux types de jeux de socitetee si l'idée d'y jouer nous vient a l'esprit. Un site web où l'on peut chercher tous les genres de jeux de société pourrait être fortement utile si l'ont souhaite de l'information concernant les règles, le nombre de joueurs maximum, le prix, etc. Cela peut en effet enrichir la qualité du temps que l'on passe avec nos proches ou note temps personnel.

Cette section portera donc sur le besoin que nous cherchons à satisfaire.

### Besoin exprimé

Un utilisateur ayant le besoin de rechercher où découvrir un certain type de jeux de société selon ses préférences parmi un très grand nombre de choix s'offrant a lui pourrait être une tache difficile. Un site comprenant une base de données regroupant plusieurs milliers de jeux, pouvant traiter ce genre de demande peut réduire énormément le temps et l'effort de recherche a l'utilisateur.

Dans ce but, nous avons besoin d'une application qui peut:

- Accéder à la base de données des jeux de société.
- Filtrer les données affichées selon les intérêts de l'utilisateur.
- Afficher les données qu'elle reçoit de cette base de données.
- Sauvegarder les préférences de l'utilisateur

### Objectif du projet

Répondre a ce besoin en créant un site web lié à une base de données contenant les informations concernant les jeux de société. Il suffirait tout simplement de naviguer à travers le site pour chercher les informations dans la base de données.

### Périmètre du projet

Ce qui sera inclut dans le projet:

- Un module qui va gérer la saisie de données de la base de données.
- Un module qui va gérer l'affichage à l'utilisateur.
- Un module qui va sauvegarder les préférences de l'utilisateur dépendamment du scénario.
- Une base de données qui contient l'information des jeux.

Ce qui sera exclu du projet:

- L'achat en ligne des jeux de société.
- La gestion des données dans la base de données, c'est-à-dire l'ajout, suppression et modification des jeux de société dans la base de données.

### Date souhaitée de mise en oeuvre

28 mars 2020

### Fonctions

Nous avons divisé notre projet en plusieurs fonctionnalités qui seront étudiées et implementer par les membres de notre équipe sous 2 points principaux. Ces fonctionnalités pourront être développé au niveau front-end et back-end de notre site web pour ensuite pouvoir mettre en place le produit final.

La division du projet par la réalisation des différentes fonctionnalités qui le compose est importante pour la valeur que nous allons apporter aux différentes versions du projet lors de nos livrables. Ainsi, nous pourrons avoir une version fonctionnelle à l'ajout de chaque fonction.

Principales

- Un site web qui sera facile et simple à naviguer conçut de sorte que l'utilisateur soit capable de trouver facilement la barre de recherche. Cet élément du site sera l'outil principal qui permettra à l'usager de chercher plus précisément le jeu de société qu'il voudrait découvrir. Il va être en mesure de faire ses recherches grâce à des mots clés qui sont reliés au jeu, par exemple le nom du jeu.

- Grâce à ce même outil l'usager va pouvoir faire des recherches plus approfondies liées aux caractéristiques du jeu souhaité, par exemple le nombre de joueurs minimum pour joué, le type de jeu, la durée d'une partie, en d'autres mots si c'est un jeu qui prend beaucoup de temps en moyenne selon sa complexité ou son nombre de joueurs nécessaire comme le Monopoly ou un jeu rapide tel qu'Uno qui se fini en quelques minutes.

- Affiche clairement toutes les informations du jeu de société rechercher par l'usager, pour éviter toute confusion lorsqu'il voudra consulter les résultats de ses recherches. Bien séparé par des titres principaux, par exemple, règles, nombre de joueurs maximum, instructions comment on joue, etc. Avec une couleur d'écriture et de fond d'écran lisibles. Une présentation "user-friendly" pour les personnes qui ne sont pas très habiles avec la technologie.

Secondaires

- Une fonctionnalité qui va permettre à l'usager de sauvegarder les informations qu'il a obtenues des recherches. De cette façon, il sera plus facile à accéder aux informations au besoin. De plus,lors de leurs soirées entre amis, ce genre de fonctionnalité pourrait aider des personnes qui ne connaissent pas les règles de jeux ou qui ne sont plus très sûres de leurs fonctionnements en leur donnant un accès plus facile.

## Analyse de la faisabilité et évaluation du coût

### Expérience de l'entreprise

Pendant notre parcours universitaire, nous avons pu toucher à la programmation web en utilisant des bases de données, à travers nos cours ou nos stages.
Le programme d'informatique et Génie logiciel assure que chaque étudiant prenant le cours de "Génie logiciel: conduite de projets informatiques" est effectué au préalable le cours d'analyse et modélisation. Ainsi nous sommes confiants dans les compétences d'analyse de chacun afin de pouvoir respecter l'envergure et les besoins de notre projet.

De plus chacun des membres de l'équipe propose des compétences diverses dans le cadre du développement web ce qui renforce encore une fois la confiance générale de l'équipe.

### Analyse de faisabilité technique

En général, les ressources techniques nécessaires à la réalisation d'un site utilisant des algorithmes de recherches dans une base de données sont connues et peuvent être choisies selon les préférences des membres de l'équipe de développement lorsqu'elles ont une bonne modularité.
Pour notre projet, nous avons pris en considération cet aspect et, selon notre expérience, avons choisi des technologies qui nous étaient familières afin d'optimiser la faisabilité technique des différentes facettes du produit final.
Les différentes technologies choisies afin d'accomplir ce projet disposent de documentation riche et complète accessible en tout temps. Ce fut un des nombreux critères de sélection afin d'identifier les différentes technologies pouvant aboutir à la création de ce projet.

| Domaine technologique | Choix technologique | Version |
| :--- | :---: | :---: |
| FrontEnd | Angular | v8.2.14 |
| BackEnd | Flask | v1.1.1 |
| Base de donnée | Sqlite | v3.0 |


### Analyse de faisabilité financière

Dans le cadre du cours la question de la faisabilité financière ne se pose pas puisqu'il s'agit d'un projet étudiant.

### Analyse de l'impact du projet 

L'impact général du projet sur l'équipe reste faible au point de vue de la charge de travail associe à chacun. Il s'agit du premier projet pour cette équipe.
Le plus important est actuellement la répartition des tâches ainsi que la mise en commun des connaissances.

## Élaboration des scénarios de réalisations

### Scénario 1

Le premier scénario serait la composition d'un site web dans lequel on peut fournir un ou deux critères (nombre de joueurs, temps de jeu) et on obtiendrait une liste de jeu de société correspondant à ces critères.

### Scénario 2

Création d'un site web, dans lequel l'utilisateur entre plusieurs critères de recherche (nombre de joueur, temps de jeu, type de jeu, thème du jeu, etc.). Il recevra ensuite une liste de jeu correspondant à ces critères. Cette liste sera triable selon plusieurs critères (complexité du jeu, score donné au jeu, âge recommandé, etc.). Il pourra ensuite sélectionner un jeu de la liste et obtenir plus d'information sur ce jeu.

### Scénario 3

Création d'un site web, dans lequel l'utilisateur peut se créer un compte. Il peut effectuer une recherche complexe en utilisant des opérateurs de recherche. Il recevra ensuite une liste triable de jeu correspond à sa recherche. Il peut voter sur plusieurs critères pour chacun des jeux, les lié à différentes listes dans son compte (p.ex. une liste "jeu que je possède", ou encore "jeux que je veux acheter"), poser des questions ou répondre à des questions liées à chacun des jeux.

## Choix d'un scénario de réalisation

### Comparaison des scénarios

Le scénario 1 est le scénario le plus simple. Il suffirait de créer une page avec quelques sélecteurs, un lien avec une base de données, et voilà, le site serait en place. Ça ressemble pas mal plus à un produit minimal viable qu'à un projet terminé.

Le scénario 2 est plus intéressant: le nombre de sélecteurs et leur complexité est plus grands et la liste à plus d'utilité: la trier selon différents critères, utiliser chaque élément comme un lien. De plus, la création d'une page d'information pour chaque jeu demandera un design intelligent, il sera impossible de construire 90 mille pages à la main.

Le scénario 3 est encore plus ambitieux: on ajouterait au scénario 2 toutes les caractéristiques du web 2.0 (commentaire, compte, vote cumulatif).

### Justification du choix de scénario

Nous choisissons le 2e scénario. Il est suffisamment ambitieux pour être intéressant, sans tomber dans un projet qui est impossible à réaliser, considérant notre faible expertise en création de site web et de gestion de base de données. Ce scénario nous permettra de lier fortement une base de données avec un site web, sans toutefois devoir faire l'administration de cette base de données: elle sera largement statique.

