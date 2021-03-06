PROJECT_SOURCE:=$(shell pwd)
build:
	docker build -t chat_app .

run:
	docker run --rm --name chat_service \
		-v $(PROJECT_SOURCE):/usr/src/app -p3000:3000 chat_app
