/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const childProcess = require("child_process");
require(`${__dirname}/scripts/install_packages.js`); // install packages

const chalk = require("chalk");

// serve data
let command = `node ${__dirname}/node_modules/docsify-cli/bin/docsify serve ./docs --port 9505`;

if (require("os").platform() === "win32") {
    command = `node "${__dirname}/node_modules/docsify-cli/bin/docsify" serve ./docs --port 9505`;
}

console.log(chalk.hex("#66d9ff")("Running Command: ") + command);

const docsProcess = childProcess.exec(command);

console.log("");

docsProcess.on("exit", () => process.exit(0));