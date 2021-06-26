#!/usr/bin/env node
import { Config } from "./Config"
import {
    VERSION,
    USAGE,
    OUTPUT_FILE_NAME,
    OUTPUT_PATH_ERROR,
} from "./constants"
import { rangeAllFiles } from "./helpers"
import { appendFileSync, writeFileSync } from "fs"

const Felix = () => {
    const args = process.argv.slice(2, process.argv.length)
    let PROGRAM_CONFIG: Config = {
        printVersion: false,
        printHelp: false,
        root: "./",
        outputPath: "./",
        clean: false,
    }

    for (const arg of args) {
        const ARG_PATH = process.argv.slice(
            process.argv.indexOf(arg),
            process.argv.indexOf(arg) + 2
        )[1]

        switch (arg) {
            case "-h":
            case "--help":
                PROGRAM_CONFIG.printHelp = true
                break
            case "-v":
            case "--version":
                PROGRAM_CONFIG.printVersion = true
                break
            case "-p":
            case "--path":
                // get the path
                PROGRAM_CONFIG.root = ARG_PATH
                break
            case "-op":
            case "--output-path":
                PROGRAM_CONFIG.outputPath = ARG_PATH
        }
    }

    if (PROGRAM_CONFIG.printHelp) {
        console.log(USAGE)
        return
    }
    if (PROGRAM_CONFIG.printVersion) {
        console.log(VERSION)
        return
    }

    const results = rangeAllFiles(PROGRAM_CONFIG.root)

    // output todos
    const output = []
    for (const result of results) {
        if (result.todos.length > 0) {
            output.push(
                "\n" +
                    result.path +
                    "\n" +
                    result.todos.map(todo => "\t" + todo.text).join("\n")
            )
        }
    }

    // go to the output directory
    try {
        process.chdir(PROGRAM_CONFIG.outputPath)
    } catch (e) {
        console.log(OUTPUT_PATH_ERROR)
    }

    // create the TODO file
    writeFileSync(OUTPUT_FILE_NAME, "")

    // ouput to the TODO file
    for (const out of output) {
        appendFileSync(OUTPUT_FILE_NAME, out)
    }
}

Felix()
