/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const childProcess = require("child_process");
const chalk = require("chalk");

// package installer
require(`${__dirname}/scripts/install_packages.js`);

// serve data
console.log(chalk.hex("#66d9ff")("Running Command: ") +`node "${__dirname}/node_modules/docsify-cli/bin/docsify" serve ./docs --port 9505`);
let docsProcess = childProcess.exec(`node "${__dirname}/node_modules/docsify-cli/bin/docsify" serve ./docs --port 9505`);

docsProcess.on("exit", () => {
    process.exit(0);
})