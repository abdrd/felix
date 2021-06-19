import { readFile, readFileSync } from "fs";
import Todo from "./Todo";

export const parseTodos = (pathToFile: string) => {
  // match  // TODO ...
  const todoRegex: RegExp = /(?<=\/\/ )TODO(?= \w+)[\sA-Za-z0-9].+/g;
  const fileContent = readFileSync(pathToFile, "utf-8");

  const matches = fileContent.match(todoRegex);

  console.log(matches);

  // TODO read the file and match  NOT THE TEST STRING

  //if (matches !== null) const todo = new Todo(matches[0]);

  // make a new Todo instance everytime
  // make a new File instance with its todos
  /**
   * return format:
   * [
   *   {
   *    fileName: ...,
   *    todos: [
   *      {
   *        todoText: ...
   *      }
   *    ]
   *   }
   * ]
   */
};
