#!/usr/bin/env node
import { getAllItems, DirChildrenType } from "./dir";
import { Config, AVAILABLE_FLAGS } from "./flags";
import { VERSION, PROGRAM, USAGE } from "./constants";
import { parseTodos } from "./parseTodos";

const main = () => {
  const args = process.argv.slice(2, process.argv.length);
  let PROGRAM_CONFIG: Config = {
    printVersion: false,
    printHelp: false,
    root: "./",
  };

  if (args.length === 0) {
    console.log(USAGE);
    return;
  }

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

  const files = getAllItems(DirChildrenType.File, PROGRAM_CONFIG.root);

  // ...
};

main();
