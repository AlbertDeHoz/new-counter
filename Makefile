PACKAGE_NAME=new-counter
THIS_DIR=$(shell pwd)

shell:
	docker run -it --rm \
				-v $(THIS_DIR):/app \
				--entrypoint=/bin/ash \
				-p 3000:3000 \
				$(PACKAGE_NAME)
