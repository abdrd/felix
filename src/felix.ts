#!/usr/bin/env node
import { getAllItems, DirChildrenType } from "./dir";
import { Config } from "./flags";
import { VERSION, PROGRAM, USAGE } from "./constants";
import { parseTodos } from "./parseTodos";
import File from "./File";
import Todo from "./Todo";

const Felix = () => {
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
  /*
  for (const file of files) {
    const newFile: File = new File(file.path, file.name)
    const todos: Todo[] = parseTodos(newFile.path)
    newFile.setTodos(todos)
  }
*/

  parseTodos("./src/dir.ts");
  // create a file - todo relationship here
  // parse todos and create new todo instances every time
  // assign todos to a file
  // get them here
};

Felix();
