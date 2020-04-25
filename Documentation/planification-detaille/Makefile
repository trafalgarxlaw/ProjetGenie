default: all

.PHONY: all clean

all: planification-detaille-eisvogel

planification-detaille-eisvogel:
	pandoc planification-detaille-eisvogel.md -o planification-detaille-eisvogel.pdf --from markdown --template eisvogel --listings --toc

clean:
	rm -rf *.pdf
