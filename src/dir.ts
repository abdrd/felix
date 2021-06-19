import fs, { Dir } from "fs";
import dirTree from "directory-tree";

export enum DirChildrenType {
  Directory = "directory",
  File = "file",
}

/**
 * @param type - the type of items you want to look for in the 'path'.
 * @param path - the path to search for items of 'type' in
 * @returns all the items of 'type' in the 'path'
 */
export const getAllItems = (
  type: DirChildrenType,
  path: string
): dirTree.DirectoryTree[] => {
  const tree = dirTree(path);
  if (typeof tree.children !== "undefined") {
    return tree.children.filter((val, idx) => val.type === type);
  }
  return [];
};
