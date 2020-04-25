.DEFAULT_GOAL := png

PUML = plantuml -charset UTF-8
SOURCES := $(shell ls *.puml)

PNGS = $(SOURCES:.puml=.png)

.PHONY: clean, check

all: png svg

%.png: %.puml
	$(PUML) ./$<

%.svg: %.puml
	$(PUML) -tsvg ./$<

clean:
	rm -rf $(PNGS) $(SVGS)

check:
	$(PUML) -testdot

png: $(PNGS)
svg: $(SVGS)
