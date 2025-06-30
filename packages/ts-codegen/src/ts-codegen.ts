#!/usr/bin/env node
import minimist from 'minimist';

import { cli } from './cli';

let argv = minimist(process.argv.slice(2));

(async () => {
  await cli(argv);
})();
