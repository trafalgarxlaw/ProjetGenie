default: pdf

.PHONY: pdf faisable charte-projet planification-analyse gestion-risques planification-detaille realisation-projet fiche images rapport-suivi

Parts := $(wildcard *.md)

pdf: faisable images charte-projet planification-analyse gestion-risques planification-detaille realisation-projet rapport-suivi

faisable:
	$(MAKE) -C etude-de-faisabilite

charte-projet:
	$(MAKE) -C charte-de-projet

planification-analyse:
	$(MAKE) -C planification-analyse

gestion-risques:
	$(MAKE) -C gestion-risques

planification-detaille:
	$(MAKE) -C planification-detaille

realisation-projet:
	$(MAKE) -C realisation-projet

rapport-suivi:
	$(MAKE) -C rapport-suivi

fiche:
	pandoc -s -V geometry:margin=1in -o fiche.pdf fiche.md

images:
	$(MAKE) -C Diagramme

clean:
	$(MAKE) -C Diagramme/ clean
	$(MAKE) -C etude-de-faisabilite/ clean
	$(MAKE) -C charte-de-projet/ clean
	$(MAKE) -C planification-analyse/ clean
	$(MAKE) -C gestion-risques/ clean
	$(MAKE) -C planification-detaille/ clean
	$(MAKE) -C realisation-projet/ clean
