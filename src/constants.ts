import chalk from "chalk";

export const PROGRAM = "felix";
export const VERSION = process.env.FELIX_VERSION || "1.0.0";
export const USAGE = chalk.yellow.bgMagenta.bold(`
                                                                           
        USAGE:                                                             
            felix  -p | --path <relative-path>                             
            -v      --version   -> get felix version                       
            -h      --help      -> get help                                
                                                                           `);
