# React-toolbox, react-router, karma mocha, and react-hot-loader boilerplate.

## Getting Started
1. Clone this repository
2. npm install

## Prepare for running npm package scripts during development
1. cd to this
2. . add-path

This script adds the node_modules/.bin directory to your PATH

## Development

### lint your js files
npm run eslint

Note: eslint, unlike sass-lint, is run automatically by webpack

### lint your sass files
npm run sass-lint

Note: eslint, unlike sass-lint, is run automatically by webpack

### lint everything
npm run lint

### Run tests
npm test

### Start Development Server
1. npm start
2. Visit http://localhost:8080 in your browser

## Deployment
1. npm run build
Note: This also runs sass-lint
2. Copy the files in the 'build' directory to 'public' root folder on your web server
3. Copy the files in the 'www' directory to your web server

