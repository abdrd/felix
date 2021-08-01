import Todo from "./Todo"

class File {
    readonly path: string
    readonly name: string
    readonly todos: Todo[] = []

    constructor(path: string, name: string) {
        this.path = path
        this.name = name
    }
}

export default File
