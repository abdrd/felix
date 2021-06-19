import dirTree from "directory-tree";

// TODO this this that
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
  // TODO HELLO GUYS
  path: string
): dirTree.DirectoryTree[] => {
  // TODO test test test ::D WOOHOO
  const tree = dirTree(path);
  if (typeof tree.children !== "undefined") {
    return tree.children.filter((val) => val.type === type);
  }
  return [];
};
