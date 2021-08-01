import chalk from "chalk"
import { Flag } from "../Flag"

function logUsage(flags: Flag[]) {
    console.log("\tfelix [-p, --path <relative-path>]")

    flags.forEach(f => {
        let spaces = 30 - f.flagVerbose.length

        // to prevent infinite loop in case spaces turns out to be negative
        if (spaces < 0) spaces = 1

        let infix = ""

        for (let i = 1; i <= spaces; i++) infix += " "

        console.log(
            chalk.yellow.bold(
                `\t\t${f.flag}\t${f.flagVerbose}${infix}${f.flagDescription}`
            )
        )
    })
}

export default logUsage
