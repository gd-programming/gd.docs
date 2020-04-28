const chalk = require("chalk");
setInterval(() => {
    require("child_process").execSync("git pull origin master");    
    console.log(chalk.hex("#66d9ff")("Fetching latest Git changes..."));
}, 5000);