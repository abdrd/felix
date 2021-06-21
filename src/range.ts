import { getAllFoldersAndFiles } from "./dir";
import { parseTodos } from "./parseTodos";
import File from "./File";

/**
 * recursively traverse through all the files in the project 
 * and return them with all of their todos as an array of files.
 */
let result: File[] = []
export const rangeAllFiles = (startingPath: string): File[] => {
  const items = getAllFoldersAndFiles(startingPath);
  for (const item of items) {
    switch (item.type) {
      case "file":
        const f = parseTodos(new File(item.path, item.name))
        result.push(f)
      case "directory":
        rangeAllFiles(item.path)
    }
  }
  
  return result
}