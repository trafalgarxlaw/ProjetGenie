default: all

.PHONY: all clean

all: charte-projet charte-de-projet-eisvogel

charte-projet:
	pandoc -s -V geometry:margin=1in -o charte-de-projet.pdf cover-page-charte.md charte-de-projet.md

charte-de-projet-eisvogel:
	pandoc charte-de-projet-eisvogel.md -o charte-de-projet-eisvogel.pdf --from markdown --template eisvogel --listings --toc

clean:
	rm -rf *.pdf