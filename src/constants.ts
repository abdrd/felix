import chalk from "chalk"
import { Flag } from "./Flag"

export const PROGRAM = "felix"
export const VERSION = process.env.FELIX_VERSION || "1.1.0"
export const OUTPUT_FILE_NAME = "TODO"

export const OUTPUT_PATH_ERROR = chalk.red.bold(
    "ERR: check -op argument. Directory may not exist"
)

export const FLAGS: Flag[] = [
    {
        flag: "-h",
        flagVerbose: "--help",
        flagDescription: "get help",
    },
    {
        flag: "-v",
        flagVerbose: "--version",
        flagDescription: "print out the version",
    },
    {
        flag: "-p",
        flagVerbose: "--path",
        flagDescription: "path to look for todos in",
    },
    {
        flag: "-op",
        flagVerbose: "--output-path",
        flagDescription: "path to output the TODO file",
    },
]
