/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const childProcess = require("child_process");
const chalk = require("chalk");
const os = require("os");

require("./scripts/installPackages.js"); // install packages

const wrapQuotes = s => `"${s}"`;

const DOCSIFY_PATH = "./node_modules/docsify-cli/bin/docsify";

// serve data
const command = `node ${os.platform() === "win32" ? wrapQuotes(DOCSIFY_PATH) : DOCSIFY_PATH} serve ./docs --port 9505`;

console.log(`${chalk.hex("#66d9ff")("Running Command: ")} ${command}\n`);

const docsProcess = childProcess.exec(command);

docsProcess.on("exit", () => process.exit(0));
