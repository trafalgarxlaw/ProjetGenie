default: all

.PHONY: all clean

all: faisable faisable-eisvogel

faisable:
	pandoc -s -V geometry:margin=1in -o etude-de-faisabilite.pdf cover-page-etude.md etude-de-faisabilite.md

faisable-eisvogel:
	{ cat cover-page-charte-eisvogel.md; cat etude-de-faisabilite.md; } > etude-de-faisabilite-eisvogel.md
	pandoc etude-de-faisabilite-eisvogel.md -o etude-de-faisabilite-eisvogel.pdf --from markdown --template eisvogel --listings

clean:
	rm -rf *.pdf