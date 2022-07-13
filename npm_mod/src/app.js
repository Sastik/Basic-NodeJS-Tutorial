const chalk = require("chalk");
const validator = require('validator');

console.log(chalk.green.inverse("succesfully Done...."));

const res = validator.isEmail('cse20055@cemk.ac.i');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));