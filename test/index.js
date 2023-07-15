const RapidEnv = require('../src/index');
const { join } = require('node:path');

const env = RapidEnv(join(__dirname, '.env'));

env.load();
