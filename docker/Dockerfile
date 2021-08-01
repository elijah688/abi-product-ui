FROM node:14-alpine3.14

ENV PYTHONUNBUFFERED=1
RUN echo 'https://uk.alpinelinux.org/alpine/edge/main' >> /etc/apk/repositories && \
	echo 'https://uk.alpinelinux.org/alpine/edge/community' >> /etc/apk/repositories && \
	apk add \
	--no-cache \  
	--upgrade\
	python2 \ 
	make \
	g++ \
	git && \
	npm install -g @ionic/cli
