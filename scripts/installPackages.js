// install_packages.js
// made by Homura
// refactored by LeonardoBagi
const chalk = require("chalk");
const childProcess = require("child_process");

const package = require("../package.json");
const missing = Object.keys(package.dependencies).filter(package => {
    try {
        require.resolve(package);
        return false;
    } catch {
        return true;
    }
});

if (missing.length > 0) {
    console.log(chalk.hex("#79b0fc")("Installing Packages: ") + missing.join(", "));
    childProcess.execSync(`npm i ${missing.join(" ")}`);
}
