#!/usr/bin/env node
import { Config } from "./flags";
import { VERSION, USAGE, OUTPUT_FILE_NAME } from "./constants";
import { rangeAllFiles } from "./range";
import { appendFileSync, writeFileSync } from "fs";

const Felix = () => {
  const args = process.argv.slice(2, process.argv.length);
  let PROGRAM_CONFIG: Config = {
    printVersion: false,
    printHelp: false,
    root: ".",
  };

  for (const arg of args) {
    switch (arg) {
      case "-h":
      case "--help":
        PROGRAM_CONFIG.printHelp = true;
        break;
      case "-v":
      case "--version":
        PROGRAM_CONFIG.printVersion = true;
        break;
      case "-p":
      case "--path":
        // get the path
        PROGRAM_CONFIG.root = process.argv.slice(
          process.argv.indexOf(arg),
          process.argv.indexOf(arg) + 2
        )[1];
        break;
    }
  }
  
  if (PROGRAM_CONFIG.printHelp) console.log(USAGE);
  if (PROGRAM_CONFIG.printVersion) console.log(VERSION);

  const results = rangeAllFiles(PROGRAM_CONFIG.root)
  
  // output todos
  const output = []
  for (const result of results) {
    if (result.todos.length > 0) {
      output.push("\n" + result.path + "\n" + result.todos.map(todo => "\t" + todo.text).join("\n"))
    }
  }

  // create the TODO file 
  writeFileSync(OUTPUT_FILE_NAME, "")

  // ouput to the TODO file
  for (const out of output) {
    appendFileSync(OUTPUT_FILE_NAME, out)
  }
};

Felix();