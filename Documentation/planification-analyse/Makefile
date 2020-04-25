default: all

.PHONY: all clean

all: planification-analyse-eisvogel

planification-analyse-eisvogel:
	pandoc planification-analyse-eisvogel.md -o planification-analyse-eisvogel.pdf --from markdown --template eisvogel --listings --toc

clean:
	rm -rf *.pdf