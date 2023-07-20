.PHONY: build
build:
	@DOCKER_BUILDKIT=1 docker build --pull -t lucasgsousa/pocs-nodejs-https:v0.0.1 -f Dockerfile .

.PHONY: push
push:
	@docker push lucasgsousa/pocs-nodejs-https:v0.0.1

.PHONY: run
run:
	@docker run --name pocs-nodejs-https -d -p 8443:8443 lucasgsousa/pocs-nodejs-https:v0.0.1

.PHONY: view
view-container:
	@docker container ls -a --filter name=pocs-nodejs-https

.PHONY: start
start:
	@docker start pocs-nodejs-https

.PHONY: stop
stop:
	@docker stop pocs-nodejs-https

.PHONY: remove
remove:
	@docker rm pocs-nodejs-https
