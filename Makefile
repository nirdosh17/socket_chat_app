build:
	docker build -t chat_app .

run:
	docker run --rm --name chat_service -p3000:3000 chat_app
