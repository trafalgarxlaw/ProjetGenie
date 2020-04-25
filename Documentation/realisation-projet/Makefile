default: all

.PHONY: all clean

all: realisation-projet-eisvogel

realisation-projet-eisvogel:
	pandoc realisation-projet-eisvogel.md -o realisation-projet-eisvogel.pdf --from markdown --template eisvogel --listings --toc

clean:
	rm -rf *.pdf
