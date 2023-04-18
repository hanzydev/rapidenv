# rapidenv

RapidEnv is a zero-dependency library for managing environment variables in Node.js.

## Installation

```bash
npm install rapidenv
```

## Usage

```js
const env = require('rapidenv')();

env.load(); // Loads the environment variables from the .env file
env.setVariable('TEST', 'hello'); // Sets the TEST variable to hello
env.deleteVariable('TEST'); // Deletes the TEST variable
```

## Comments
    
```dosini
# This is a comment

TEST="hello" # This is also a comment
```

## Multiline Values

```dosini
KEY="---- BEGIN MY KEY ----

...
hello
...

---- END MY KEY ----"
```

## Parsing
```js
const env = require('rapidenv')();

console.log(env.parseVariables()) // { TEST: 'hello' }
```

## Custom .env Path

```js
const env = require('rapidenv')("./src/.env" /* Path to .env file */);

env.load();
```