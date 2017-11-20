install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish: 
	npm publish

lint: 
	npm run eslint src/*.js
	npm run eslint src/bin/*.js

start:
	babel-node src/bin/brain-games.js
