# type-system-typescript

This repository is built to be opened in Gitpod.io.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/blalasaadri/type-system-typescript)

## Available commands
Once the Gitpod environment has started, you will have the following custom commands available:
- `build` will compile the current project (equivalent to `npm run build`)
- `clean` will delete compiled artifacts (equivalent to `npm run clean`)
- `run` will run the application, using `src/index.ts` as the starting point (equivalent to `npm start`)
- `run-tests` will run the tests (equivalent to `npm test`)
- `lint` will lint the application (eqivalent to `npm run lint`)
- `repl` will start ts-node, which can be used as a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) (equivalent to `ts-node`)

In addition to these, everything under `node_modules/.bin` will be available on the PATH.

## Project structure
In this project, all production and test code is within the `./src/` directory.
When compiled (using `build` or `npm run build`), compiled JavaScript files and source maps will be available in the `./dist/` directory.

All files which are prefixed with `.gitpod` are intended for the use with Gitpod.io and are, in general, not relevant to the user.
The same is true for the directory `.theia`.
