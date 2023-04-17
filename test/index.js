const Environments = require('../src/index');
const { join } = require('node:path');

const env = Environments(join(__dirname, '.env'));

env.load();
console.log(process.env.TEST); // => HELLO FROM ENV

env.setVariable('TEST', 'test');
console.log(process.env.TEST); // => test

env.deleteVariable('TEST');
console.log(process.env.TEST); // => undefined

env.setVariable('TEST', 'HELLO FROM ENV');
console.log(process.env.TEST); // => HELLO FROM ENV
