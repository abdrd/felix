import File from "../File"
import { OUTPUT_FILE_NAME } from "../constants"
import { parseTodos } from "./parse"
import { getAllFoldersAndFiles } from "../get_fs_items"

/**
 * recursively traverse through all the files in the project
 * and return them with all of their todos as an array of files.
 */
let result: File[] = []
export const traverseAndCollect = (startingPath: string): File[] => {
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
                traverseAndCollect(item.path)
        }
    }

    return result
}
