### language: ts (tsc vs babel)

- https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

**chosen: tsc**

- because simple
- https://dev.to/macmacky/how-to-debug-nodejs-typescript-code-in-vscode-4o27
- https://khalilstemmler.com/blogs/typescript/node-starter-project/

**rejected: babel-node**

- https://www.robinwieruch.de/minimal-node-js-babel-setup
-

### linting: eslint + prettier

- https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

### logger: pino-http + pino-pretty

- https://github.com/pinojs/pino-http

### jest

- https://dev.to/muhajirdev/unit-testing-with-typescript-and-jest-2gln

## Setup

```
npm init
npm install -D typescript
npx tsc --init
# tweak .tsconfig.json

npm install -D eslint
npx eslint --init

# ✔ How would you like to use ESLint? · style
# ✔ What type of modules does your project use? · esm
# ✔ Which framework does your project use? · none
# ✔ Does your project use TypeScript? · No / Yes
# ✔ Where does your code run? · browser
# ✔ How would you like to define a style for your project? · guide
# ✔ Which style guide do you want to follow? · standard
# ✔ What format do you want your config file to be in? · JSON
# ✔ Would you like to install them now with npm? · No / Yes

npm install -D prettier eslint-config-prettier eslint-plugin-prettier
# added .prettierc.js

npm instal -D nodemon
# added scripts to package.json

npm install express
npm install -D @types/express

npm install pino pino-http pino-pretty
npm install -D @types/pino @types/pino-http

npm install -D jest @types/jest ts-jest source-map-support @types/source-map-support

# added jest.config.js
# added "include": ["src/**/*"], "exclude": ["node_modules", "**/*.spec.ts"] to tsconfig.json
# add env "jest": true, to .eslintrc.json
# added test script
# added ci script

git init
# added . gitignore https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore + build

```
