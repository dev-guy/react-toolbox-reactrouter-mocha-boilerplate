# Minimal Starter Kit for Modern React Web Applications

- [x] Google's Material Design look and feel via React Toolbox
- [x] React Router 2
- [x] React Hot Loader 3
- [x] Webpack 1.x
- [x] Sass
- [x] Mocha and Karma, for Testing
- [x] Use the latest npm modules available on 2016 July 17

# Supported Platforms

This project will only work on Unix-like systems like OSX and Linux. In other words, it will not work on Windows.

# Getting Started
1. Clone this repository
2. npm install

# Development

## Prepare your command line environment (optional)
* source add-path

add-path adds the node_modules/.bin directory to your PATH so you can run commands like 'eslint' from the command line. "npm run" does this for you.

## lint your js files
* npm run eslint (eslint, unlike sass-lint, is run automatically by Webpack)

## lint your sass files
* npm run sass-lint (eslint, unlike sass-lint, is run automatically by Webpack)

## lint everything
* npm run lint

## Run tests
* npm test

## Start Development Server
1. npm start
2. Visit http://localhost:8080 in your browser

# Deploy
1. npm run build (this also runs lint)
2. Copy the files in the 'build' directory to 'public' root folder on your web server
3. Copy the files in the 'www' directory to your web server
