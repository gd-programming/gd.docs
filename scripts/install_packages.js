// install_packages.js
// made by Homura
const chalk = require("chalk");
const fs = require("fs");
const child_process = require("child_process");

const Package = require(`${__dirname}/../package.json`);
const PackageKeys = Object.keys(Package.dependencies);

const packages = [];
const packageInstaller = (() => {
    PackageKeys.forEach((package) => {
        if (!fs.existsSync(`${__dirname}/../node_modules/${package}`)) packages.push(package);
    });

    if (packages.length > 0) {
        console.log(chalk.hex("#79b0fc")("Installing Packages: ") + packages.join(", "));
        child_process.exec(`npm i --save ${packages.join(" ")}`);
    }
})();