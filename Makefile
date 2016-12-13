
all:	deps raygancom

deps:
	git submodule update --remote

raygancom: divine
	cp dep/divine/divine bin/divine

divine:
	$(MAKE) -C dep/divine
