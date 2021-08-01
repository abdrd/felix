import { traverseAndCollect } from "../todos/traverse"

export const produceFormattedResults = (root: string) => {
    const results = traverseAndCollect(root)
    // output todos
    const output = []
    for (const result of results) {
        if (result.todos.length > 0) {
            output.push(
                "\n" +
                    result.path +
                    "\n" +
                    result.todos.map(todo => "\t" + todo.text).join("\n")
            )
        }
    }
    return output
}
