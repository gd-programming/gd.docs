// install_packages.js
// made by Homura
const chalk = require("chalk");
const fs = require("fs");
const childProcess = require("child_process");

const package = require("../package.json");
const missing = Object.keys(package.dependencies)
    .filter((package) => !fs.existsSync(`../node_modules/${package}`));

if (missing.length > 0) {
    console.log(chalk.hex("#79b0fc")("Installing Packages: ") + missing.join(", "));
    childProcess.exec(`npm i --save ${missing.join(" ")}`);
}