# Charte de projet

## Besoin et envergure

### Objectif du document

L'objectif de cette charte de projet est de permettre à tous les parties prenantes d'avoir un aperçu détaillé du projet et qui agira comme une entente entre eux. La charte décrit les principaux aspects du projet, les limites du projet, la hiérarchie au sein du projet et la gestion des risques possibles.

La charte permet de concrétiser le projet d'une possibilité à une actualité. Le client va pouvoir décider s'il veut continuer avec le projet ou l'abandonner avec les informations présentées dans ce document.

### Objectif de projet

Le but est de pouvoir avoir de l'information sur des jeux de société.

L'objectif du projet est d'avoir une application qui permettra à l'utilisateur de rechercher une base de données contenant les informations sur des jeux de société, consulter l'information spécifique d'un jeu de société et de garder en mémoire ses jeux préférés.

Le résultat de ce projet est une application prête à être mise en production et déployé pour la satisfaction des utilisateurs potentiels.

## Mandat

Le mandant dans notre projet représente l'individu qui, par un mandat, nous donne le pouvoir d'agir en son nom. Dans un contexte de gestion de projet le mandant représente donc notre client qui, à partir de sa perception du problème, nous fait parvenir sa demande afin de répondre à son besoin. 

Le mandat constitue donc la base du contrat qui sera établi entre l'organisation en cause (notre client) et le gestionnaire de projet et son équipe. D'après notre étude de faisabilité, voici les éléments qui seront inclus et exclus du périmètre du contrat.

### Inclusion

- Module en charge de l'interface utilisateur.
- Module en charge de la recherche au niveau de la base de données.
- Module en charge de la sauvegarde des préférences de l'utilisateur.
- Base de données incluant l'information des jeux.

### Exclusion

- L'achat en ligne des jeux de société.
- La gestion des données dans la base de données, c'est-à-dire l'ajout, suppression et modification des jeux de société dans la base de données.

### Livrables

D'une façon générale, nos livrables serviront à construire de façon soutenue un pont entre le besoin de nos usages et la réponse à ce besoin.

- Livrable 1: interface de recherche simple à 1 critère qui fonctionne.
- Livrable 2: recherche complexe (plusieurs critères simultanés).
- Livrable 3: page descriptive individuelle pour chaque jeu.

### Rôles

## Facteurs de succès

- Pour être en mesure de réussir un tel projet, il va falloir tout d'abord mettre au clair l'idée principale du projet, ce qui doit être fait, la date de remise, etc. Pour que toute l'équipe soit sur la même longueur d'onde et soit au courant des choses qui sont à produire pour les livrables. 
- Par la suite, séparer les tâches pour maximiser la productivité et l'efficacité, choisir un scrum master pour s'assurer que les codes sont biens relier et fonctionnels. Un autre des facteurs qui va aider au succès du projet est d'avoir une bonne communication au sein de l'équipe pour donner la possibilité que les coéquipiers puissent s'entre aider, puisque nous avons chacun nos forces et faiblesses. 
- De plus, laisser un peu plus de temps pour faire les tâches nécessaires (sprints) au cas où qu'il y aille un imprévu. Vaut mieux finir en avance que finir après notre propre délai fixé. Établir des buts, des objectifs atteignables, qui sont réalistes.
- S'assurer que le produit va réellement visé la clientèle voulue, dans notre cas pratiquement tout le monde, c'est-à-dire que le site web est accessible, facile à naviguer à travers (friendly user), pas trop d'informations sur les pages pour que l'utilisateur ne le sente pas trop lourd.

## Hypothèses

Type |  Identification des hypothèses | Est-ce que l'hypothèse entraîne un risque?
:---:|:------------------------------:|:--------------------------------------:
A | Les dates qu'on a établie pour les livrables ne vont pas changer. | Oui
O | Les membres de l'équipe ont les connaissances nécessaires pour le déroulement du projet. | Non
O | Tous les membres de l'équipe resteront pour la duration du projet. | Oui
T | Tous les membres de l'équipes ont accès aux outils (ordinateur, compte gitlab, etc) nécessaires pour faire le projet. | Non

## Risques

**Types de risques :**

**TI** : Reliés à la technologie (nouvelle technologie, première fois à la Banque, niveau de complexité, etc.).

**RH** : Reliés aux ressources humaines (expertise disponible, quantité de ressources requises sur le marché,
etc.).

**OB** : Reliés à l’atteinte des objectifs (livrable, budget, échéancier, qualité).

**OP** : Reliés aux opérations.

