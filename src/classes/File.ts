import Todo from "./Todo";

class File {
    path: string;
    name: string;
    todos: Todo[] = [];

    constructor(path: string, name: string) {
        this.path = path;
        this.name = name;
    }

    setTodos(todos: Todo[]) {
        this.todos = todos;
    }
}

export default File;
