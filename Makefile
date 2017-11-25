install:
	npm install

publish:
	npm publish

lint:
	npm run eslint -- src/*.js
	npm run eslint -- src/bin/*.js

start:
	babel-node
