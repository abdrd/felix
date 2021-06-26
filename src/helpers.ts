import dirTree from "directory-tree"
import File from "./classes/File"
import { readFileSync } from "fs"
import Todo from "./classes/Todo"
import { OUTPUT_FILE_NAME } from "./constants"

export const getAllFoldersAndFiles = (
    path: string
): dirTree.DirectoryTree[] => {
    const tree = dirTree(path)
    if (typeof tree.children !== "undefined") {
        return tree.children.filter(val => val.type === "directory" || "file")
    }
    return []
}

/**
 * recursively traverse through all the files in the project
 * and return them with all of their todos as an array of files.
 */
let result: File[] = []
export const rangeAllFiles = (startingPath: string): File[] => {
    const items = getAllFoldersAndFiles(startingPath)
    for (const item of items) {
        switch (item.type) {
            case "file":
                if (item.name === OUTPUT_FILE_NAME) {
                    continue
                }
                const f = parseTodos(new File(item.path, item.name))
                result.push(f)
            case "directory":
                rangeAllFiles(item.path)
        }
    }

    return result
}

export const parseTodos = (file: File): File => {
    const todoRegex: RegExp =
        /(?<=\/\/\|#|\/*s?)(TODO|todo)(?= \w+)[\sA-Za-z0-9].+/g
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
