import chalk from "chalk";
import cows from "cows";

function coolsolelog(message) {
    const cow = cows()[Math.floor(Math.random() * cows().length)]
    console.log(chalk.blue.bold("________"))
    console.log(chalk.green(`/         \\`))
    console.log(chalk,green`({ ${message} })`)
    console.log(chalk.green(`\\         /`))
    console.log(chalk.yellow(cow))
    console.log(chalk.blue.bold("________"))
}

export default coolsolelog