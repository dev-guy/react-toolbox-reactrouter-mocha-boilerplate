# Minimal Starter Kit for Modern React Web Applications

- [x] Material Design via React Toolbox
- [x] React Router 2
- [x] React Hot Loader 3
- [x] Webpack 1.x
- [x] Babel 6 configured for ES2015
- [x] Sass
- [x] eslint and sass-lint
- [x] Testing via Mocha, Chai, and Karma
- [x] Use latest npm modules available as of July 17 2016

# Supported Platforms

This project will only work on Unix-like systems like OSX and Linux. In other words, it will not work on Windows because:

1. add-path, which is optional, is a shell script
2. sass-lint doesn't have a Webpack loader so I had to improvise something that uses find
3. Some of the scripts in project.json use && to run multiple commands
4. fsevents, which is a dependency of an unknown module, doesn't run on Windows. It's possible that this is no longer an issue.

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
4. In order for React Router to work, make sure your web server serves index.html for every request. Watch [this](https://www.youtube.com/watch?v=cdUyEou0LHg) for more information.
