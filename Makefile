install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish: 
	npm publish

lint: 
	npm run eslint -- src
	npm run eslint -- src/bin

start:
	babel-node
