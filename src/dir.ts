import dirTree from "directory-tree";

// pretty self explanatory, i guess
export const getAllFoldersAndFiles = (
  path: string
): dirTree.DirectoryTree[] => {
  const tree = dirTree(path);
  if (typeof tree.children !== "undefined") {
    return tree.children.filter((val) => val.type === "directory" || "file");
  }
  return [];
};
