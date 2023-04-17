# environments

Environments is a zero-dependency library for managing environment variables in Node.js.

## Installation

```bash
npm install environments
```

## Usage

```js
const env = require('environments')();

env.load(); // Loads the environment variables from the .env file
env.setVariable('TEST', 'hello'); // Sets the TEST variable to hello
env.deleteVariable('TEST'); // Deletes the TEST variable
```

## Comments
    
```dosini
# This is a comment

TEST="hello" # This is also a comment
```

## Multiple Values

```dosini
KEY="---- BEGIN MY KEY ----

...
hello
...

---- END MY KEY ----"
```

## Parsing
```js
const env = require('environments')();

console.log(env.parseVariables()) // { TEST: 'hello' }
```

## Custom .env Path

```js
const env = require('environments')("./src/.env" /* Path to .env file */);

env.load();
```