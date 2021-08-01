import { readFileSync } from "fs"
import File from "../File"
import Todo from "../Todo"

const todoRegex: RegExp =
    /(?<=\/\/\|#|\/*s?)(TODO|todo)(?= \w+)[\sA-Za-z0-9].+/g

// parse all todo comments in a file and return a File object with todos back
export const parseTodos = (file: File): File => {
    const fileContent = readFileSync(file.path, "utf-8")

    const matches = fileContent.match(todoRegex)

    if (matches !== null) {
        matches?.forEach(match => {
            const todo = new Todo(match)
            file.todos.push(todo)
        })
    }

    return file
}
