const chalk = require('chalk');
const jwt = require('jsonwebtoken');

const [, , options, secret, nameOrToken ] = process.argv;

if (!options || !secret || !nameOrToken) {
  return console.log(chalk.red('Faltan argumentos'));
}

const singToken = (payload, secret) => {
  return jwt.sign(payload, secret);
}

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
}

if (options == 'sing') {
  console.log(chalk.green(singToken({ sub: nameOrToken}, secret)));
} else if (options == 'verify') {
  const verify = verifyToken(nameOrToken, secret)
  console.log(verify);
} else {
  console.log(chalk.yellow('Opciones aceptadas: --sing --verify'));
}