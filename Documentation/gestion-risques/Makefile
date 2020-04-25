default: all

.PHONY: all clean

all: gestion-risques-eisvogel

gestion-risques-eisvogel:
	pandoc gestion-risques-eisvogel.md -o gestion-risques-eisvogel.pdf --from markdown --template eisvogel --listings --toc

clean:
	rm -rf *.pdf