default: all

.PHONY: all clean

all: realisation-projet-eisvogel

realisation-projet-eisvogel:
	pandoc rapport-suivi.md -o rapport-suivi.pdf --from markdown --template eisvogel --listings --toc

clean:
	rm -rf *.pdf
