test:
	@NODE_ENV=test ./node_modules/.bin/mocha test \
	--compilers js:babel-register \
	--require should \
	--require babel-polyfill \
	--recursive

.PHONY: test
