---
title: "INF6150 - Hiver 2020"
subtitle: "La gestion de risques dans un projet | Equipe 4"
titlepage: true
titlepage-rule-color: "360049"
titlepage-background: "../assets/background.pdf"
author: [Armand Brière, Félix Côté, Yassine Hasnaoui, Joaquin Lee Martinez, Charles Thérien]
toc-own-page: true
---
# Besoins et envergure

## Objectif du document

Le but de faire une analyse concernant la gestion de risques dans un projet est de mettre en avant les différents risques qui ont été discutés dans les documents précédents afin de mieux préparer l'équipe et le client à faire leur faire face. Une vision globale du projet est nécessaire pour tenir compte de tous les éléments pouvant générer de l'incertitude et des risques provenant de l'ensemble des parties prenantes. Une fois la liste des risques établie, il sera plus simple d'anticiper les mauvaises surprises et donc améliorer notre marge de manoeuvre lorsque ceux-ci se présentent.

Ce document présente une liste détaillée de l'ensemble des risques identifiée dans ce projet ainsi que leurs différents impacts potentiels. Les risques retenus sont alors détaillés au maximum afin de préparer un ensemble de mesure de sécurité à prendre si l'un d'entre eux se manifeste.

En gestion de projet, et surtout en informatique et logiciel, le risque zéro n'existe pas ce qui rend d'autant plus importante la création de ce document.

## Objectif du projet

Le but est de pouvoir avoir de l'information sur des jeux de société.

L'objectif du projet est d'avoir une application qui permettra à l'utilisateur de rechercher une base de données contenant les informations sur des jeux de société, consulter l'information spécifique d'un jeu de société et de garder en mémoire ses jeux préférés.

Le résultat de ce projet est une application prête à être mise en production et déployée pour la satisfaction des utilisateurs potentiels.

## Terminologie

- Risque : Un danger éventuel, plus ou moins prévisible, inhérent à une situation ou à une activité.
- Probabilité d'occurrence : Probabilité théorique que le risque ait lieu.
- Impact sur l'horaire : Impact potentiel sur la livraison du projet et/ou les dates de fin de sprints.
- Impact sur la qualité : Impact potentiel sur la qualité générale et/ou spécifique du produit final.
- Impact sur la fonctionnalité : Impact potentiel sur la fonctionnalité générale et/ou spécifique du produit final.
- Total : Risque retenu ou non.

- Risque retenu : Risque important devant être analysé en profondeur.

# Planification de la gestion des risques

## Risque 01

- Risque : mauvaise estimation des délais des livrables selon le rôle assigné aux membres de l'équipe
- Probabilité d'occurrence : 20%
- Impact sur l'horaire : Élevé
- Impact sur la qualité : Moyen
- Impact sur la fonctionnalité : nul
- Total : Non retenu

## Risque 02

- Risque : Manque de compétences
- Probabilité d'occurrence : 45%
- Impact sur l'horaire : Élevé
- Impact sur la qualité : Élevé
- Impact sur la fonctionnalité : Moyen
- Total : Retenu

## Risque 03

- Risque : Le site web "boardgamegeek.com" ferme ou n'est plus à jour(source de la base de données)
- Probabilité d'occurrence : 10%
- Impact sur l'horaire : nul
- Impact sur la qualité : Élevé
- Impact sur la fonctionnalité : nul
- Total : Non retenu

## Risque 04

- Risque : Le site web n'est pas adopté par les utilisateurs ciblés, car le site n'offre pas la possibilité d'acheter ou de jouer aux jeux recherchés
- Probabilité d'occurrence : 15%
- Impact sur l'horaire : Moyen
- Impact sur la qualité : Élevé
- Impact sur la fonctionnalité : Élevé
- Total : Retenu

## Risque 05

- Risque : Absentéisme (raison d'absence : Imprévu, santé, famille, etc.)
- Probabilité d'occurrence : 10%
- Impact sur l'horaire : Faible
- Impact sur la qualité : Moyen
- Impact sur la fonctionnalité : nul
- Total : Retenu

## Risque 06

- Risque : Conflits au sein de l'équipe (par exemple, différence dans la manière que l'un veut procéder pour une partie)
- Probabilité d'occurrence : 20%
- Impact sur l'horaire : Élevé
- Impact sur la qualité : Élevé
- Impact sur la fonctionnalité : Moyen
- Total : Retenu

# Analyse des risques retenus

## Risque 01

- Risque : Manque de compétences
- Action à entreprendre : Faire une réunion de partage de connaissance pour que ceux qui connaissent les technologies utilisées puissent augmenter les connaissances des autres.
- Comment détecter ? : Une baisse de productivité/des PR qui ne sont pas au niveau attendu à la fin d'un sprint.
- Quelle action entreprendre ? : Discussion avec les membres concernés et l'équipe au complet pour trouver une solution en équipe et s'entre aider.
- Qui interviendra ? : Charles

## Risque 02

- Risque : Absentéisme
- Action à entreprendre : Si c'est juste le fait qu'il ne peut être présent à une réunion ou le moment où on est supposé de se réunir pour travailler en groupe, on peut tout simplement arranger le tout par discord (Application permettant des discussions audio/video) et la personne concerner aidera à distance a réaliser la tâche qu'elle devait accomplir. De toute façon la partie de chacun est dans le backlog sur GitLab, donc il est possible de continuer ou de s'attribuer la partie d'une autre personne en cas de problème d'absentéisme afin de garder les taches restantes claires pour toute l'équipe. Cependant il faudra prendre en considération le temps d'adaptation des autres membres au code de la personne absente, pour qu'ils comprennent et arrivent à se situer où l'absent était rendu.
- Comment détecter ? : Le membre est souvent absent ou il décide de nous avertir qu'il ne pourra pas être présent.
- Quelle action entreprendre ? : Discussion avec les membres pour trouver une solution et comment se séparer le reste des tâches à accomplir avec un membre en moins.
- Qui interviendra ? : Toute l'équipe

## Risque 03

- Risque : Conflits au sein de l'équipe
- Action à entreprendre : Établir une procédure de résolution de conflit claire dès le départ, de cette manière lors des conflits on aura une façon de procéder pour avoir un compromis et régler le problème. Cette procédure a été discutée dans l'étude de faisabilité.
- Comment détecter ? : tension lors des réunions entre les membres, un membre peut également tout simplement le mentionner.
- Quelle action entreprendre ? : Discussion avec les membres concernés pour trouver une solution en équipe et s'entre-aider.
- Qui interviendra ? : Charles et les membres de l'équipe (pour aider, assister, trouver un compromis)

## Risque 04

- Risque : Le site web n'est pas adopté par les utilisateurs ciblés, car le site n'offre pas la possibilité d'acheter ou de jouer aux jeux recherchés
- Action à entreprendre : Aucune action à entreprendre, nous ne pouvons contrôlé ce fait.
- Comment détecter ? : Le nombre de visites est plus bas qu'attendu/les revenus publicitaires sont plus bas qu'attendu
- Quelle action entreprendre ? : Évaluer la faisabilité d'introduire des liens vers des sites marchands, avec possiblement une entente avec eux.
- Qui interviendra ? : Personne, cela sort de la portée du projet/cours.

