/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const childProcess = require("child_process");
const chalk = require("chalk");

// package installer
require(`${__dirname}/scripts/install_packages.js`);

// serve data
let command = `node ${__dirname}/node_modules/docsify-cli/bin/docsify serve ./docs --port 9505`;
if (require("os").platform() === "win32") {
    command = `node "${__dirname}/node_modules/docsify-cli/bin/docsify" serve ./docs --port 9505`;
}

console.log(chalk.hex("#66d9ff")("Running Command: ") + command);
const docsProcess = childProcess.exec(command);
console.log("");

if (process.argv[2] == "--prod") {
    console.log(chalk.hex("#66d9ff")("Fetching latest Git changes..."));
    childProcess.exec("git pull origin master");
    require(`${__dirname}/scripts/git_pull.js`);
}

docsProcess.on("exit", () => process.exit(0));