**AU** : Autres (disponibilité des équipements, dépendances autres projets etc.…).

Type | Identification des risques | Plan d'actions
-----|----------------------------|---------------
**OB** |  Mauvaise estimation des délais des livrables selon le role assigné au membres de l'équipe | Revoir la structure de l'équipe (role de chacuns) afin d'optimiser le rendement des livrables
**RH** | Manque de compétences, absentéisme, conflits au sein de l'équipe| Communiquer les faiblesse de l'équipe si le cas se presente des le premier livrable.
**AU** | Le site web "boardgamegeek.com" ferme ou n'est plus à jour(source de la base de donnée) | Utiliser une seconde base de donné (en cas de secour)
**AU** |  Le site web n'est pas adopté par les utilisateurs ciblées car le site n'offre pas la possibilité d'acheter ou de jouer aux jeux recherchés | Si le cas se presente, implementer un module plus complexe permettant de proposer des sites offrant la possibilité de jouer/acheter des jeux de société

## Contrainte/Interdépendances des projets

Type | Identification des contraintes | Est-ce que ça entraîne un risque pour le projet?
-----|--------------------------------|-------------------------------------------------
 AU | Le site web "boardgamegeek.com" soit maintenu à jour (source de la base de donnée). | Oui
 TI | Avoir accès aux licenses nécessaires pour utiliser les technologies choisi. | Oui
 OP | Utiliser un gestionnaire de sources pour faciliter la séparation des tâches. | Non
 OB | Le projet ne sera pas disponible aux utilisateurs à la fin de sa duration. | Non


## Structure de l'équipe - projet

### Rôles et responsabilités de l'équipe

La division des rôles de chaque membre de l'équipe s'est effectuer assez naturellement. Chaque personne a fait part de ses craintes, faiblesses et connaissances technologique afin d'en arriver a la repartition suivante : 

| Membre | Rôle |
| :--- | :--- |
| Armand Brière | Responsable infrastructure et remise |
| Félix Côté | Responsable Frontend |
| Yassine Hasnaoui | Responsable Backend |
| Joaquin Lee Martinez | Responsable Frontend |
| Charles Thérien | Responsable Backend et remise |

Nous avons divisé l'équipe en deux groupes afin de pouvoir subdiviser le développement.
Les responsables BackEnd sont en charge de la gestion serveur de l'application afin d'offrir une api fonctionnelle et accessible du FrontEnd.
Les responsables FrontEnd sont en charge de l'affichage dynamique de l'application à partir des informations récupérer grâce à l'api.
Le responsable infrastructure est en charge de la mise en place d'un environnement de développement uniforme ainsi que l'intégration du FrontEnd avec le BackEnd.
Deux membres de l'équipe sont aussi en charge des remises des documents ainsi que leur vérifications.

## Gouvernance

### Communication

Pour la communication, nous avons un serveur d'échange text/vocaux dédié au travers du service _Discord_. Dans ce serveur, nous avons plusieurs canaux spécialisé pour échanger sur des sujets spécifiques : état des différentes tâches, échange sur le _backend_ ou sur le _frontend_, par exemple, avec la flexibilité de créer de nouveaux canaux sans difficultés. Une notification est donnée sur ce serveur quand le _repository_ gitlab reçoit des modifications.

### Processus d'escalade et d'approbation des livrables

Nous travaillons avec une double approbation des livrables : le responsable du livrable commence par faire une lecture globale pour s'assurer de la cohérence du dit livrable, avant d'être remonter à un des responsables finaux (Charles ou Armand).

### Gestion des demandes de changements

Les demandes de changements seront remontés au groupe pour discussion de la faisabilité du dit changement. Si le changement est jugé faisable, le groupe nommera un responsable de mise en place du changement : il utilisera les outils et techniques discutées préalablement pour mettre en place le changement, appuyé de d'autre membres de l'équipe au besoin.

### Gestions des risques

Si un risque nouveau est identifié, ou un risque potentiel se réalise, il y aura une convocation de l'équipe dans de bref délai pour discuter de ce risque et de la mise en place de plan de mitigation. Si le risque pose un problème qui ne semble pas gérable par l'équipe, il y aura une escalade pour tenter de trouver des solutions avec l'enseignant.

### Rapport de gestion/status exécutif

Étant donné la grandeur de l'équipe, les status exécutifs seront fait hebdomadairement, lors du cours le mercredi soir, verbalement. Des partages d'information quant aux difficultés rencontrées ou des avancées faites seront par contre faites de façon non-officielle sur le serveur de discussion, au besoin.

## Échéancier

28 mars 2020.
