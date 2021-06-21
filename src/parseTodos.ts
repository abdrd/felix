import { readFileSync } from "fs";
import Todo from "./Todo";
import File from "./File"

export const parseTodos = (file: File): File => {
  const todoRegex: RegExp = /(?<=\/\/\s?)(TODO|todo)(?= \w+)[\sA-Za-z0-9].+/g;
  const fileContent = readFileSync(file.path, "utf-8");

  const matches = fileContent.match(todoRegex);

  if (matches !== null) {
    matches?.forEach(match => {
      const todo = new Todo(match)
      file.todos.push(todo)
    })
  }
  
  return file
};
