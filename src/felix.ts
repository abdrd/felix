#!/usr/bin/env node
import { Config, FormatType } from "./config"
import { VERSION } from "./constants"
import logUsage from "./log/usage"
import { FLAGS } from "./constants"
import { produceTextOutput } from "./output/text/write"
import { produceHTMLOutput } from "./output/html/write"

const Felix = () => {
    const args = process.argv.slice(2, process.argv.length)
    let PROGRAM_CONFIG: Config = {
        printVersion: false,
        printHelp: false,
        root: "./",
        outputPath: "./",
        format: FormatType.text,
    }

    for (const arg of args) {
        const ARG_PATH = process.argv.slice(
            process.argv.indexOf(arg),
            process.argv.indexOf(arg) + 2
        )[1]

        switch (arg) {
            // help flag
            case FLAGS[0].flag:
            case FLAGS[0].flagVerbose:
                PROGRAM_CONFIG.printHelp = true
                break
            // version flag
            case FLAGS[1].flag:
            case FLAGS[1].flagVerbose:
                PROGRAM_CONFIG.printVersion = true
                break
            // root flag
            case FLAGS[2].flag:
            case FLAGS[2].flagVerbose:
                // get the path
                PROGRAM_CONFIG.root = ARG_PATH
                break
            // output flag
            case FLAGS[3].flag:
            case FLAGS[3].flagVerbose:
                PROGRAM_CONFIG.outputPath = ARG_PATH
        }
    }

    if (PROGRAM_CONFIG.printHelp) return logUsage(FLAGS)
    if (PROGRAM_CONFIG.printVersion) return console.log(VERSION)

    if (PROGRAM_CONFIG.format === FormatType.html)
        return produceHTMLOutput(PROGRAM_CONFIG.root, PROGRAM_CONFIG.outputPath)

    produceTextOutput(PROGRAM_CONFIG.root, PROGRAM_CONFIG.outputPath)
}

Felix()
