shell:
	docker run -it --rm --entrypoint=/bin/ash -v $(shell pwd):/app basic-component
