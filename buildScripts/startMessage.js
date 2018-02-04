// the following two lines are ES5
// var chalk = require('chalk');
// console.log(chalk.green('Starting the app in dev mode...'));

// with babel transpiler, we write latest JS code and it gets transpiled to ES5 (in order to work with environments that don't support >ES5)
import chalk from 'chalk';
console.log(chalk.green('Starting in development env...')); // eslint-disable-line no-console
