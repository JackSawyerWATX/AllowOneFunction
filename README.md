# Allow One Function

A small JavaScript utility that wraps a function so it can run only once. The first invocation returns the original function's result; every later invocation returns `undefined`.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Security](#security)
- [How to Contribute?](#how-to-contribute)
- [What's Next?](#whats-next)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## About

`once(fn)` returns a wrapper around `fn`. It calls `fn` on the first invocation and prevents it from being called again.

```js
var addOnce = once(function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
});

console.log(addOnce(2, 3)); // 5
console.log(addOnce(2, 3)); // undefined
```

## Features

- Calls the wrapped function at most once.
- Returns the original result on the first call.
- Returns `undefined` on every later call.
- Preserves the original function's arguments and `this` value.
- Includes a runnable example.

## Tech Stack

- JavaScript
- Node.js

## Architecture

The `once` function uses a closure-scoped `called` flag. The returned wrapper checks the flag before invoking the original function. After the first invocation, the flag prevents any further calls.

## Project Structure

```text
AllowOneFunction/
|-- README.md
`-- run.js
```

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/).

### Run the example

From the project directory, run:

```powershell
node run.js
```

Expected output:

```text
5
undefined
```

## Configuration

This project has no configuration files or environment variables.

## Security

The utility does not process network requests, files, credentials, or user input by itself. When wrapping functions that perform sensitive operations, ensure the wrapped function validates its own inputs and handles secrets safely.

## How to Contribute?

1. Fork the repository.
2. Create a branch for your change.
3. Keep changes focused and verify the example with `node run.js`.
4. Open a pull request describing the behavior you changed or added.

## What's Next?

- Export `once` as a reusable module.
- Add automated tests for return values, arguments, and `this` preservation.
- Add package metadata and an npm script for running tests.

## License

No license has been specified for this repository. Add a license file before distributing or reusing the code outside the repository.

## Acknowledgements

Built as a focused JavaScript exercise demonstrating closures and higher-order functions.

## Author

[JackSawyerWATX](https://github.com/JackSawyerWATX)
