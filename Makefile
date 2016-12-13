
all:	deps raygancom

deps:
	git submodule update --init --recursive

raygancom: divine
	cp dep/divine/out/divine bin/divine

divine:
	$(MAKE) -C dep/divine
