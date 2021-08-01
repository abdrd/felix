import dirTree from "directory-tree"

export const getAllFoldersAndFiles = (
    path: string
): dirTree.DirectoryTree[] => {
    const tree = dirTree(path)
    if (typeof tree.children !== "undefined") {
        return tree.children.filter(
            val => val.type === "directory" || val.type === "file"
        )
    }
    return []
}
