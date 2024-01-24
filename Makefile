install:
	npm ci

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

lint-fix:
	npx eslint . --fix

lint:
	npx eslint