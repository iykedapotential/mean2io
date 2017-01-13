# Mean2io

This project demonstrates how to set up a MEAN stack application using an Angular 2 app that was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Prerequisites
This project have dependencies that require Node 4 or higher, together with NPM 3 or higher. To install Node and NPM, check out the [Nodejs Official Website] (https://nodejs.org/en/download/)

The [angular-cli] (https://github.com/angular/angular-cli) is also required. To install it globally, run:
```bash
$ npm install -g angular-cli
```

## Installation
Clone the repository by running:
```bash
$ git clone https://github.com/iykedapotential/mean2io.git
```

Install dependencies
```bash
$ cd mean2io
$ npm install
```

Set Up local environment variables
The local environment variables set up is being managed using the [dotenv npm package](https://www.npmjs.com/package/dotenv).

Create a `.env` file in the root directory of your project. Add
environment-specific variables on new lines in the form of `NAME=VALUE`.
You can add the following environment variables below as required in this project:

```dosini
MONGOLAB_URI=mongodb://127.0.0.1:27017/mean2io
NODE_ENV=development
PORT=3000
```

That's it.

## Build/Run

To build and serve the app on your browser,
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

You can now view the project on your browser through (http://localhost:3000)
