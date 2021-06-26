import chalk from "chalk"

export const PROGRAM = "felix"
export const VERSION = process.env.FELIX_VERSION || "1.1.0"
export const OUTPUT_FILE_NAME = "TODO"
export const USAGE = chalk.yellow.bold(`
                                                                           
        USAGE:                                                             
            felix  -p | --path <relative-path>                             
            -v      --version                    -> get felix version                       
            -h      --help                       -> get help 
            -op     --output <output-directory   -> set output path                             
                                                                           `)

export const OUTPUT_PATH_ERROR = chalk.red.bold(
    "ERR: check -op argument. Directory may not exist"
)
